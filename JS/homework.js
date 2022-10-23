const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
  const body = document.querySelector("body");
const button = document.querySelector("#btn");







function Random(){
    const color1 =parseInt(Math.floor(Math.random()*colors.length ));
    const color2 =parseInt(Math.floor(Math.random()*colors.length ));
    if(color1 != color2){
        body.style.background = `linear-gradient(0.25turn,${colors[color1]}, ${colors[color2]})`;
    }
}


button.addEventListener("click", Random);





   const Username = LoginText.value;
   if( Username ===""){
    alert("이름을 적어주세요!");
      }
      else if( Username.length < 5)
      {alert("5글자 이상으로 작성해주세요!");
   }else if( Username.length > 15){
   alert("15글자 이하로 작성해주세요!");
   }
   