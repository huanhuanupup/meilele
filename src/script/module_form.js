import { $ } from "./module_$.js";
// import { addclass,removeclass } from "./module_class.js";
// import { removeclass } from "./module_class.js";

//  let add=new addclass();
//  let remove= new removeclass();
class form {
    constructor() {
        this.oForm = $('#JS_register_form');
        this.aInput = $('.register_input', 'true');
        this.oDiv = $('.error', 'true');
        this.aSuccess = $('.success', 'true')
        this.aA = $('.change-one');
        this.sChecked = $('#sms_checked_look');
        this.passyz = '';
        this.yanzhenma = '';
        this.usernameflag = true;
        this.passwordfalg = true;
        this.passsecond = true;
        this.phoflag = true;
        this.yanzhenflag = true;
    }
    init() {
        this.username(this.aInput[0]);
        this.password(this.aInput[1]);
        this.second(this.aInput[2]);
        this.phone(this.aInput[3]);
    }
    username(selector) {
        let _this = this;
        selector.onfocus = function () {
            if (this.value === '') {
                _this.oDiv[0].innerHTML = '用户名可使用字母、汉字、数字、下划线或其组合，4～20个字符，且不能为纯数字';
                _this.oDiv[0].style.visibility = "visible";
            }
        }
        selector.onblur = function () {
            var reguser1 = /^(?!\d+$)[\w]{4,20}$/g;
            var reguser2 = /^[\u4e00-\u9fa5]+$/g;
            var reguser3 = /^[\w\u4e00-\u9fa5]+$/g;
            if (this.value !== '') { //表单内容不为空，进行正则判断
                var len = this.value.replace(/[\u4e00-\u9fa5]/g, '**').length;
                if (len <= 20 && len >= 4) { //判断长度
                    if (reguser1.test(this.value) || reguser2.test(this.value) || reguser3.test(this.value)) { //正则判断
                        _this.oDiv[0].style.visibility = 'hidden';
                        _this.aSuccess[0].style.visibility = 'visible';
                        _this.usernameflag = true;
                    } else {
                        _this.oDiv[0].innerHTML = '用户名可使用字母、汉字、数字、下划线或其组合，4～20个字符，且不能为纯数字';
                        _this.oDiv[0].style.cssText += 'color:#d10000; background: #fff3f3;border: solid 1px #ffe4e4';
                        _this.aSuccess[0].style.visibility = 'hidden';
                        _this.usernameflag = false;
                    }
                } else {
                    _this.oDiv[0].innerHTML = '用户名可使用字母、汉字、数字、下划线或其组合，4～20个字符，且不能为纯数字';
                    _this.oDiv[0].style.cssText += 'visibility:visible;color:#d10000; background: #fff3f3;border: solid 1px #ffe4e4';
                    _this.aSuccess[0].style.visibility = 'hidden';
                    _this.usernameflag = false;
                }

            } else { //表单内容为空，报错
                _this.oDiv[0].innerHTML = '用户名可使用字母、汉字、数字、下划线或其组合，4～20个字符，且不能为纯数字';
                _this.oDiv[0].style.cssText += 'color:#d10000; background: #fff3f3;border: solid 1px #ffe4e4';
                _this.usernameflag = false;
            }

        }
    }
    password(selector) {
        let _this = this;
        selector.onfocus = function () {
            _this.oDiv[1].innerHTML = '6-20位，支持字母、数字或符号的组合，不可单独使用字母、数字或符号';
            _this.oDiv[1].style.cssText += 'visibility:visible;color:#d10000; background: #fff3f3;border: solid 1px #ffe4e4';
        }
        selector.oninput = function () {
            if (this.value.length >= 6 && this.value.length <= 12) {

                var regnum = /\d+/;
                var reglow = /[a-z]+/;
                var regupp = /[A-Z]+/;
                var regoth = /[\W\_]+/;
                var count = 0;
                if (regnum.test(this.value)) {
                    count++;
                }
                if (reglow.test(this.value)) {
                    count++;
                }
                if (regupp.test(this.value)) {
                    count++;
                }
                if (regoth.test(this.value)) {
                    count++;
                }
                switch (count) {
                    case 1:
                        _this.oDiv[1].innerHTML = '弱';
                        _this.oDiv[1].style.color = 'red';
                        _this.passwordfalg = false; break;
                    case 2:
                        _this.oDiv[1].innerHTML = '弱';
                        _this.oDiv[1].style.color = 'red';
                        _this.passwordfalg = true; break;
                    case 3:
                        _this.oDiv[1].innerHTML = '中';
                        _this.oDiv[1].style.color = 'yellow';
                        _this.passwordfalg = true; break;
                    case 4:
                        _this.oDiv[1].innerHTML = '强';
                        _this.oDiv[1].style.color = 'green';
                        _this.passwordfalg = true; break;
                }
            } else {
                _this.oDiv[1].innerHTML = '6-20位，支持字母、数字或符号的组合，不可单独使用字母、数字或符号';
                _this.oDiv[1].style.cssText += 'color:#d10000; background: #fff3f3;border: solid 1px #ffe4e4';
                _this.passwordfalg = false;
            }
        }
        selector.onblur = function () {
            if (this.value !== '') {
                if (_this.passwordfalg) {
                    _this.oDiv[1].style.visibility = 'hidden';
                    _this.aSuccess[1].style.visibility = 'visible';
                    _this.passwordfalg = true;
                    _this.passyz = this.value;
                } else {
                    _this.oDiv[1].innerHTML = '6-20位，支持字母、数字或符号的组合，不可单独使用字母、数字或符号';
                    _this.oDiv[1].style.cssText += 'color:#d10000; background: #fff3f3;border: solid 1px #ffe4e4';
                    _this.passwordfalg = false;
                }
            } else {
                _this.oDiv[1].innerHTML = '6-20位，支持字母、数字或符号的组合，不可单独使用字母、数字或符号';
                _this.oDiv[1].style.cssText += 'color:#d10000; background: #fff3f3;border: solid 1px #ffe4e4';
                _this.passwordfalg = false;
            }
        }
    }
    second(selector){
        let _this=this;
        selector.onfocus=function(){
            if(this.value === ''){
                _this.oDiv[2].innerHTML='请确保两次输入的密码一致';
                _this.aSuccess[2].style.visibility='hidden';
                _this.passsecond=false;
            }
        }
        selector.onblur=function(){
            if(this.value != _this.passyz){
                _this.oDiv[2].innerHTML='请确保两次输入的密码一致';
                _this.oDiv[2].style.cssText+='visibility:visible;color:#d10000; background: #fff3f3;border: solid 1px #ffe4e4';
                _this.passsecond=false;
            }else{
                _this.oDiv[2].style.visibility='hidden';
                _this.aSuccess[2].style.visibility='visible';
                _this.passsecond=true;
            }
        }
    }
    phone(selector){
        let _this=this;
        selector.onfocus = function () {
            if (this.value === '') {
                _this.oDiv[3].innerHTML = '请输入正确的手机号码';
                _this.aSuccess[3].style.visibility='hidden';
                phofalg = false;
            }
        }
        selector.onblur = function () {
            var regpho = /^1[3578]\d{9}$/g;
            if (this.value !== '') {
                if (regpho.test(this.value)) {
                    _this.oDiv[3].style.visibility='hidden';
                    _this.aSuccess[3].style.visibility='visible';
                    phofalg = true;
                } else {
                    _this.oDiv[3].innerHTML = '请输入正确的手机号';
                    _this.oDiv[3].style.cssText+='visibility:visible;color:#d10000; background: #fff3f3;border: solid 1px #ffe4e4';
                    phofalg = false;
                }
            } else {
                _this.oDiv[3].innerHTML = '请输入正确的手机号码';
                _this.oDiv[3].style.color = "red";
                phofalg = false;
            }
        }
    }
    // addclass (ele, classname) {
    //     if (ele instanceof NodeList) {
    //         for (let i = 0; i < ele.length; i++) {
    //             ele[i].nodeType === 1 && (ele[i].className += ' ' + classname + ' ');
    //         }
    //     } else if (ele instanceof Node) {
    //         ele.nodeType === 1 && (ele.className += ' ' + classname + ' ');
    //     }
    // };
    // removeclass (ele,classname){
    //     let arrclass = ele.className.split(' ');
    //     let index = arrclass.indexOf(classname)
    // if (index !== -1) {
    //     arrclass.splice(index, 1);
    // }
    // //[box1,box3]
    // ele.className = arrclass.join(' ');
    // }

    chioce(n) {
        var arr = [];
        for (var i = 48; i <= 57; i++) {
            arr.push(String.fromCharCode(i));
        }
        for (var i = 65; i <= 90; i++) {
            arr.push(String.fromCharCode(i));
        }
        var str = '';
        for (var i = 0; i < n; i++) {
            var num = parseInt(Math.random() * arr.length);
            if (num > 9) {//字母
                var flag = true;
                flag = Math.random() > 0.5 ? true : false;
                if (flag) {
                    str += arr[num].toLowerCase();
                } else {
                    str += arr[num]
                }
            } else {//数字
                str += arr[num];
            }
        }
        return str;
    }
}
export { form }