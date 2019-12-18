class addclass {
    constructor() {
    }
    init(ele, classname) {
        if (ele instanceof NodeList) {
            for (let i = 0; i < ele.length; i++) {
                ele[i].nodeType === 1 && (ele[i].className += ' ' + classname + ' ');
            }
        } else if (ele instanceof Node) {
            ele.nodeType === 1 && (ele.className += ' ' + classname + ' ');
        }
    }
}
// export { addclass };

class removeclass {
    constructor(ele, classname) {
        this.arrclass = ele.className.split(' ');
        this.index = this.arrclass.indexOf(classname);
    }
    init() {
        if (this.index !== -1) {
            this.arrclass.splice(this.index, 1);
        }
        //[box1,box3]
        ele.className = this.arrclass.join(' ');
    }
}
export { addclass,removeclass }