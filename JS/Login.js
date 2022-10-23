const LoginForm = document.querySelector("#LoginForm");
const LoginText = document.querySelector("#LoginForm input");
const Greeting = document.querySelector("#Greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KET = "UserName";


function LoginSubmit(event){
event.preventDefault();
LoginForm.classList.add(HIDDEN_CLASSNAME);
const UserName = LoginText.value;
localStorage.setItem(USERNAME_KET,UserName);
PaintGreetings(UserName);
}

function PaintGreetings(UserName){
    Greeting.innerText = `HELLO ${UserName}`;
    Greeting.classList.remove(HIDDEN_CLASSNAME);
    
}

const SaveUserName = localStorage.getItem(USERNAME_KET);
if(SaveUserName === null)
{LoginForm.classList.remove(HIDDEN_CLASSNAME);
    LoginForm.addEventListener("submit", LoginSubmit);

}
else{
    PaintGreetings(SaveUserName);
}

