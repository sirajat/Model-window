const model = document.querySelector(".model");
const btnCloseModel = document.querySelector(".modelCloseBtn");
const openModel = document.querySelectorAll(".btncls");

const openButton = function (){
  model.classList.remove("hidden");
}

const closeButton = function (){
  model.classList.add("hidden");
}

for (i = 0; i < openModel.length; i++) {
  openModel[i].addEventListener("click", openButton);
}
btnCloseModel.addEventListener("click", closeButton );

document.addEventListener('keypress' , function(event){
  if (event.key === "Escape"){
    if(!model.classList.contains ('hidden')){
      closeButton
    }
  }
  })
