let Pregunta = document.querySelectorAll('.ContenedorQ');
let Botones = document.querySelectorAll('.BotonRespuesta');
let Respuesta = document.querySelectorAll('.ContenedorA');
let Parrafo = document.querySelectorAll('.ParrafoA');


function CambiarColor(target){
    target.style.transition = '1s';
    target.style.backgroundColor = '#E3B1D1';
    target.style.border = '5px solid #AB66A6';
    setTimeout(() => {
        RegresarColor(target);
    }, 1500);
}
function RegresarColor(target){
    target.style.backgroundColor = '#F0D0DB';
    target.style.border = '0px solid #AB66A6';
}


const enlaces = document.querySelectorAll('a[href^="#"]');

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (event) => {
        event.preventDefault();   

            const targetId = enlace.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            target.classList.add('active');

            // Remover la clase 'active' de otros contenedores (opcional)
            const otrosContenedores = document.querySelectorAll('.contenedor');
            otrosContenedores.forEach(contenedor => {
            if (contenedor != target) {
                contenedor.classList.remove('active');
            }
        });

        // Desplazarse suavemente al contenedor
        target.scrollIntoView({ behavior: 'smooth' });
        CambiarColor(target);
    });
});

for ( let i = 0; i < Botones.length; i ++){
    
    let i2 = 0;
    
    Botones[i].addEventListener('click', () =>{

        if (i2 == 0){
                Respuesta[i].style.height = 'fit-content';
                Botones[i].innerHTML = '<img src="/Imagenes/SVG/Flechita.svg" alt="">';
                Respuesta[i].style.opacity = '1.0' 
                Respuesta[i].style.marginTop = '60px';
                i2 ++;
        }
        else if (i2 == 1){
                Respuesta[i].style.height = '0px';
                Botones[i].innerHTML = '<img src="/Imagenes/SVG/FlechitaAbajo.svg" alt="">';
                Respuesta[i].style.opacity = '0' ;
                Respuesta[i].style.marginTop = '0px';
                i2 --;
        }

    })

}

