document.getElementById('login').addEventListener('submit',function(event){
  event.preventDefault();

  const username=document.getElementById('username').value 
  const passwd=document.getElementById('password').value

  fetch(`http://localhost:3000/users?username=${username}&password=${passwd}`)
  .then(response => response.json())
  .then(users =>{
    const msgele=document.getElementById('message');
    if(users.length>0){
        msgele.textContent='Login Succesful';
    }
    else{
        msgele.textContent='error credentials.please try again';
    }
  })

});
