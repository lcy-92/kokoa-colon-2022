const MaxNumber = document.getElementById("RangeNumber");
const ChoseNumber = document.querySelector(".SelectNumber");
const ClickButton = document.querySelector(".button");
const MainRule = document.querySelector("#main");
const loginForm = document.querySelector("#login-form");
const FirstMention = document.querySelector(".first");
const ScondMention = document.querySelector(".second");




function  onLoginSubmit1(event){
    event.preventDefault();
}


function onLoginSubmit(event){
    event.preventDefault();
   MainRule.classList.remove("hidden"); 
 const Chose = ChoseNumber.value;
 localStorage.setItem("chosenumber",ChoseNumber);
 FirstMention.innerText = `You chose: ${Chose} , the machine chose:  ` ;

}





loginForm.addEventListener("submit" , onLoginSubmit);
