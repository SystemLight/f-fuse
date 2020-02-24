const {Fuse} = require("../dist/index.umd");


// 示例3：

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