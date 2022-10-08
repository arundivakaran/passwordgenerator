let rangeValue = document.querySelector("#volume")
let label = document.querySelector(".lbl")
label.innerText = "Password Length"
let generatebtn = document.querySelector(".btn")

let result = document.querySelector(".result-container")
console.log(result)

let options = document.querySelectorAll(".option")
console.log(options)

let characters = {
    uppercase:"QWERTYUIOPASDFGHJKLZXCVBNM",
    lowercase:"qwertyuiopasdfghjklzxcvbnm",
    numbers:"0123456789",
    symbols:"!@#$%^&*()-_=+}{[];<>"
}


//function for passing range value to the password lenth label
function updateRange (){
    console.log(rangeValue.value);
    label.innerHTML = `<span>Password Length (${rangeValue.value}) </span>`;
}

rangeValue.addEventListener("click",updateRange)

updateRange()

generatebtn.onclick = ()=>{
let staticPassword = "";
randomPassword = "";
excludeDuplicate = false;
passwordlength = rangeValue.value
options.forEach(option=> { //looping through each options checkbox
    if(option.checked){
        if(option.id!=="duplicate" && option.id!=="spaces")
    
        staticPassword+= characters[option.id];
            }
    })
    

    for (let index = 0; index <= passwordlength ; index++) {
        randomPassword+= staticPassword[Math.floor(Math.random()*staticPassword.length)]
        
    }
    console.log(randomPassword)
    result.value = randomPassword;
}
