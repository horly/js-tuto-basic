

document.getElementById('register').addEventListener('click', register);

function register(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var password_length = password.length;
    var password_confirm = document.getElementById('password-confirm').value;

    
    if(name != ""){
        document.getElementById('error-name').innerText = "";
        
        if(email != ""){
            document.getElementById('error-email').innerText = "";

            if(password_length >= 8){
                document.getElementById('error-password').innerText = "";

                if(password == password_confirm){
                    document.getElementById('error-password-confirm').innerText = "";
                    
                }else{
                    document.getElementById('error-password-confirm').innerText = "Yours passwords doesn't equal";
                }
            }else{
                document.getElementById('error-password').innerText = "Password must have 8 characters";
            }
        }else{
            document.getElementById('error-email').innerText = "Email is required";    
        }
    }else{
        document.getElementById('error-name').innerText = "Name is required";
    }
}