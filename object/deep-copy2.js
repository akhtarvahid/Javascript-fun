function deepClone(object) {
    let cloned = {};

    for (const key in object) {
        const isObject = typeof object[key] === 'object' && !Array.isArray(object[key]);
        if (isObject) {
            const temp = deepClone(object[key])
            cloned[key] = temp;
        } else if (Array.isArray(object[key])) {
            cloned[key] = object[key];
        }
        else {
            cloned[key] = object[key];
        }
    }
    return cloned;
}