document.getElementById('password').addEventListener('input',function(){

    let password=this.value;
    let strengthbar=document.getElementById('strengthbar');
    let strengthtext=document.getElementById('strengthtext');
    let strength = 0;

    if(password.length > 7) strength++;
    if(password.match(/[A-Z]/)) strength++;
    if(password.match(/[a-z]/)) strength++;
    if(password.match(/[0-9]/)) strength++;  
    if(password.match(/[^A-Za-z0-9]/)) strength++;

    let colors=['red','orange','blue','green'];
    let strengths=['Weak','Moderate','Strong','Very Strong'];

    strengthbar.style.width=`${strength * 25}%`;
    strengthbar.style.backgroundColor=colors[strength-1] || 'green';
    strengthtext.innerText='Strength:'+(strengths[strength-1] || 'Very Strong');
});

