import { $ } from "./module_$.js";

function Person(){
    this.x = $('.x');
    this.y = $('.y');
    this.init=function(){
        // alert(this.x.innerHTML)
        console.log(this.x.innerHTML + "的年龄是" +this.y.innerHTML+"岁")
        // return (this.x.innerHTML + "的年龄是" +this.y.innerHTML+"岁")
    }
}
 
// Person.prototype.init = function (){
//     alert(this.x.innerHTML)
//     return (this.x.innerHTML + "的年龄是" +this.y.innerHTML+"岁")
// }
export {Person};

