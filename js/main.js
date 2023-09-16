

// show login password function 
function showPassword() {

    let passwprd = document.getElementById('loginPassword')
    if (passwprd.type === 'password') {
        passwprd.type = 'text';
    } else {
       passwprd.type = 'password';
    }
        
};

//  filter 

const filters = document.querySelectorAll('.post-filter span');
const posts = document.querySelectorAll('.post .post-box');
let filter = '';
filters.forEach(span => {
    span.onclick = function(){
        filters.forEach(span => {
            span.classList.remove('active-filter');
        })
        this.classList.add('active-filter');
        filter = this.getAttribute('data-filter');
    
    // Filter
    console.log(filter)
    posts.forEach(div => {
        div.style.display = 'none';
        posts.forEach(div => {
           if (div.classList.contains(filter))
            div.style.display = 'block';
        })
        

    })
}
});

