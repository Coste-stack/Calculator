const display = document.getElementById('display');
let displayValue = '0';
let previousValue = '';
let currentValue = '';
let operation = '';
display.innerText = displayValue;

function f_operation(op){
	console.log(op);
	const n1 = parseInt(previousValue);
	const n2 = parseInt(currentValue);
	switch(op) {
	case "add":
		return n1 + n2;	
		break;
	case "subtract":
		return n1 - n2;	
		break;
	case "multiply":
		return n1 * n2;	
		break;
	case "divide":
		return n1 / n2;	
		break;
	default:
		return 0;
	}
}

function f_changeDisplay(buttonValue) {
	displayValue = buttonValue;
	display.innerText = buttonValue;
}

function f_handleButtonClick() {
	const button = event.target;
	const buttonValue = button.id;
	
	if (buttonValue == "clear") {
		// reset everything
		operation = '';
		previousValue = '';
		currentValue = '0';
	}
	else if (buttonValue == 'add' || buttonValue == 'subtract' ||
			buttonValue == 'multiply' || buttonValue == 'divide') {
		operation = buttonValue;
	}
	else if (buttonValue == '=') {
		// end operation
		currentValue = f_operation(operation).toString();
		console.log(currentValue);
		operation = '';
		previousValue = '';
	} 
	else { // if it's a number
		console.log(buttonValue);
		// if operation was or wasn't yet clicked
		if (operation == '') {
			currentValue = buttonValue;
			// reset the previous to make it work as clear
			previousValue = '';
		} else {
			previousValue = currentValue;
			currentValue = buttonValue;
		}
	}
	
	// update the display after calculations etc
	display.innerText = currentValue;
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', f_handleButtonClick);
});