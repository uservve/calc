var display = document.getElementById("input");




function clearAll(){
display.value=""
}

function append(input){
  display.value += input;
}

function equalz(){
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "error";
  }
}