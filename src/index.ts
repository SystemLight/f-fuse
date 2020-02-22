interface IWhen {
    (...args: any[]): boolean
}

interface IDef {
    (...args: any[]): any
}

export class Fuse {

    private isBroken: boolean;
    private when: IWhen;

    constructor(
        public manual?: boolean
    ) {
        this.manual = manual || false;
        this.isBroken = this.manual;
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

    def(func: IDef) {
        let that = this;
        return function (...args: any[]) {
            let result;
            if (!that.isBroken) {
                if (!that.manual && that.when(...args)) {
                    that.isBroken = true;
                    result = func(...args);
                } else if (that.manual) {
                    result = func(...args);
                }
            }
            return result;
        }
    }
}