function standardizeName(oldName) {
  return oldName.replace(/^\_*/, "").replace(/\_\S*\$/, "").replace(/\_\d/, "");
}

function instanceWithSimplifiedField(kotlinInstance, maxDeep, autoProxyMethod): any {
  if(kotlinInstance.isKotlinView){
    return kotlinInstance;
  }
  let newkotlinInstance = {isKotlinView: true};
  Object.getOwnPropertyNames(kotlinInstance).forEach(
    (oldName: string) => {
      let kotlinInstanceElement = kotlinInstance[oldName];
      let propertyclassName = !!kotlinInstanceElement && !!kotlinInstanceElement.__proto__ && !!kotlinInstanceElement.__proto__.constructor && kotlinInstanceElement.__proto__.constructor.name;
      let newName
      if (!isNaN(parseInt(oldName))) {
        newName = oldName;
      } else {
        newName = standardizeName(oldName);

        if (propertyclassName === 'ArrayList' && !Array.isArray(kotlinInstanceElement)) {
          //newName += "Array"
        }
        if (propertyclassName === "HashMap" || propertyclassName == "LinkedHashMap") {
         // newName += "Map"
        }
        if (propertyclassName === 'Function') {
        //  newName += "Function"
        }
      }
      let isNewNameAlreadyUsed = Object.getOwnPropertyDescriptor(newkotlinInstance, newName);
      if (!kotlinInstance.__proto__) {
        //TODO : most of the time it's inner object of stdlib class
        newkotlinInstance[newName] = kotlinInstanceElement
      }
      if (!kotlinInstance.__proto__[newName]) {
        try {
          if (maxDeep >= 0) {
            newkotlinInstance[newName] = parseKotlinToJsView(kotlinInstanceElement, maxDeep - 1, autoProxyMethod)
          } else {
            newkotlinInstance[newName] = kotlinInstanceElement
          }
        } catch (e) {
          console.error(e)
        }

      }

    }
  );
  return newkotlinInstance;
}

export function parseKotlinToJsView(kotlinInstance, maxDeep: number = 10000, autoProxyMethod = true) {
  if (!!maxDeep && maxDeep < 0) {
    return kotlinInstance
  } else if (kotlinInstance === undefined || kotlinInstance === null) {
    return kotlinInstance
  } else if (typeof kotlinInstance !== 'object') {
    return kotlinInstance
  } else if (Array.isArray(kotlinInstance)) {
    return kotlinInstance.map((item) => {
      return parseKotlinToJsView(item, maxDeep, autoProxyMethod)
    })

  } else {
    let className = kotlinInstance.__proto__.constructor.name
    if (className === "Function") {

      return (...args) => {
        const retourMethod = kotlinInstance.apply(null, args)
        if (autoProxyMethod) {
          return parseKotlinToJsView(retourMethod, maxDeep - 1, autoProxyMethod);
        } else {
          return retourMethod;
        }
      }

    } else if (className === 'ArrayList' || className === 'HashSet') {
      return kotlinInstance.toArray().map((item) => {
        if (maxDeep >= 0) {
          return parseKotlinToJsView(item, maxDeep - 1, autoProxyMethod)
        } else {
          return item;

        }
      })
    } else if (className === "HashMap" || className == "LinkedHashMap") {
      let newkotlinInstance = {};
      let protoMap = instanceWithSimplifiedField(kotlinInstance, 0, false);
      if (protoMap.internalMap) {
        protoMap = instanceWithSimplifiedField(protoMap.internalMap, 0, false)
        if (protoMap.backingMap) {
          Object.values(protoMap.backingMap)
            .forEach((protoEntry: { value: any, key: any }) => {
              let protoEntryProxy = instanceWithSimplifiedField(protoEntry, 0, false)
              //keep the $
              let key: string = protoEntryProxy.key.name$ ? protoEntryProxy.key.name$ : protoEntryProxy.key;
              newkotlinInstance[key] = parseKotlinToJsView(protoEntryProxy.value, maxDeep - 1, false);
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

export function parseKotlinPathToJsView(instance, ...path) {
  return parseKotlinToJsView(getFromKotlin(instance, ...path), 0, false)
}

export function getFromKotlin(instance: any, ...path: any[]) {
  if (path.length == 0 || !instance) {
    return instance;
  } else {
    let propertyclassName = instance.__proto__.constructor.name;
    if (instance.toArray) {
      return getFromKotlin(instance.toArray()[path[0]], ...path.slice(1));
    } else if (propertyclassName === "HashMap" || propertyclassName == "LinkedHashMap") {
      return getFromKotlin(parseKotlinToJsView(instance, 0, false)[path[0]], ...path.slice(1));
    } else {
      let field: string = Object.keys(instance).find(fieldName => {
        return standardizeName(fieldName) == path[0] //don't use ===, here
      });
      if (instance[field]) {
        return getFromKotlin(instance[field], ...path.slice(1))
      } else {
        return instance[field]
      }
    }
  }
}
