interface IWhen {
    (...args: any[]): boolean;
}
interface IDef {
    (...args: any[]): any;
}
export declare class Fuse {
    manual?: boolean | undefined;
    private isBroken;
    private when;
    constructor(manual?: boolean | undefined);
    weld(): void;
    cut(): void;
    __when(...args: any[]): boolean;
    on(callback: IWhen): void;
    def(func: IDef): (...args: any[]) => any;
}
export {};
