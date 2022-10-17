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
str1 = " " + str1
str2 = " " + str2
let n1 = str1.length;
let n2 = str2.length;
var p = new Array(n1);
  for (let z = 0; z < n1; z++)
  {
    p[z] = new Array(n2);
  }
  
for(let i=0;i<n1;i++)
  {
  for(let j=0;j<n2;j++)
    {
    if (i == 0 )
      {p[i][j]=i}
    else if ( j == 0 )
      {p[i][j]=j}
    else if (str1[i] == str2[j])
      {
      p[i][j] = p[i-1][j-1] ;
      }
    else 
      {
      p[i][j] = Math.min(p[i-1][j-1]+1,p[i-1][j]+1,p[i][j-1]+1);
      }
    }
  }
if (n1!==n2 && p[n1-1][n2-1]==0)
  {
    if (n1>n2)
      {return p[n1-1][n2-1]+n1-n2}
    else 
      {return p[n1-1][n2-1]+n2-n1}

  }
return p[n1-1][n2-1]
}