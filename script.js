var firstInput = document.getElementById("first");
var secondInput = document.getElementById("second");

firstInput.addEventListener
("keypress", function(event) 
  {
  if (event.key === "Enter" && firstInput.value!=="")
    {
      secondInput.focus()
    }
  }
)

secondInput.addEventListener
("keypress", function(event) 
  {
    if (firstInput.value=="")
    {
      firstInput.focus()
    }
  else if (event.key === "Enter" && secondInput.value!=="")
    {
      butt.click();
    }
  }
)

butt.onclick = function clickAction()
  {
    document.getElementById('result').innerText = comparison(firstInput.value,secondInput.value)
  }

function comparison(str1,str2)
  {
    for(let i=0,i<str1.length,)
  }