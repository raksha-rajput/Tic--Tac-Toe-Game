
// // btn1.onclick = ()=>{
// //     console.log("HANDLER");
// //     let a = 25;
// //     a++;
// //     console.log(a)
// // }

// btn1.addEventListener("click" , ()=>{
//     console.log("button1 was clicked")
// })
// btn1.addEventListener("click" , (evt)=>{
//     console.log("button1 was clicked event two")
//     console.log(evt.type)
// })






// let dive = document.querySelector("div");
// dive.onmouseover = ()=>{
//     console.log("when you hover on dive")
// }

let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset_btn");
let winmsginfo = document.querySelector(".msg_container");

let msg  = document.querySelector("#msg");
let newbtn = document.querySelector("#new_btn");

let turnO = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
let winner = ""
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O"
            turnO = false

        }
        else{
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
        if (winner!="") {
            msg.innerHTML = `Congratulation ${winner} you are the winner` ;
            disableBoxes();
            winmsginfo.classList.remove("hide")

            
        }
    });
});
const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const checkWinner = ()=>{
    for (const patern of winPatterns) {
        let pos1v = boxes[patern[0]].innerText;
        let pos2v = boxes[patern[1]].innerText;
        let pos3v = boxes[patern[2]].innerText ;

        if (pos1v !="" && pos2v!=""&& pos3v!="") {
            if (pos1v==pos2v&& pos2v==pos3v) {
                console.log("winner" , pos1v)
                winner = pos1v
            }
        }
        
    }
};

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
}

let Resetgame = ()=>{
    winmsginfo.classList.add("hide");
turnO = true
winner = ""
enableBoxes();

}

newbtn.addEventListener("click" ,Resetgame );
resetbtn.addEventListener("click" , Resetgame);