const getCounterElement = () => document.getElementById("number");

function add(){
    const element = getCounterElement();
    let currentValue = parseInt(element.innerHTML);

    element.innerHTML = currentValue + 1;
}

function reset(){
    getCounterElement().innerHTML = 0;
}

function decrease(){
    const element = getCounterElement();
    let currentValue = parseInt(element.innerHTML);
    if (currentValue > 0) {
        element.innerHTML = currentValue - 1;
    }
};

export {add, reset, decrease}