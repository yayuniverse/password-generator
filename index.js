const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

const charNum = characters.concat(numbers)
const charSym = characters.concat(symbols)
const all = charNum.concat(symbols)

const pwd1 = document.querySelector("#pwd1")
const pwd2 = document.querySelector("#pwd2")

const box1 = document.querySelector("#demo_opt_1");
box1.checked = true

const box2 = document.querySelector("#demo_opt_2")
box2.checked = true

function loopAll() {
    pwd1.textContent = ""
    pwd2.textContent = ""

    for (let i = 0; i < 15; i++) {
        pwd1.textContent += all[Math.floor (Math.random() * all.length)]
        pwd2.textContent += all[Math.floor (Math.random() * all.length)]
    }
}

function loopCharNum() {
    pwd1.textContent = ""
    pwd2.textContent = ""

    for (let i = 0; i < 15; i++) {
        pwd1.textContent += charNum[Math.floor (Math.random() * charNum.length)]
        pwd2.textContent += charNum[Math.floor (Math.random() * charNum.length)]
    }
}

function loopCharSym() {
    pwd1.textContent = ""
    pwd2.textContent = ""

    for (let i = 0; i < 15; i++) {
        pwd1.textContent += charSym[Math.floor (Math.random() * charSym.length)]
        pwd2.textContent += charSym[Math.floor (Math.random() * charSym.length)]
    }
}

function loopCharacters() {
    pwd1.textContent = ""
    pwd2.textContent = ""

    for (let i = 0; i < 15; i++) {
        pwd1.textContent += characters[Math.floor (Math.random() * characters.length)]
        pwd2.textContent += characters[Math.floor (Math.random() * characters.length)]
    }
}

function generate() {
    if (box1.checked && box2.checked) {
        loopAll()
    } else if (box1.checked && box2.checked === false) {
        loopCharSym()
    } else if (box1.checked === false && box2.checked) {
        loopCharNum()
    } else if (box1.checked === false && box2.checked === false) {
        loopCharacters()
    }
}
