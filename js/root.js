// var IP = 'http://192.168.0.6:8763/'
// var imgIp = 'http://192.168.0.6:8763'; //图片ip地址

// var IP = 'http://192.168.0.6:8080/pregnant/'
// var imgIp = 'http://192.168.0.6:8080/pregnant'; //图片ip地址

// var IP = 'http://192.168.0.172:8763/'
// var imgIp = 'http://192.168.0.172:8763/'; //图片ip地址

// var IP = 'http://www.wcqxzs.com:8763/';
// var imgIp = 'http://www.wcqxzs.com:8763'; //图片ip地址

var IP =  'http://www.wcqxzs.com/pregnant/';
var imgIp =  'http://www.wcqxzs.com/pregnant';




var RegExpObj = {
    Reg_IDCardNo: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$)/, // 身份证
    Reg_TelNo: /^1[3|4|5|7|8]\d{9}$/, // 手机号
    Reg_PassWord: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/, // 登录密码
    Reg_Number: /^\d{6}$/, // 验证数字
    Reg_figure: /^\d+(\.\d+)?$/, //验证带小数点的数字
    Reg_Name: /^[\u4e00-\u9fa5]{2,6}$/, //验证名字
    Reg_Text: /[0-9a-zA-Z\u4e00-\u9fa5`~!@#$^&*\\()=|{}':;',\\\\.<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%+_]/,
    Reg_email: /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/, //邮箱
};
// $(function () {
    // if(!$.cookie('token')){
    //     if (window.location.pathname != '/union/login/login.html'){
    //         window.location = '/union/login/login.html';
    //     }
    // }

// })


var httpUrl = {
    login: IP + "v1/web/pad/login", // 登录接口
    
   
};

// 输入身份证号自动计算年龄 性别 idCard
function discriCard(UUserCard) {
    // var unit = '岁'; // 单位
    var num = 0; // 值
    if (UUserCard.length == 18) {
        //获取出生日期
        var userYear = UUserCard.substring(6, 10);
        var userMonth = UUserCard.substring(10, 12);
        var userDay = UUserCard.substring(12, 14);
        $('.pregnantDateBirth').val(userYear +'-'+ userMonth+'-' + userDay);
        //获取性别
        if (parseInt(UUserCard.substr(16, 1)) % 2 == 1) {
            $('.birth_sex').html('男');
        } else {
            $('.birth_sex').html('女');
        }
    } else {
        var userYear = 19 + UUserCard.substring(6, 8);
        var userMonth = UUserCard.substring(8, 10);
        var userDay = UUserCard.substring(10, 12);
        //获取性别
        if (parseInt(UUserCard.substring(14, 15)) % 2 == 1) {
            $('.birth_sex').html('男');
        } else {
            $('.birth_sex').html('女');
        }
    }
    var myDate = new Date();
    var year = myDate.getFullYear(); // 当前年份
    var month = myDate.getMonth() + 1; // 当前月份
    var day = myDate.getDate(); // 当前号数
    if (year - userYear > 0) {
        num = year - userYear;
        unit = '岁';
    } else if (month - userMonth > 0) {
        num = month - userMonth;
        unit = '月';
    } else if (day - userDay >= 0) {
        num = day - userDay;
        unit = '天';
    } else {
        layer.msg('输入内容格式有误，请修改');
    }
    $('.birth_age').html(num);
}
function mateCard(UUserCard) {
    // var unit = '岁'; // 单位
    var num = 0; // 值
    if (UUserCard.length == 18) {
        //获取出生日期
        var userYear = UUserCard.substring(6, 10);
        var userMonth = UUserCard.substring(10, 12);
        var userDay = UUserCard.substring(12, 14);
    } 
    var myDate = new Date();
    var year = myDate.getFullYear(); // 当前年份
    var month = myDate.getMonth() + 1; // 当前月份
    var day = myDate.getDate(); // 当前号数
    if (year - userYear > 0) {
        num = year - userYear;
        unit = '岁';
    }
    $('.spouseAge').val(num);
}

// var token = window.localStorage.getItem('maternaltoken');

function HttpRequstForPost(httpUrl, dataType, dataFrom, sucFn, errFn) {
    var msg = layer.msg('处理中，请稍候', {
        icon: 16,
        shade: 0.4,
        time: false //取消自动关闭
    });
    $.ajax({
        type: 'POST',
        url: httpUrl,
        xhrFields: {
            withCredentials: false
        },
        dataType: dataType,
        data: dataFrom,
        success: function (data) {
            if (httpUrl == (IP + 'v1/web/pad/login') && data.status == 20200) {
                token = data.token;
                window.localStorage.setItem('maternaltoken', token);
            }
            if (data.status == 20250) {
                window.location = '/maternal-ipad/login/login.html';
                return;
            }
            layer.close(msg);
            sucFn(data);
        },
        error: function (err) {
            layer.close(msg);
            layer.msg('操作失败，请稍后重试');
            errFn(err);
        },
    });
}

function HttpRequstFromDataForPost(httpUrl, dataType, dataFrom, sucFn, errFn) {
    var msg = layer.msg('处理中，请稍候', {
        icon: 16,
        shade: 0.4,
        time: false //取消自动关闭
    });
    $.ajax({
        type: 'POST',
        url: httpUrl,
        xhrFields: {
            withCredentials: false
        },
        dataType: dataType,
        data: dataFrom,
        contentType: false,
        processData: false,
        success: function (data) {
            layer.close(msg);
            if (httpUrl == (IP + 'v1/web/pad/login') && data.status == 20200) {
                token = data.token;
                window.localStorage.setItem('maternaltoken', token);
            }
            sucFn(data);
        },
        error: function (err) {
            layer.close(msg);
            layer.msg('操作失败，请稍后重试');
            errFn(err);
        },
    });
}
function HttpRequstForGet(httpUrl, dataType, sucFn, errFn) {
    var msg = layer.msg('处理中，请稍候', {
        icon: 16,
        shade: 0.4,
        time: false //取消自动关闭
    });
    $.ajax({
        type: 'GET',
        url: httpUrl,
        xhrFields: {
            withCredentials: false
        },
        dataType: dataType,
        success: function (data) {
            layer.close(msg);
            if (data.status == 20250) {
                window.location = '/maternal-ipad/login/login.html';
                return;
            }
            sucFn(data);
        },
        error: function (err) {
            layer.close(msg);
            layer.msg('操作失败，请稍后重试');
            errFn(err);
        },
    });
}

