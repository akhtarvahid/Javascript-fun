function deepClone(obj) {
    let output = {};
      if (typeof obj !== "object" || Array.isArray(obj) ||
        typeof obj == "function" || obj === null ||
        typeof obj === undefined
      ) {
        return obj;
       }
  
    const keys = Object.keys(obj);
    for(let [key] in keys) {
        output[keys[key]] = deepClone(obj[keys[key]])
    }
    return output;
  }