
let modebtn = document.querySelector("#moden");
let body = document.querySelector("body");
let curMode= "light";
modebtn.addEventListener("click", () => {
   if(curMode === "light") {
       curMode = "dark";
       body.classList.add("dark");
       body.classList.remove("light");
   }else {
    curMode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
   
   }
console.log(curMode);
   //console.log("you are trying to change mode");

});


// 2nd method

let modebtnn = document.querySelector("#mode");
 
             let curMod= "light";
             modebtnn.addEventListener("click", () => {
                if(curMod === "light") {
                    curMod = "dark";
                    document.querySelector("body").style.backgroundColor = "black";
                }else {
                 curMod = "light";
                 document.querySelector("body").style.backgroundColor = "white";
                
                }
            console.log(curMod);
                //console.log("you are trying to change mode");

             }); 