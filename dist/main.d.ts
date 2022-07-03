interface IWhen {
    (...args: any[]): boolean;
}
interface IDef {
    (...args: any[]): any;
}
interface IFuseOptions {
    manual?: boolean;
    memory?: boolean;
}
export default class Fuse {
    opt: IFuseOptions;
    private isBroken;
    private when;
    private result;
    closure_arg: any;
    constructor(opt?: IFuseOptions);
    weld(): void;
    cut(): void;
    __when(...args: any[]): boolean;
    on(callback: IWhen): void;
    callComplete(): void;
    closure(...args: any[]): void;
    def(func: IDef): any;
}
export {};
