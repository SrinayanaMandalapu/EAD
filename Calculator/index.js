const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}
function calculate(){
    try{
    display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error"
    }
}

function backspace(){
    let res = display.value.slice(0, display.value.length-1)
    display.value = res
}

function percentage() {
    try {
        // Extract the current value from the display
        let currentValue = display.value;

        // Match the last number in the expression using regex
        let lastNumberMatch = currentValue.match(/(\d+\.?\d*)$/);
        
        if (lastNumberMatch) {
            let lastNumber = lastNumberMatch[0];
            let percentageValue = (parseFloat(lastNumber) / 100).toString();

            // Replace the last number in the expression with its percentage value
            display.value = currentValue.replace(/(\d+\.?\d*)$/, percentageValue);
        }
    } catch (e) {
        display.value = 'Error';
    }
}

function piDisplay(){
    if (display.value = ""){
        appendToDisplay("3.14")
    }
    else{
        let char = display.value.charAt(display.value.length-1);
        if(char == "+" | char == "-" | char == "*" | char == "/"){
            appendToDisplay("3.14")
        } 
        else{
            display.value = "Error"
        }
    }
}