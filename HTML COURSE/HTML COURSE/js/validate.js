function mailValidation(eMail){
    var verifyMail=/^\w{2,}\.\w{2,}@[a-z]{2,}\.[a-z]{2,3}$/;
    var isvalidMail=verifyMail.test(eMail);
    if(eMail===''){
        alert('please enter your email');
        return false;
    }else if(!isvalidMail){
        alert('please enter your valid email');
        return false;
    }
    return true;
}
function pwdValidation(veriPwd){    
    var verifyPwd=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    var isValidPwd=verifyPwd.test(veriPwd);
    if(veriPwd===''){
        alert('please enter your password');
        return false;
    }else if(!isValidPwd){
        alert('enter valid password');
        return false;
    }
    return true;
}