

// show login password function 
function showPassword() {

    let passwprd = document.getElementById('loginPassword')
    if (passwprd.type === 'password') {
        passwprd.type = 'text';
    } else {
       passwprd.type = 'password';
    }
        
};

