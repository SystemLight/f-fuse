interface IWhen {
    (...args: any[]): boolean
}

interface IDef {
    (...args: any[]): any
}

interface IFuseOptions {
    manual?: boolean,
    memory?: boolean
}

export class Fuse {

    private isBroken: boolean;
    private when: IWhen;
    private result: any;

    constructor(
        public opt: IFuseOptions = {}
    ) {
        this.isBroken = !!this.opt.manual;
        this.when = this.__when;
    }

    weld(): void {
        this.isBroken = false;
    }

    cut(): void {
        this.isBroken = true;
    }

    __when(...args: any[]): boolean {
        return true;
    }

    on(callback: IWhen): void {
        this.when = callback;
    }

    def(func: IDef): any {
        let {manual, memory} = this.opt;
        return (...args: any[]) => {
            if (this.isBroken && memory) {
                return this.result;
            } else if (!this.isBroken && this.when(...args)) {
                this.result = func(...args);
                !manual && this.cut();
                return this.result;
            }
        };
    }
}