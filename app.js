let opt = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
let userScore = 0;
let compScore = 0;
const gameDraw=()=>{
    msg.innerText = "Game Draw :)";

}
const genComp=()=>{
    let c = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return c[randIdx];
}
const gameWinner=(userWin,userC,compC)=>{
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userC} beats ${compC}`;
        msg.style.backgroundColor = "green";
      } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compC} beats your ${userC}`;
        msg.style.backgroundColor = "orange";
      }
}
const playGame=(userC)=>{
    let compC = genComp();
    
    if(userC===compC){
      gameDraw();
    }
    else{
        let userWin = true;
        if (userC === "rock") {
          
          userWin = compC === "paper" ? false : true;
        } else if (userC === "paper") {
         
          userWin = compC === "scissors" ? false : true;
        } else {
          
          userWin = compC === "rock" ? false : true;
        }
        gameWinner(userWin,userC,compC);
    }

        
}
opt.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userC = choice.getAttribute("id");
        console.log(userC)
        playGame(userC);
    })
})
