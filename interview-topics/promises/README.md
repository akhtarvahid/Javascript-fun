# JavaScript Tricky Questions — Promises


### Q1. What would be the answer?

Try yourself first.

```Js
console.log('Play')
let promise = new Promise((resolve)=> {
    console.log('One');
    resolve('Two');
})
promise.then(res=> {
    console.log(res);
})
console.log('Stop');
```

Output:
- Play &nbsp; One &nbsp; Two &nbsp; Stop
- Play &nbsp; Stop &nbsp; One &nbsp; Two
- Play &nbsp; One &nbsp; Stop &nbsp; Two
- Play &nbsp; Stop &nbsp; Two &nbsp; One

<details>
  <summary>Answer</summary>

```in js
✅ Play One Stop Two
```

</details>

-----


### Q2. What would be the answer ?

```Js
function myFn(){ 
  console.log(4);
}
new Promise((resolve)=> {
    console.log(1);
    resolve(2);
    console.log(3)
}).then(console.log)
myFn();
```
Options
- 1 &nbsp; 4 &nbsp; 3 &nbsp; 2
- 1 &nbsp; 2 &nbsp; 3 &nbsp; 4
- 4 &nbsp; 1 &nbsp; 3 &nbsp; 2
- 1 &nbsp; 3 &nbsp; 4 &nbsp; 2
<details>
  <summary>Answer</summary>

```in js
✅ 1 3 4 2
```

</details>

-----

### Q3. What would be the answer ?

```Js
new Promise((resolve, reject)=> {
    console.log('one');
    reject('failed');
    console.log('three')
}).finally(()=> console.log('two')).catch(err=>{
    console.log(err);
})

```
Output?
- one  &nbsp; &nbsp;  three &nbsp; two &nbsp; &nbsp; failed
- three &nbsp; one &nbsp; &nbsp; two &nbsp; &nbsp; failed
- one &nbsp; &nbsp;  three &nbsp; failed &nbsp; two
- one &nbsp; &nbsp;  failed &nbsp; three &nbsp; two

<details>
  <summary>Answer</summary>

```in js
✅ one three two failed
```

</details>

-----

### Q4. What would be the answer?

```Js
console.log('start')
const fn = () => new Promise((resolve, reject)=> {
    console.log(pre);
    resolve("success")
 })
console.log('middle');
fn().then(res=>{
  console.log(res);
})
console.log('end');
```

Options
- start &nbsp; pre  &nbsp; &nbsp; &nbsp;  &nbsp;  middle &nbsp;&nbsp;&nbsp; end &nbsp; &nbsp; &nbsp; &nbsp;  success
- start &nbsp; middle &nbsp; end &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  pre  &nbsp; &nbsp; &nbsp; &nbsp; success
- start &nbsp; pre &nbsp; &nbsp; &nbsp; &nbsp;  success &nbsp; middle &nbsp; end
- start &nbsp; middle &nbsp; pre  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  end  &nbsp; &nbsp; &nbsp; &nbsp; success
<details>
  <summary>Answer</summary>

```in js
✅ start middle pre end success
```

</details>

-----

### Q5. What would be the answer?

```Js
const fn = () => new Promise((resolve, reject)=> {
     console.log(1);
     reject(2);
     console.log(3);
 })
 console.log(4);
 fn().then(res=> {
     console.log('pre');
     return res;
 }).catch(er => {
     console.log(er);
 }).finally(() => {
     console.log(5);
 }).then(res => console.log(res));

```

Options
- 1 2 3 4 5 undefined
- 4 1 2 3 5 undefined
- 4 1 3 2 5 undefined
- 1 3 2 4 5 undefined

<details>
  <summary>Answer</summary>

```in js
✅ 4 1 3 2 5 undefined
```

</details>

-----

### Q6. What would be the answer?

```Js
console.log('start')
const iPromise = () => new Promise((resolve, reject)=> {
    console.log(1);
    resolve("success");
    console.log(2);
 })
 console.log('middle');
 iPromise().then(res=> {
     console.log('pre');
     return res;
 }).catch(er => console.log(er))
   .finally(() => console.log(3))
   .then(res => console.log(res));
 console.log('end');

```
<details>
  <summary>Answer</summary>

```in js
start middle 1 2 end pre 3 success
```

</details>

-----

### Q7. What will be the answer ?
```Js
function game() {
    return new Promise((resolve, reject) => {
        reject();
    })
  }
  let promise = game();
  promise
  .then(() => {
    console.log('Success-1');
  })
  .then(() => {
    console.log('Success-2');
  })
  .then(() => {
    console.log('Success-3');
  })
  .catch(() => {
    console.log('Error-1');
  })
  .then(() => {
    console.log('Success-4');
  })
  .then(() => {
    console.log('Success-5');
  })
  .catch(() => console.log('Error-2'))
  .finally(()=> console.log('Done'))
```
Options
- Error-1  Success-4  Success-5  Done
- Error-4  Success-1  Success-5  Done
- Error-2  Success-4  Success-5  Done
- Error-3  Success-4  Success-5  Done

<details>
  <summary>Answer</summary>

```in js
✅ Error-1 Success-4 Success-5  Done
```

</details>

-----

### Q8. Pick the correct option

```Js
function performer(state) {
    return new Promise((resolve, reject) => {
        if (!state) {
            reject('error')
        } else {
            resolve('Success');

        }
    })
}
let promisedJob = performer(true);
promisedJob.then((data) => {
    console.log(data);
    return performer(false);
}).catch((error) => {
    console.log(error);
    return "Caught Error"
}).then((data) => {
    console.log(data);
    return performer(true);
}).catch((error) => {
    console.log('ERROR');
    console.log(error);
}).finally(() => {
    console.log('🗳️');
})
```
Output?
- success,  error,  Caught Error,  🗳️
- success,  error,  🗳️,  Caught Error
- success,  error,  Caught Error,  ERROR
- success,  error,  Caught Error,  🗳️

<details>
  <summary>Answer</summary>

```in js
✅ success, error, Caught Error 🗳️
```

</details>

-----

### Q9. What would be answer?
```Js
function performer(state) {
    return new Promise((resolve, reject) => {
        if (state) {
            resolve('success')
        } else {
            reject('error')
        }
    })
}
performer(true)
.then((data) => {
    console.log(data);
    return performer(true);
})
.then((data) => {
    if(data!=='Won') {
        throw '🥂';
    }
    return performer(true);
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
    return performer(false);
})
.then((data) => {
    console.log(data);
    return performer(true);
})
.catch((error) => {
    console.log(error);
    return "caught-error"
})
.then((data) => {
    console.log(data); 
    return new Error('test')
})
.then((data) => {
    console.log("success-msg:", data.message);
    return performer(true);
})
.catch((data) => console.log('err-msg:', data.message))

```
Options
- success,  🥂,  error,  caught-error,   success-msg:test
- success,  🥂,  error,  success-msg:test,  caught-error
- success,  error,  🥂,   caught-error,   success-msg:test

<details>
  <summary>Solution</summary>

```in js
✅ success,  🥂,  error,  caught-error,  success-msg:test
```

</details>

-----

### Q10. What would be the answer?

```Js
const promise1 = new Promise((reject) => {
    reject('promise-resolved');
    console.log('two');
})
const promise2 = new Promise((resolve) => {
    console.log('one');
    resolve(promise1);
    console.log('three');
})
promise2
.then(response => response)
.then(res => console.log(res))
.catch(err => console.log('error:',err))
```
Options
- two one three promise-resolved
- one three two promise-resolved
- one two three promise-resolved
- two one three error:promise-resolved
<details>
  <summary>Answer</summary>

```in js
✅ two one three promise-resolved
```

</details>

-----

### Q11. Convert below code in async-await format

`let API_URL = 'https://jsonmock.hackerrank.com/api/movies?year=2023';`

```Js
function getMovieData(URL) {
  return fetch(URL).then(response => {
      if (response.status == 200) {
          return response.json();
      } else {
          throw new Error(response.status)
      }
  })
}

getMovieData(API_URL)
.then(response => console.log(response))
.catch(err => console.log(err));

```
<details>
  <summary>Answer</summary>

```js
async function getMovieData(URL) {
  let response = await fetch(URL)
   if (response.status == 200) {
      response = await response.json();
      return response;
   }

  throw new Error(response.status)
}

getMovieData(API_URL)
.then(response =>console.log(response))
.catch(err => console.log(err));

```

</details>

-----

### Q12. Complete `executeRecursively` function to solve promises recursively
Given promises
```Js
function likeVideoPromise(param) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(param);
        }, 2000);
    })
}
function shareVideoPromise(param) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(param);
        }, 1000);
    })
}
function subscribeVideoPromise(param) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(param);
        }, 3000);
    })
}
```

Complete `executeRecursively` function

```Js
function executeRecursively(promises) {

    // write your code here

}

executeRecursively([
  likeVideoPromise('Liked video'),
  shareVideoPromise('Shared video'),
  subscribeVideoPromise('Subscribed video')
]);
```
<details>
  <summary>Complete code</summary>

```js
function executeRecursively(promises) {
    if (promises.length == 0) {
        return
    }

    const currentPromise = promises.shift();

    currentPromise
     .then(res => console.log(res))
     .catch(err => console.log(err));    

    executeRecursively(promises);
}
```

</details>

-----

### Q13. What will be the output of 

```Js
const firstPromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'THREE');
});

const secondPromise = new Promise((resolve) => {
  setTimeout(resolve, 200, 'ONE');
});

Promise
.race([firstPromise, secondPromise])
.then(res => console.log(res));
```
Options
- ONE  THREE
- THREE
- ONE
- THREE ONE
<details>
  <summary>Answer</summary>

```in js
✅ ONE
```

</details>

-----

### Q14. What will be the answer

```Js
async function loadData() {
  return await Promise.resolve('Data loaded!');
}

const data = loadData();
console.log(data);
```

Output?
- Promise {<pending>}
- "Data loaded!"
- Promise {<pending> undefined }
- Promise {<resolved>: "Data loaded!"}
<details>
  <summary>Answer</summary>

```js
✅ Promise {<pending>}
```

</details>

-----

### Q15. What will be the output?

```Js
const fakePromise = () => Promise.resolve('RESOLVED!');

async function firstFunction() {
  console.log(await fakePromise());
  console.log('END');
}

async function secondFunction() {
  console.log(await fakePromise());
  console.log('END');
}

firstFunction();
secondFunction();
```
Options
- RESOLVED! &nbsp; RESOLVED! &nbsp; END &nbsp; END
- RESOLVED! &nbsp; END &nbsp; RESOLVED! &nbsp; END
- END &nbsp; END &nbsp; RESOLVED! &nbsp; RESOLVED!
- END &nbsp; RESOLVED! &nbsp; END &nbsp; RESOLVED!
<details>
  <summary>Answer</summary>

```in js
✅ RESOLVED! END RESOLVED! END
```

</details>

-----
### Q16. What will be the answer?

```Js
new Promise((resolve)=> resolve(5))
.then(console.log)
.then(Promise.resolve(10).then(console.log));
```
Output?
- 10 5
- 5 10
- 5
- 10
<details>
  <summary>Answer</summary>

```in js
✅ 5 10
```

</details>

-----

### Q17. What will be the answer ?
```Js
function promiseFn() { 
  return Promise.resolve('done!')
};

function fnc1() {
  promiseFn().then(res => console.log(res));
  console.log('fnc1-end');
}

async function fnc2() {
  console.log(await promiseFn());
  console.log('fnc2-end');
}

fnc1();
fnc2();
```

Options
- done! done! fnc1-end fnc2-end 
- fnc1-end done! done! fnc2-end
- done! fnc1-end done! fnc2-end
- fnc1-end done! fnc2-end done! 

<details>
  <summary>Answer</summary>

```in js
✅ fnc1-end done! done! fnc2-end
```

</details>

-----

### Q18. What would be the answer?

```Js
function fnPromiseFn1() { 
  promise().then(res => {
      console.log('First');
      console.log(res);
  });
}
const fnPromiseFn2 = () => {
  promise().then(console.log);
  console.log('Second');
}
const promise = () => new Promise((resolve)=>resolve('Started'));
console.log('Finished');
fnPromiseFn2();
fnPromiseFn1();
```
Output?
- end! &nbsp; 2nd  &nbsp; 1st &nbsp; done &nbsp; done
- end! &nbsp; 1st &nbsp; done &nbsp; 2nd &nbsp; done
- end! &nbsp; 2nd &nbsp; done &nbsp; 1st &nbsp; done
- end! &nbsp; done &nbsp; 1st &nbsp; 2nd &nbsp; done


<details>
  <summary>Answer</summary>

```in js
✅ end! 2nd done 1st done
```
</details>

-----

### Q19. What will be the answer?

```Js
new Promise((resolve)=> resolve(5))
.finally(() => console.log(15))
.then(console.log)
.then(Promise.resolve(10).then(console.log));
```
Options
- 15 &nbsp; 10
- 15 &nbsp; 5
- 15 &nbsp; 10 &nbsp; 5
- 15 &nbsp; 5 &nbsp; 10
<details>
  <summary>Answer</summary>

```in js
✅ 15 10 5
```

</details>

-----

### Q20. What's output ?

```Js
let promise1 = new Promise((resolve, reject) => {
    reject('eight');
});
let promise2 = new Promise((resolve, reject) => {
    resolve('ten');
});
promise1
.finally(function(data) {
    console.log("🚀:", data)
})
.then(function(data) {
    console.log('🗳️1:', data);
    return promise2;
})
.then(function(data) {
    console.log('🗳️2:', data);
})
.catch(function(err) {
    console.log('🛑:', err); 
    return "caught-err";
}) 
.finally(function(data){
    console.log("🚀: ", data)
    return 'FINALLY';
})
.then(function(data) {
    console.log('🛑:', data); 
});
```

Options
- 🚀:undefined, &nbsp; 🛑:eight, &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 🚀:undefined, &nbsp; &nbsp; 🛑:caught-err
- 🚀:undefined, &nbsp; 🚀:undefined, &nbsp; &nbsp; 🛑:eight, &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 🛑:caught-err
- 🛑:eight, &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    🚀:undefined, &nbsp; &nbsp; 🛑:eight, &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 🚀:undefined
- 🛑:eight, &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  🚀:undefined, &nbsp; &nbsp; 🛑:caught-err, &nbsp; 🚀:undefined

<details>
  <summary>Answer</summary>

```in js
🚀: undefined, 🛑:eight, 🚀:undefined, 🛑:caught-err
```

</details>

-----

### Q21.What would be the answer?
```Js
console.log('hey')
const promise = new Promise((resolve, reject) => {
  console.log('yo!')
})
console.log('bye');
```
Options
- hey &nbsp; bye &nbsp; yo!
- hey &nbsp; yo! &nbsp; bye
- hey &nbsp; yo!
<details>
  <summary>Answer</summary>

```in js
✅ hey yo! bye
```

</details>

-----

### Q22. What would be the answer?
```Js
const promFn1 = () => new Promise((reject) => reject(101));
const promFn2 = () => new Promise((resolve) => resolve(102));
promFn2()
.finally((data) => {
    console.log('🚀:',data) 
    return Promise.reject(101);
})
.then((data) => {
    console.log('🗳️:', data);
    return promise1;
})
.catch((err) => {
    console.log('🛑:', err);        
    return "error";
}) 
.then(console.log('🔥:'+104))
.then((data)=> console.log('🗳️:', data));
```
Options
- 🔥:104 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 🛑:101 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 🚀:undefined &nbsp; &nbsp;🗳️:error
- 🚀:102 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 🛑:101 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 🔥:104 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 🗳️:error
- 🔥:104 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 🚀:undefined &nbsp; 🛑:101 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; 🗳️:error
- 🚀:undefined &nbsp; &nbsp; 🗳️:102 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;🔥:104 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 🗳️:error
<details>
  <summary>Answer</summary>

```in js
🔥:104, 🚀:undefined, 🛑:101,  🗳️:error
```

</details>

-----

### Q23. What would be the answer?

```Js
const proms1 = () => new Promise((resolve) => resolve(2));
const proms2 = () => new Promise((resolve) => resolve(4));
const proms3 = () => new Promise((reject) => reject(6));
const proms4 = () => new Promise((resolve) => resolve(8));
Promise.all([proms1(), proms3(), proms2(), proms4()])
.then(values=> console.log(values))
.catch(err => console.log(err))
```

Options
- [2, 4, 8]
- [ 6 ]
- Error
- [2, 4, 6, 8]
<details>
  <summary>Answer</summary>
Tip: If you don't define both resolve and reject, reject will be treated as first parameter which is resolve.

```in js
✅ [2, 6, 4, 8]
```

</details>

-----

### Q24. What would be the answer?

```Js
const pro1 = new Promise((res, rej) => {
    setTimeout(res, 1000, 1);
});
const pro2 = new Promise((res, rej) => {
    setTimeout(rej, 100, 2);
});
const pro3 = new Promise((res, rej) => {
    setTimeout(res, 10, 3);
});
const pro4 = 4;
Promise.any([pro1, pro2, pro3, pro4])
.then(values=> console.log(values))
.finally(() => console.log(5))    
.catch(err => console.log(err))
```

Options
- 4 &nbsp; 5
- 1
- 4
- 1 &nbsp; 5
<details>
  <summary>Answer</summary>

```in js
✅ 4 5
```

</details>

-----

### Q25. What would be the answer ?

```Js
function task1(){
    new Promise((resolve, rej) => rej(11));
}
const task2 = new Promise((resolve,reject) => {
    setTimeout(resolve, 1000, 13);
});
const task3 = new Promise((resolve) => resolve(17));
const task4 = 19;
Promise.race([task2, task3, task4, task1()])
.then(values=> { 
   console.log(values);
   return 23;  
})
.catch(err => console.log(err))
.then(d => console.log(d))
```

Options
- 11
- 19
- 19 &nbsp; 23
- 17 &nbsp; 23
<details>
  <summary>Answer</summary>

```js
✅ 17 23
```

</details>

-----

### Q26. What would be the answer?

```Js
function p1() {
    return new Promise((resolve, rej) => rej(2));
}
let p2 = new Promise((resolve,reject) => {
    setTimeout(resolve, 1000, 4);
});
let p3 = () => new Promise((resolve,rej) => rej(6));
Promise.any([p2, p3(), p1()])
.then(value => console.log(value))
.catch(err => console.log(err))
.finally(console.log(8))
```
Options
- 2
- 2 &nbsp; 8
- 4 &nbsp; 8
- 8 &nbsp; 4 

<details>
  <summary>Answer</summary>

```js
✅ 8 4
```

</details>

-----

### Q27. What would be the answer

```Js
let myPromise1 = new Promise((resolve) => resolve('🏃'));
let myPromise2 = () => new Promise((resolve) => setTimeout(resolve, 100, '🚴'));
let myPromise3 = new Promise((reject) => reject('🚙'));
let myPromise4 = new Promise((resolve) => resolve('🛫'));
myPromise1
.finally(function(data) {
    console.log("🥂:", data) 
    return myPromise3; 
})
.then(function(data) {
    console.log('🗳️:', data);
    return myPromise2();
})
.then(function(data) {
    console.log('🎁:', data);
    return myPromise4;
})
.catch(function(err) {
    console.log('🧃: ', err);
    return "caught-error";
})
.then(function(data) {
    console.log('💝:', data);
});
```

Options
- 🥂:undefined &nbsp; &nbsp; 🧃:🚙 &nbsp; &nbsp; 💝:🛫

- 🥂:undefined &nbsp; &nbsp; 🗳️:🏃 &nbsp; &nbsp; 🎁:🚴 &nbsp; &nbsp; 💝:🛫

- 🥂:undefined &nbsp; &nbsp; 🗳️:🚙 &nbsp; &nbsp; 🎁:🚴 &nbsp; &nbsp; 💝:🛫

- 🗳️:🚙 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 🎁:🚴 &nbsp; &nbsp; 💝:🛫

<details>
  <summary>Answer</summary>

```js
 🥂:undefined, 🗳️:🏃, 🎁:🚴, 💝:🛫
```

</details>

-----

### Q28. What would be the answer

```Js
function executer(time, arg) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(arg);
        }, time);
    });
}
(async () => {
    let m = executer(2000, 11).then(console.log);
    console.log(13);
    let n = executer(1000, 15).then(console.log);
    let i = await executer(2000, 17)
    let j = await executer(1000, 19);
    console.log(i, j);
})();
```

Options
- 13 &nbsp; 11 &nbsp; 15 &nbsp; 17 &nbsp; 19
- 13 &nbsp; 17 &nbsp; 19 &nbsp; 11 &nbsp; 15
- 13 &nbsp; 15 &nbsp; 11 &nbsp; 17 &nbsp; 19
- 11 &nbsp; 13 &nbsp; 15 &nbsp; 17 &nbsp; 19

<details>
  <summary>Answer</summary>

```js
✅ 13 15 11 17 19
```

</details>

-----