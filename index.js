let inputBox = document.getElementById('inputBox');

function handleButtonClick(buttonValue) {

    if (inputBox.value === '' && ['+', '*', '/'].includes(buttonValue)) {
        return;
    }

    if (buttonValue === 'DEL') {
    
        inputBox.value = inputBox.value.slice(0, -1);
    } else if (buttonValue === 'RESET') {

        inputBox.value = '';
    } else if (buttonValue === '=') {
   
        inputBox.value = eval(inputBox.value);
    } else {
      
        inputBox.value += buttonValue;
    }
}


let buttons = document.querySelectorAll('button');
for (let button of buttons) {
    button.addEventListener('click', function() {
        handleButtonClick(this.textContent);
    });
}


document.addEventListener('keydown', function(event) {
    let key = event.key;
    if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
        
        inputBox.value += key;
    } else if (key === 'Enter') {
        
        inputBox.value = eval(inputBox.value);
        event.preventDefault();
    } else if (key === 'Backspace') {
   ter
        inputBox.value = inputBox.value.slice(0, -1);
    }
});
