//   getting the screen to show numbers and results
  let screen = document.getElementById("screen");

//   getting all buttons in buttons array
  let buttons = document.getElementsByClassName('btn');

//   variable to store expression to get evaluate
  let equation = "";

for(button of buttons)
{
    button.addEventListener('click' , (e) => 
    {
        buttonText = e.target.innerText;
        // console.log(buttonText);
        if(buttonText == 'C')
        {
            screen.value = "";
            equation = "";
        }
        else if(buttonText == 'Esc')
        {
            equation = equation.substr(0, equation.length-1);
            screen.value = equation;
        }
        else if(buttonText == '=')
        {
            // eval is a javascript function to perform computation
            screen.value = eval(equation);
            equation = "";
        }
        else 
        {
            equation += buttonText;
            screen.value = equation;
        }
    })
}
