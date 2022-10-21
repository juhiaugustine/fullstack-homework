/** Exercise 02 - Reverse **/

// Add your code here
function reverseNumber() {
 
    let stringInputValue = document.getElementById("input").value;
    let inputValueArray = stringInputValue.split('');
    let resultLabel = document.getElementById('result_label');
    let resultString = '';
    let resultColor = '';
    if (stringInputValue.length == 8)
    {
        resultString = stringInputValue + " --> " + inputValueArray.reverse().join('');
        resultColor = 'green';
    } else {
        resultString = 'Error: Please input an 8-digit number';
        resultColor = 'red';
    }
    resultLabel.innerHTML = resultString;
    resultLabel.style.color = resultColor;
};