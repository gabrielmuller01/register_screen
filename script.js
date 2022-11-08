let passwordBar = document.querySelector(".password-strength div")
let count = 0;

function passwordValidate(pass){
    
    if (pass.length < 4){

        passwordBar.setAttribute("style", "width: 0%")

    }else if((pass.length >= 4) && (pass.length <= 7)){

        count += 5 

    }else if(pass.length > 7){

        count += 10

    }

    
}

passwordValidate();


// 8 letras 
// 1 simbolo
// 1 número 

// passwordBar.setAttribute("style", "width: 20%")
// passwordBar.style.backgroundColor = "red"
// passwordBar.setAttribute("style", "width: 40%")
// passwordBar.style.backgroundColor = "yellow"