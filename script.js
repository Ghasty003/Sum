let load = "Press on 'click me' to calculate your result"

window.onload = alert(load)

let btn = document.getElementById('btn');

btn.addEventListener('click', show);

function show(){
    let sum = 0;

    let x = document.calculator.result.value;

    let y = document.calculator.result2.value;

    let z = document.calculator.result4.value;

    let ree = document.calculator.result3;
    
    if(x>=600 && y >=7){
        ree.value = 'Too Large';
    }

    else if(y>10){
        ree.value = 'Power of n too large';
    }

    else if(x>1000){
        ree.value = 'Upper index too large';
    }

    else if(!x && !y && !z ){
        ree.value = 'Input Something'
    }

    else if(!x && !y){
        ree.value = 'Input Something'
    }

    else if(!y && !z){
        ree.value = 'Input Something'
    }

    else if(!x && !z){
        ree.value = 'Input Something'
    }

    else if(!x){
        ree.value = 'Input Something'
    }

    else if(!y){
        ree.value = 'Input Something'
    }

    else if(!z){
        ree.value = 'Input Something'
    }


    else{
        for(let i = z; i<= x; i++){
            sum += Math.pow(i,y);
        }
        ree.value = sum;
    }
}