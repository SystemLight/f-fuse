import {Fuse} from "../src";


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