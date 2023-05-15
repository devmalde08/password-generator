const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pwd1 = document.getElementById("pwd-1")
let pwd2 = document.getElementById("pwd-2")
let pwdLength = 16

function getInedxPos() {
    let randChar= Math.floor(Math.random()*characters.length)
    return characters[randChar]
}


function generatePwd() {
    let randomPassword1 = ""
    for(let i = 0; i < pwdLength; i++) {
        randomPassword1 += getInedxPos()
    }
    let randomPassword2 = ""
    for(let i = 0; i < pwdLength; i++) {
        randomPassword2 += getInedxPos()
    }   
    
    pwd1.textContent = randomPassword1
    pwd2.textContent = randomPassword2
}

