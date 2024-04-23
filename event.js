let btn=document.querySelector("#btn")
// btn.onclick=()=>{
//     console.log("clicked me ");
// }

// let box=document.querySelector(".box")
// box.onmouseover=()=>{
//     console.log("you are on me")
// }

btn.onclick=()=>{
    var num = "0123456789ABCDEF";
    var letter = "#";
    for (var i = 0; i < 6; i++) {
        const lett = Math.floor(Math.random() * 16);
        letter = letter + num[lett];
    }
    
    document.querySelector("body").style.backgroundColor=letter
    console.log(letter)
}
