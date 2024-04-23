let btns = document.querySelectorAll("button");
let reset = document.querySelector(".a");
let newGame = document.querySelector(".newgame");
let windiv = document.querySelector(".top");
let msg = document.querySelector("#win");
let turn0 = true;
let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

  const resetGame = ()=>{
    turn0 = true;
    enablebtns();
     windiv.classList.add("hide");
  }


btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        //  alert("working");
        if(turn0){
            btn.innerText="O";
            turn0 = false;
        }
        else{
            btn.innerText = "X";
            turn0 = true;
        }
        btn.disabled = true;
        checkWinner();
    });
});
 const disablebtns=()=>{
     for(let b of btns){
        b.disabled = true;
     }
 }
 const enablebtns=()=>{
    for(let b of btns){
       b.disabled = false;
       btns.innerText ="";
    }
}

const showWinner = (winner)=>{
    msg.innerText = `congrat, Winner is ${winner}`;
    windiv.classList.remove("hide");
}
  
const checkWinner=()=>{
    for( let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[3]);
        // console.log(
        //     btns[pattern[0]].innerText,
        //     btns[pattern[1]].innerText,
        //     btns[pattern[2]].innerText 
        // );
        let pos1val = btns[pattern[0]].innerText;
        let pos2val = btns[pattern[1]].innerText;
        let pos3val = btns[pattern[2]].innerText;
            
            if(pos1val != "" && pos2val != "" && pos3val != ""){
                if(pos1val === pos2val && pos2val=== pos3val){
                    console.log("winner",pos1val);
                    disablebtns();
                    showWinner(pos1val);
                }
            } 
    }
}


newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
// reset.addEventListener('click',()=>{
//     reset.style.color ="blue";
// })
