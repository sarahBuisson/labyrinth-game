import get from 'lodash/get';

function instanceWithSimplifiedField(kotlinInstance, maxDeep, autoProxyMethod) {
  let newkotlinInstance = {};
  Object.getOwnPropertyNames(kotlinInstance).forEach(
    (oldName) => {
      let propertyclassName = get(kotlinInstance, oldName + '.__proto__.constructor.name');
      let newName
      if (Number.isInteger(oldName)) {
        newName = oldName;
      } else {


        newName = oldName.replace(/\_\S*\$/, "").replace(/\_\d/, "");

        if (propertyclassName === 'ArrayList') {
          newName += "Array"
        }
        if (propertyclassName == ("HashMap") || propertyclassName == ("LinkedHashMap")) {
          newName += "Map"
        }
      }
      let isNewNameAlreadyUsed = Object.getOwnPropertyDescriptor(newkotlinInstance, newName);
      if (!kotlinInstance.__proto__) {
        //TODO : most of the time it's inner object of stdlib class
        //  console.log(propertyclassName)
      }
      if (!isNewNameAlreadyUsed && !get(kotlinInstance, '__proto__.' + newName)) {
        try {

          if (maxDeep >= 0 || propertyclassName === 'ArrayList' || propertyclassName == ("HashMap") || propertyclassName == ("LinkedHashMap")) {


            newkotlinInstance[newName] = kotlinProxy(kotlinInstance[oldName], maxDeep - 1, autoProxyMethod)
            /*  console.log("in array")
              console.log(kotlinInstance[oldName])
              console.log( get(kotlinInstance[oldName], oldName + '.__proto__.constructor.name'))
              console.log(newkotlinInstance[newName] )
*/
          } else {
            console.log("keep same" + newName + " => " + oldName + " " + propertyclassName)
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

export function kotlinProxy(kotlinInstance, maxDeep = undefined, autoProxyMethod = true) {
  if (kotlinInstance === undefined || kotlinInstance === null) {
    return kotlinInstance
  } else if (typeof kotlinInstance === 'function') {

    return (...args) => {

      const retourMethod = kotlinInstance.apply(null, args)
      if (autoProxyMethod)
        return kotlinProxy(retourMethod, maxDeep - 1, autoProxyMethod);
      else return retourMethod;

    }
  } else if (typeof kotlinInstance !== 'object') {
    return kotlinInstance
  } else if (Array.isArray(kotlinInstance)) {
    return kotlinInstance.map((item) => {
      return kotlinProxy(item, maxDeep, autoProxyMethod)
    })

  } else {
    let className = get(kotlinInstance, '__proto__.constructor.name');

    if (className === 'ArrayList') {
      let arrayName = Object.getOwnPropertyNames(kotlinInstance)
        .filter((itemArray) => {
          return itemArray.startsWith("array")
        })[0];
      return kotlinInstance[arrayName].map((item) => {
        if (maxDeep >= 0) {
          return kotlinProxy(item, maxDeep - 1, autoProxyMethod)
        } else {
          return item;

        }
      })
    } else if  ( className==("HashMap")|| className==("LinkedHashMap")) {

    console.log("MAPPPP")
      let newkotlinInstance = {};
      let protoMap = instanceWithSimplifiedField(kotlinInstance, 0, false);
      console.log("protoMap")
      console.log(protoMap)
      if (protoMap.internalMap) {
        protoMap = kotlinProxy(protoMap.internalMap, 0, false)
        if (protoMap.backingMap) {
          Object.values(protoMap.backingMap)
            .forEach((protoEntry) => {
              protoEntry = kotlinProxy(protoEntry, maxDeep, false)

              newkotlinInstance[protoEntry.key.name] = protoEntry._value;

            })
          console.log("New map")
          console.log(newkotlinInstance)
        }
      }
      return newkotlinInstance
    }
    else{

      let newkotlinInstance = instanceWithSimplifiedField(kotlinInstance, maxDeep, autoProxyMethod);

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

