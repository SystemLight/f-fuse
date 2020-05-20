import {Fuse} from "../src";


let f = new Fuse({manual: true});
f.weld();
f.on(function (this: Fuse, item: number) {
    return this.closure_arg[0] === 3;
});


// 使用Fuse定义的函数默认只会执行一次，之后重复调用将不再执行
// 这个行为可以定制，详见Fuse API文档
let print_info: (item: number) => number = f.def(function (item) {
    console.log("函数被调用: ", item);
    return item;
});


[1, 2, 3, 4, 5, 2, 7].forEach((value, index) => {
    f.closure(index);
    let result = print_info(value);
    console.log("调用结果", result);
});

export default {}