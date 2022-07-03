export default class Fuse {
    opt;
    isBroken;
    when;
    result;
    closure_arg;
    constructor(opt = {}) {
        this.opt = opt;
        this.isBroken = !!this.opt.manual;
        this.when = this.__when;
    }
    weld() {
        this.isBroken = false;
    }
    cut() {
        this.isBroken = true;
    }
    __when(...args) {
        return true;
    }
    on(callback) {
        this.when = callback.bind(this);
    }
    callComplete() {
    }
    closure(...args) {
        this.closure_arg = args;
    }
    def(func) {
        let { manual, memory } = this.opt;
        return (...args) => {
            if (this.isBroken && memory) {
                return this.result;
            }
            else if (!this.isBroken && this.when(...args)) {
                this.result = func(...args);
                !manual && this.cut();
                this.callComplete();
                this.callComplete = () => {
                };
                return this.result;
            }
        };
    }
}
//# sourceMappingURL=main.js.map