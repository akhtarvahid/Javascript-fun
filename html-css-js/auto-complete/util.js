function debounce(func, delay = 500) {
    let timerId;
    return function (...args) { 
        if (timerId) {
            clearTimeout(timerId)
        }
        timerId = setTimeout(function () {
            func(...args);
        }, delay)
    }
}
export default debounce;