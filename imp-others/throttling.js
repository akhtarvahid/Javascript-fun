function throttle(func, delayTime = 200) {
    let shouldWait = false
  
    return (...args) => {
      if (shouldWait) return;
  
      func(...args)
      shouldWait = true
      setTimeout(() => {
        shouldWait = false
      }, delayTime)
    }

  }