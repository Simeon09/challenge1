// function myfunction(){
//     var element= document.getElementById('click');
//     element.classList.toggle('change')
//     var elements= document.getElementById('clicks');
//     elements.classList.toggle('change')
//     }
// function clearevent(){
//     Canvas.off('mouse:down')
// }
/*
var buttons = document.querySelectorAll("button");
for(b in buttons) {
	buttons[b].onclick = function(){
        var blueButton = document.querySelectorAll(".blue")[0];
    	if(this.className == "grey") {
            if( blueButton ) blueButton.className = "grey";
            this.className = "blue";
        }
    }
}
*/

function btn1_f() {
  btn1.classList.add("change");
  btn2.classList.remove("change");
  btn3.classList.remove("change");
  btn4.classList.remove("change");
  btn5.classList.remove("change");
  localStorage.setItem("rank", "1")
}

function btn2_f() {
  btn1.classList.remove("change");
  btn2.classList.add("change");
  btn3.classList.remove("change");
  btn4.classList.remove("change");
  btn5.classList.remove("change");
  localStorage.setItem("rank", "2")

}

function btn3_f() {
  btn1.classList.remove("change");
  btn2.classList.remove("change");
  btn3.classList.add("change");
  btn4.classList.remove("change");
  btn5.classList.remove("change");
  localStorage.setItem("rank", "3")
}

function btn4_f() {
  btn1.classList.remove("change");
  btn2.classList.remove("change");
  btn3.classList.remove("change");
  btn4.classList.add("change");
  btn5.classList.remove("change");
  localStorage.setItem("rank", "4")
}

function btn5_f() {
  btn1.classList.remove("change");
  btn2.classList.remove("change");
  btn3.classList.remove("change");
  btn4.classList.remove("change");
  btn5.classList.add("change");

  localStorage.setItem("rank", "5")
}

let data = localStorage.getItem("rank");
response.innerHTML = data