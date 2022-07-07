const cargarAutos = document.querySelector('#filter');
const filtro = document.querySelector('.filter')



document.addEventListener('DOMContentLoaded', ()=>{
    consultarJson();
});

function consultarJson(){
    const url = 'carsJSON.json';
    fetch(url)
        .then( respuesta => respuesta.json())
        .then( resultado => selectJson(resultado))
}

function selectJson(datos){
    
    const objeto = Object.entries(datos.cars)
    console.log(objeto);

    objeto.forEach(e =>{
        console.log(e[0]);
        const option = document.createElement('option')
        option.textContent = `${e[0]}`
        cargarAutos.appendChild(option)
        console.log(Object.entries(e[1]));
    })
   
    
}


