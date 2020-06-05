import get from 'lodash/get';

function instanceWithSimplifiedField(kotlinInstance, maxDeep, autoProxyMethod) {
  let newkotlinInstance = {};
  Object.getOwnPropertyNames(kotlinInstance).forEach(
    (oldName) => {
      newkotlinInstance[oldName] = kotlinInstance[oldName]
      let propertyclassName = get(kotlinInstance, oldName + '.__proto__.constructor.name');
      let newName
      if (Number.isInteger(oldName)) {
        newName = oldName;
      } else {


        newName = oldName.replace(/\_\S*\$/, "").replace(/\_\d/, "");

        if (propertyclassName === 'ArrayList' && !Array.isArray(kotlinInstance[oldName])) {
          newName += "Array"
        }
        if (propertyclassName === "HashMap" || propertyclassName == "LinkedHashMap") {
          newName += "Map"
        }
        if (propertyclassName === 'Function') {
          newName += "Function"
        }
      }
      let isNewNameAlreadyUsed = Object.getOwnPropertyDescriptor(newkotlinInstance, newName);
      if (!kotlinInstance.__proto__) {
        //TODO : most of the time it's inner object of stdlib class
        newkotlinInstance[newName] = kotlinInstance[oldName]
      }
      if (!get(kotlinInstance, '__proto__.' + newName)) {
        try {
          if (maxDeep >= 0) {
            newkotlinInstance[newName] = kotlinProxyToJsView(kotlinInstance[oldName], maxDeep - 1, autoProxyMethod)
          } else {
            newkotlinInstance[newName] = kotlinInstance[oldName]
          }
        } catch (e) {
          console.error(e)
        }

      }

    }
  );
  return newkotlinInstance;
}

export function kotlinProxyToJsView(kotlinInstance, maxDeep = undefined, autoProxyMethod = true) {
  if (maxDeep && maxDeep < 0) {
    return kotlinInstance
  } else if (kotlinInstance === undefined || kotlinInstance === null) {
    return kotlinInstance
  } else if (typeof kotlinInstance !== 'object') {
    return kotlinInstance
  } else if (Array.isArray(kotlinInstance)) {
    return kotlinInstance.map((item) => {
      return kotlinProxyToJsView(item, maxDeep, autoProxyMethod)
    })

  } else {
    let className = get(kotlinInstance, '__proto__.constructor.name');
    if (className === "Function") {

      return (...args) => {
        const retourMethod = kotlinInstance.apply(null, args)
        if (autoProxyMethod) {
          return kotlinProxyToJsView(retourMethod, maxDeep - 1, autoProxyMethod);
        } else {
          return retourMethod;
        }
      }

    }else if (className === 'ArrayList') {
      let arrayName = Object.getOwnPropertyNames(kotlinInstance)
        .filter((itemArray) => {
          return itemArray.startsWith("array")
        })[0];
      return kotlinInstance[arrayName].map((item) => {
        if (maxDeep >= 0) {
          return kotlinProxyToJsView(item, maxDeep - 1, autoProxyMethod)
        } else {
          return item;

        }
      })
    } else if (className === "HashMap" || className == "LinkedHashMap") {

      let newkotlinInstance = {};
      let protoMap = instanceWithSimplifiedField(kotlinInstance, 0, false);
      if (protoMap.internalMap) {
        protoMap = kotlinProxyToJsView(protoMap.internalMap, 0, false)
        if (protoMap.backingMap) {
          Object.values(protoMap.backingMap)
            .forEach((protoEntry) => {
              protoEntry = kotlinProxyToJsView(protoEntry, maxDeep, false)
              //keep the $
              newkotlinInstance[protoEntry.key.name$] = protoEntry._value;

            })
        }
      }
      return newkotlinInstance
    } else {

      let newkotlinInstance = instanceWithSimplifiedField(kotlinInstance, maxDeep, autoProxyMethod);
      newkotlinInstance.className = className;
      return newkotlinInstance
    }
  }
  return kotlinInstance;
}

export function printProxyModel(obj, indentation = "") {

  return Object.keys(obj).map(key => {

    if (key.endsWith("Array")) {
      return printProxyModel(obj[key][0]);
    }
    return key;

  })
}

