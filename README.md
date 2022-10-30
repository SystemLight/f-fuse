# f-fuse

[![NPM version](https://img.shields.io/npm/v/f-fuse.svg)](https://www.npmjs.com/package/f-fuse)

Defining functions to be executed during special periods  
NPM page: https://www.npmjs.com/package/f-fuse

# Installation

```
npm install f-fuse --save
```

# User Guide

```
// typescript: 

import Fuse from "f-fuse";


let f = new Fuse();

interface func {
    (item: number): number
}

// 使用Fuse定义的函数默认只会执行一次，之后重复调用将不再执行
// 这个行为可以定制，详见Fuse API文档
let print_info: func = f.def(function (item) {
    console.log("函数被调用: ", item);
    return item;
});

f.on(function (item: number) {
    return item > 3;
});

[1, 2, 3, 4, 5, 6, 7].forEach(value => {
    // print_info函数执行一次后，再次调用将不会执行
    let result = print_info(value);
    console.log("调用结果", result);
});

export default {}
```

```
// javascript: 

import Fuse from "f-fuse";


// 示例1： 传入参数大于3时，被执行一次之后不再执行且无返回值
let f = new Fuse();

let print_info = f.def(function (item) {
    console.log("函数被调用: ", item);
    return item;
});

f.on(function (item) {
    return item > 3;
});

[1, 2, 3, 4, 5, 6, 7].forEach(value => {
    let result = print_info(value);
    console.log("调用结果", result);
});
```

```
// javascript: 

// 示例2： 传入参数大于3时，除非手动调用cut()方法终止函数执行，否则与正常函数执行一样
// 注意手动模式下默认函数是不执行的，需要手动调用weld()方法，函数才会正常执行

let f2 = new Fuse({manual: true, memory: false});
f2.weld();

let print_info2 = f2.def(function (item) {
    console.log("函数被调用: ", item);
    return item;
});

f2.on(function (item) {
    return item > 3;
});

[1, 2, 3, 4, 5, 6, 7].forEach(value => {
    let result = print_info2(value);
    console.log("调用结果", result);
});
```

```
// javascript: 

// 示例3： 始终返回函数被cut时的返回值，但是函数不会被调用

let f3 = new Fuse({manual: false, memory: true});

let print_info3 = f3.def(function (item) {
    console.log("函数被调用: ", item);
    return item;
});

f3.on(function (item) {
    return item > 3;
});

[1, 2, 3, 4, 5, 6, 7].forEach(value => {
    let result = print_info3(value);
    console.log("调用结果", result);
});
```

```
传递闭包参数，closure方法传入的值可以通过closure_arg属性获取，之后可以根据该值进行判定
如下面的函数当且仅当传入索引值为3时才执行

let f = new Fuse({manual: true});
f.weld();
f.on(function (this: Fuse, item: number) {
    return this.closure_arg[0] === 3;
});


let print_info: (item: number) => number = f.def(function (item) {
    console.log("函数被调用: ", item);
    return item;
});


[1, 2, 3, 4, 5, 2, 7].forEach((value, index) => {
    f.closure(index);
    let result = print_info(value);
    console.log("调用结果", result);
});
```

# Note

默认情况：函数执行一次后自动被cut，导致之后不会被执行，且调用函数无任何返回内容  
如不定义on方法，fuse定义的函数将会在被执行第一次即为条件满足被熔断

- new Fuse(options)
  - manual:手动模式[默认是熔断的，需要调用weld方法，手动模式下函数不会触发一次后就自动熔断，除非手动调用cut方法]
  - memory:启用记忆[开启记忆功能，函数仍然不会重复被执行，但会始终返回函数被cut时的返回值]

- weld() : 调用该方法，让fuse定义的函数可以正常被执行
- cut() : 调用该方法，让fuse定义的函数无法被执行
- on(callback) : 当回调函数返回true时，函数被执行，不声明默认情况下全部情况返回true
- def(func) : 使用def定义特殊的函数，返回值为函数本身
- closure() : 闭包函数允许你传递一些值，这些值附着在closure_arg属性上，当使用on注册when回调函数时，可以通过this.closure_arg获取

# Resources

You can read [f-fuse Documentation](https://github.com/SystemLight/f-fuse) online for more information.

# License

f-fuse uses the MIT license, see LICENSE file for the details.
