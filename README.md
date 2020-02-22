# F-fuse

[![NPM version](https://img.shields.io/npm/v/f-fuse.svg)](https://www.npmjs.com/package/f-fuse)

Defining functions to be executed during special periods
NPM page: https://www.npmjs.com/package/f-fuse

# Installation

```
npm install f-fuse --save
```

# User Guide

```
import {Fuse} from "f-fuse";


let f = new Fuse(false);

// 使用Fuse定义的函数默认只会执行一次，之后重复调用将不再执行
// 这个行为可以定制，详见Fuse API文档
let print_info = f.def(function (item) {
    console.log("hello", item);
    return true;
});

for (let i in [1, 2, 3, 4, 5, 6, 7]) {
    // print_info函数执行一次后，再次调用将不会执行
    print_info(i);
}
```

# Note

- new Fuse(manual:是否手动控制，设置为true需要显示调用方法才可让函数调用时不再执行)
- weld() : 调用该方法，让fuse定义的函数可以正常被执行
- cut() : 调用该方法，让fuse定义的函数无法被执行
- on(callback) : 当回调函数返回true时，函数被执行，自动模式下有效,回调函数接受定义函数的所有参数
- def(func) : 使用def定义特殊的函数，返回值为函数本身

# Resources

You can read [f-fuse Documentation](https://github.com/SystemLight/f-fuse) online for more information.

# License

f-fuse uses the MIT license, see LICENSE file for the details.
