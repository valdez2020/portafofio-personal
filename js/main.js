
//Botón para volver al tope de la página
let arrow = document.querySelector('.to-up');

arrow.addEventListener("click",() => {
    arrow.animate({
        scrollTop: 0
    },1000);
})

//Intervalos en animación de presentación


let parrafo_2 = document.getElementById('p-2');
let parrafo_3 = document.getElementById('p-3');
let titulo = document.getElementById('title');

let clase_1 = "flicker-in-1";
let clase_2 = "flicker-out-1";
let clase_3 = "text-focus-in";


const show = () =>{
    let parrafo_1 = document.getElementById('p-1');
        parrafo_1.classList.remove(clase_1);
}
/*

let texto = [parrafo_2,parrafo_3,titulo];
let clases = ['flicker-in-1','flicker-out-1','text-focus-in'];


const show = () =>{
    for(let i = 0;i<=3;i++){


    let parrafo = document.getElementById('p-'+ toString(i));
    parrafo.classList.remove(clases(i));
    }
    alert("hola");
}

*/



