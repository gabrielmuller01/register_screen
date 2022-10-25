const passBar = document.querySelector(".password-strength div")
const passLen = document.querySelector("#pass").value
const count = 0

function passwordValidate(){

    if ((passLen.lenght >= 4) && (passLen.lenght <= 7)){
        count += 5        
    } else if (passLen.lenght > 7){
        count += 5
    }
    
}

function 

// passBar.setAttribute("style", "width: 60%")