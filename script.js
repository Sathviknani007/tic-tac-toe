let count = 0;
let turn = 0;
let r = false;

let a = document.querySelectorAll(".box");
let popup = document.getElementById("popup");
let result = document.getElementById("result");
let closeBtn = document.getElementById("close");

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";  // hide when X clicked
});

a.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(r) return;
        if(box.innerText!="")return;
        
    
        if(turn === 0){
            box.style.fontSize="100px";
            box.innerText = "X";
            turn = 1;
        } else {
            box.style.fontSize="100px";
            box.innerText = "O";
            turn = 0;
        }
        if((b11.innerText ==="X" &&  b12.innerText === "X" && b13.innerText === "X")||
        (b21.innerText ==="X" &&  b22.innerText === "X" && b23.innerText === "X")||
        (b31.innerText ==="X" &&  b32.innerText === "X" && b33.innerText === "X")||
        (b11.innerText ==="X" &&  b21.innerText === "X" && b31.innerText === "X")||
        (b12.innerText ==="X" &&  b22.innerText === "X" && b32.innerText === "X")||
        (b13.innerText ==="X" &&  b23.innerText === "X" && b33.innerText === "X")||
        (b11.innerText ==="X" &&  b22.innerText === "X" && b33.innerText === "X")||
        (b13.innerText ==="X" &&  b22.innerText === "X" && b31.innerText === "X")
        ){
            result.innerText = "Player One Wins!!";
            popup.style.display = "flex";
            r = true;
            return;
            
        }
        else if((b11.innerText ==="O" &&  b12.innerText === "O" && b13.innerText === "O")||
        (b21.innerText ==="O" &&  b22.innerText === "O" && b23.innerText === "O")||
        (b31.innerText ==="O" &&  b32.innerText === "O" && b33.innerText === "O")||
        (b11.innerText ==="O" &&  b21.innerText === "O" && b31.innerText === "O")||
        (b12.innerText ==="O" &&  b22.innerText === "O" && b32.innerText === "O")||
        (b13.innerText ==="O" &&  b23.innerText === "O" && b33.innerText === "O")||
        (b11.innerText ==="O" &&  b22.innerText === "O" && b33.innerText === "O")||
        (b13.innerText ==="O" &&  b22.innerText === "O" && b31.innerText === "O")
        ){
            result.innerText = "Player Two Wins!!";
            popup.style.display = "flex";
            r = true;
            return;
        }
        count += 1;
        if(count===9 && r===false){
            document.querySelector("#result").innerText = "Tie!!";
            popup.style.display = "flex";
            r = true;
            return;
        }
        
    });
});
restart.addEventListener("click", () => {
    a.forEach((box) => (box.innerText = ""));
    popup.style.display = "none";
    count = 0;
    turn = 0;
    r = false;
});








