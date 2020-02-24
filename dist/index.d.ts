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
export declare class Fuse {
    opt: IFuseOptions;
    private isBroken;
    private when;
    private result;
    constructor(opt?: IFuseOptions);
    weld(): void;
    cut(): void;
    __when(...args: any[]): boolean;
    on(callback: IWhen): void;
    def(func: IDef): any;
}
export {};
