function debounce(func, wait) {
    let timerId;
    return (...args) => {
        if (timerId) {
              clearTimeout(timerId);
          }
          timerId = setTimeout(() => {
              func(...args);
        }, wait);
    };
}