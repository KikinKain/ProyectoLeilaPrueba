let Pregunta = document.querySelectorAll('.ContenedorQ');
let Botones = document.querySelectorAll('.BotonRespuesta');
let Respuesta = document.querySelectorAll('.ContenedorA');
let Parrafo = document.querySelectorAll('.ParrafoA');
let Padre = document.getElementsByClassName('.Padre');

for ( let i = 0; i < Botones.length; i ++){

    let i2 = 0;
    
    Botones[i].addEventListener('click', () =>{
        
        if (i2 == 0){
            console.log('Abre');
                Respuesta[i].style.height ='fit-content';
                Botones[i].innerHTML = '<img src="/Imagenes/Flechita.svg" alt="">';
                i2 ++;
        }
            
        else if (i2 == 1){
            console.log('cierra');
                Respuesta[i].style.height = '0px';
                Botones[i].innerHTML = '<img src="/Imagenes/FlechitaAbajo.svg" alt="">';
                i2 --;
        }


    })

}