const square = document.getElementById("square");

let x = 100;

function animate(){

    x += 3;

    square.setAttribute("x",x);

    if(x < 1600){
        requestAnimationFrame(animate);
    }

}

animate();