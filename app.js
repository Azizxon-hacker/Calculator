console.log("hello world");

const display = document.querySelector(".display")

function son(item){
    display.value += item
}

function Result(){
    display.value = eval(display.value)
}

function Clear(){
    display.value = ""
}