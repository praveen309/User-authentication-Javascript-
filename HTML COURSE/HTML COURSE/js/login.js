function userLogin() {
    var userId = document.getElementById('userid').value;
    var passWrd = document.getElementById('pwd').value;

    console.log('usreid>>>>'+userId);
    console.log('pwd>>>>'+passWrd);

    var userCheck=mailValidation(userId);
    if(!userCheck){
        return;
    }
    var pwdCheck= pwdValidation(passWrd);
    if(!pwdCheck){
        return;
    }
    var hashPwd1 = CryptoJS.SHA256(passWrd);
    
    var logObj={
        email:userId,
        pwd:hashPwd1.toString()
    }

    var restapi = new XMLHttpRequest()
    restapi.onreadystatechange=function(){
        if(restapi.readyState==4){
            var response=JSON.parse(restapi.responseText);
            if(response.accessToken){
                localStorage.setItem('accessToken', response.accessToken);
                localStorage.setItem('userId', response._id);
                alert('user login successfully');
                location.href="home.html";
            }else{
                alert('please check your details');
            }
        }
      
    }
    
    restapi.open('POST','https://rkroboto.herokuapp.com/api/auth/signin',true);
    restapi.setRequestHeader("Content-Type","application/json");
    restapi.send(JSON.stringify(logObj));
    return;

    
    
    
    
    
    /*var exsistingObj = JSON.parse(localStorage.getItem('registeredUsers'));
    console.log(exsistingObj)

    for(i=0;i<exsistingObj.length;i++){
        var currentUser=exsistingObj[i];
        if(currentUser.MailID==userId && currentUser.Password==hashPwd1){
            alert('Authentication Successfully')
            location.href="registered.html";
            return;
        }
    }
        alert('Authentication Failed');
        return;*/
    
}