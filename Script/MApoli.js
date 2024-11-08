// Salones
const salonA1 = document.getElementById('SalonA1');
const salonA2 = document.getElementById('SalonA2');
const salonA3 = document.getElementById('SalonA3');
const salonA4 = document.getElementById('SalonA4');
const salonA5 = document.getElementById('SalonA5');

// Descripciones
const descripcion1 = document.getElementById('descripcion1');
const descripcion2 = document.getElementById('descripcion2');
const descripcion3 = document.getElementById('descripcion3');
const descripcion = document.getElementById('descripcion4');

// Variable para almacenar el salón seleccionado
let selectedSalon = null;

// Función para manejar la descripción
const setDescription = (salon, texto, textoF, imagenR, imagenL) => {
    salon.addEventListener('click', () => {
        // Verificar si el salón seleccionado es diferente al actual
        if (selectedSalon !== salon) {
            // Actualizar la descripción solo si el salón es diferente
            descripcion1.textContent = texto; // Cambia el texto
            descripcion2.innerHTML = `<img src='${imagenR}' alt='${textoF}'>`; // Imagen Referencia
            descripcion3.innerHTML = `<img src='${imagenL}' alt='${textoF}'>`; // Imagen Localizacion

            // Cambiar el salón seleccionado
            selectedSalon = salon;
        }
    });
};


// Inicializar las descripciones de cada salón
setDescription(
    salonA1,
    "Salon A-1",
    "Imagen A-1 Referencia no encontrada",
    '/Imagenes/JPG/Normal.jpg',
    '/IMG/annoyed.svg'
);

setDescription(
    salonA2,
    "Salon A-2",
    "Imagen A-2 Referencia no encontrada",
    '/IMG/annoyed.svg',
    '/IMG/annoyed.svg'
);

setDescription(
    salonA3,
    "Salon A-3",
    "Imagen A-3 Referencia no encontrada",
    '/IMG/annoyed.svg',
    '/IMG/annoyed.svg'
);

setDescription(
    salonA4,
    "Salon A-4",
    "Imagen A-4 Referencia no encontrada",
    '/IMG/annoyed.svg',
    '/IMG/annoyed.svg'
);

setDescription(
    salonA5,
    "Salon A-5",
    "Imagen A-5 Referencia no encontrada",
    '/IMG/annoyed.svg',
    '/IMG/annoyed.svg'
);
