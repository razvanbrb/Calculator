var inputLabel = document.getElementById('inputLabel');

function  pushBtn(obj){
    var pushed = obj.innerHTML;

    if (pushed == '=') {
        // Calculate
        inputLabel.innerHTML = eval(inputLabel.innerHTML);
    }
    else if(pushed == 'AC'){
        //Clear all
        inputLabel.innerHTML = '0';
    }
    else {
        if (inputLabel.innerHTML = '0') {
            inputLabel.innerHTML = pushed;
        }
    }
    else{
        inputLabel.innerHTML +=pushed;
    }
}