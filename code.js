
function confirmpass(){
    let password=document.getElementById('password')
let confirm=document.getElementById('confirm_pass')
    if( password.value==confirm.value){
        password.setCustomValidity('');
    }else {
        password.setCustomValidity('Passwords do not match')
    }
}

