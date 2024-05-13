window.onload =()=>{
    const buttons = document.querySelectorAll('.number');
    const screen = document.querySelector('.screen');
    const equals = document.querySelector('#btn-equals');
    const clear = document.querySelector('#btn-clear');

    buttons.forEach(button => {
        button.addEventListener('click',(e) => {
            screen.value += e.target.innerHTML;
        })
    })

    equals.addEventListener('click',(e) => {
        if(!screen.value){
            screen.value =  "Enter Value"
        }else{
            screen.value = eval(screen.value); // eval is inbuilt fuction which is calculate all operation
        }
    })

    clear.addEventListener('click',()=>{
        screen.value = "";
    })
}