const Singleton = (() => {
    function ProcessManger() {
        this.numberOfProcess = 0
    }

    let pManager = null;

    function createProcess() {
        pManager = new ProcessManger();
        return pManager;
    }

    return {
        getProcess: () => {

            if (!pManager) {
                return createProcess()
            }
            return pManager;
        }
    }
})();

const p1 = Singleton.getProcess();
const p2 = Singleton.getProcess();
console.log(p1 === p2)