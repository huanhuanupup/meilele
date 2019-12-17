import { $ } from "./module_$.js";
class form {
    constructor(){
        this.oForm = $(document,'#JS_register_form',false);
        this.aInput=$(document,'.register_input','true');
        this.oDiv=$(document,'.error','true');
        this.aSuccess=$(document,'.success','true')
        this.aA=$(document,'.change-one',false);
        this.sChecked=$(document,'#sms_checked_look',false);
        this.passyz = '';
        this.yanzhenma = '';
        this.usernameflag = true;
        this.passwordfalg = true;
        this.passsecond = true;
        this.phoflag = true;
        this.yanzhenflag = true;
    }
    init(){
        alert(2);
        username(this.oDiv[0]);
        const _this=this;
    }
    username(selector){
        selector.onfocus = function () {
            alert(1);
            if (this.value === '') {
                _this.oDiv[0].innerHTML = '用户名可使用字母、汉字、数字、下划线或其组合，4～20个字符，且不能为纯数字';
                _this.oDiv[0].style.color = gray;
            }
        }
        selector.onblur = function () {
            var reguser1 = /^[a-zA-Z]{1,14}$/g;
            var reguser2 = /^[\u4e00-\u9fa5]+$/g;
            var reguser3 = /^[a-zA-Z\u4e00-\u9fa5]+$/g;
            if (this.value !== '') { //表单内容不为空，进行正则判断
                var len = this.value.replace(/[\u4e00-\u9fa5]/g, '**').length;
                if (len <= 14) { //判断长度
                    if (reguser1.test(this.value) || reguser2.test(this.value) || reguser3.test(this
                            .value)) { //正则判断
                        _this.oDiv[0].innerHTML = '√';
                        _this.oDiv[0].style.color = 'green';
                        userflag=true;
                    } else {
                        _this.oDiv[0].innerHTML = '用户名格式错误';
                        _this.oDiv[0].style.color = 'red';
                        userflag=false;
                    }
                } else {
                    _this.oDiv[0].innerHTML = '用户名长度错误';
                    _this.oDiv[0].style.color = 'red';
                    userflag=false;
                }

            } else { //表单内容为空，报错
                _this.oDiv[0].innerHTML = '用户名不能为空';
                _this.oDiv[0].style.color = 'red';
                userflag=false;
            }

        }
    }
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
                return str += arr[num].toLowerCase();
                } else {
                return str += arr[num]
                }
            } else {//数字
                return str += arr[num];
            }
        }
        return str;
    }
}
export { form }