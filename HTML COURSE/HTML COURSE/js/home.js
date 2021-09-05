registeredUser()
function registeredUser()
{
    console.log('AT HOME JS');

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
        // if(xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 201))
            if(xhr.readyState == 4)
            {
                var response = JSON.parse(xhr.responseText);
                console.log('RES is-->' + response);
                if(response) {
                    document.getElementById('userName').innerText = response.name;
                    document.getElementById('userEmail').innerText = response.email;
                    document.getElementById('userAge').innerText = response.age;
                    document.getElementById('userPAN').innerText = response.pan;
                    document.getElementById('userPhoneNo').innerText = response.mobileno;
                }           
            }
        }
    
        var accessToken = localStorage.getItem('accessToken');
        var userId = localStorage.getItem('userId');

        console.log('TOKEN IS-->' + accessToken);
        console.log('userId IS-->' + userId);
        xhr.open('GET','https://rkroboto.herokuapp.com/api/users/' + userId, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader('x-access-token', accessToken);
        xhr.send();

}







/*userDetails();

function userDetails() {
    var arrDetails=JSON.parse(localStorage.getItem('registeredUsers'));
    var innerCode='';
    console.log(arrDetails);
    for(var i=0;i<arrDetails.length;i++){
       var crntPer = arrDetails[i];
       innerCode = innerCode +' <tr><td>' + crntPer.name + '</td><td>' + crntPer.MailID + '</td><td>'+ crntPer.Gender +'</td><td>'+ crntPer.Age +'</td></tr>';
    }
    document.getElementById('info').innerHTML=innerCode;
}*/