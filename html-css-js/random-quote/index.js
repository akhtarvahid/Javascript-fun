// Random quote generator with clipboard to copy the quote
fetch('https://api.quotable.io/random')
.then(res=>res.json())
.then(re => console.log(re));