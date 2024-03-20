
function confirmpass(){
    let password=document.getElementById('password')
let confirm=document.getElementById('confirm_pass')
    if( password!=confirm){
        password.setCustomValidity('Passwords do not match');
    }else {
        password.setCustomValidity('')
    }
}

