let me = document.querySelector("#me");


let btn = document.querySelector("#btn");
btn.addEventListener("click", move1);

function move1() {
    me.classList = "";
    me.classList.toggle("move1");
}

let stopbtn = document.querySelector("#stopbtn");
stopbtn.addEventListener("click", stop);

function stop() {
    me.classList = "";
}
