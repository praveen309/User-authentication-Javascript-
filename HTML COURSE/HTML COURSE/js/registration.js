function display()
{
    var uName = document.getElementById('fname').value;
    var uMail = document.getElementById('Emid').value;
    var uAge = document.getElementById('a').value;
    var uPassword = document.getElementById('paswrd').value;
    var uconPassword = document.getElementById('conpaswrd').value;
    var ArrayGender = document.getElementsByName('g');
    var ArrayHobbies = document.getElementsByName('hobby');
    var panNo = document.getElementById('pan').value;
    var genderOdjArr;
    var hobyarr;
    var selectedHobby=[];
   
    console.log("name is -->"+ uName);
    console.log("name is -->"+ uMail);
    console.log("name is -->"+ uAge);
    console.log("name is -->"+ uPassword);
    console.log("name is -->"+ uconPassword);
    for(i=0;i<ArrayGender.length;i++){
        var select;
        genderOdjArr=ArrayGender[i];
        if(genderOdjArr.checked){
            console.log("gender is ---> "+genderOdjArr.value);
            select=genderOdjArr.value;
            break;
        }
    }
    for(i=0;i<ArrayHobbies.length;i++){
        hobyarr=ArrayHobbies[i];
        if(hobyarr.checked){
            console.log("hobbies >>"+ hobyarr.value); 
            selectedHobby.push(hobyarr.value);
        }
    }
    console.log("selected hobbies are >>"+ selectedHobby);
    if(select == undefined){
        alert('please enter your gender');
        return;
    }
    if(selectedHobby.length===0){
        alert('please enter your hobby');
        return;
    }
 
    if(uName===''){
        alert('please enter your name');
        return;
    }else if(uName.length<2){
        alert('please enter valid name');
    }
   
    var mail= mailValidation(uMail);
    if(!mail){
        return;
    }
   
    var verify=/^[0-9]{2}$/;
    var isvalid=verify.test(uAge);
        
    if(uAge===''){
        alert('please enter your age');
        return;
    }else if(!isvalid){
        alert('please enter your age valid');
        return;
        }

    var verifyPan=/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
    var isvalidPan=verifyPan.test(panNo);
    
    if(panNo===''){
        alert('enter pan number');
        return;
    }else if(!isvalidPan){
        alert('enter valid pan number');
        return;
    }
    var code=pwdValidation(uPassword);
    if(!code){
        return;
    }
    
    if(uconPassword===''){
        alert('please enter your Confirm password');
        return;
    }else if(uPassword==uconPassword){
        alert("password matching");
    }else{
        alert("check password");
        return;
    }
    var hashPwd = CryptoJS.SHA256(uPassword);
    var registerObj ={
        uName:uName,
        uMail:uMail,
        uAge:parseInt(uAge),
        password:hashPwd.toString(),
        uGender:select,
        uHobbies:selectedHobby.toString(),
        uMobile:'9566234471',
        uPAN:panNo
    };

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200)
        {
            var response=JSON.parse(xhr.readyState);
            alert('user registered successfully');
            location.href="login.html";
        }
    }
    xhr.open('POST','https://rkroboto.herokuapp.com/api/auth/signup',true);
    xhr.setRequestHeader("Content-Type","application/json");
    xhr.send(JSON.stringify(registerObj));
    return;
    

    /*var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 201))
        {
            var response = JSON.parse(xhr.responseText);
            if(response.message == 'User is Registered Successfully!') {
                alert('User is created successfully. You can login now.')
                location.href = 'login.html';
            }
           
        }
    }
   
    xhr.open('POST','https://rkroboto.herokuapp.com/api/auth/signup', true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(reqData));*/

   
     
    /*var userArr=[];
    var exsistUsers=JSON.parse(localStorage.getItem('registeredUsers'));
    if(exsistUsers){
        userArr=exsistUsers;
    }
    userArr.push(registerObj); 
   
    localStorage.setItem('registeredUsers',JSON.stringify(userArr));
    alert('Registration Successfully');
    location.href="login.html";*/
}


