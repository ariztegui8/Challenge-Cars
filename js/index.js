const cargarAutos = document.querySelector('#filter');
const filtro = document.querySelector('.filter')
const example = document.querySelector('#example')


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

    const autos = Object.keys(datos.cars)
    console.log(autos);
    autos.map( car =>{
        console.log(car);
        const option = document.createElement('option')
        option.textContent = `${car}`
        cargarAutos.appendChild(option)
    })

    const company = Object.values(datos.cars)
    console.log(company);
    company.map(com =>{
        const reducido = com.Company1
        console.log(reducido);
        const {Name} = reducido
        console.log(Name);
        const lista = document.createElement('li')
        lista.textContent = `${Name}`
        example.appendChild(lista)
    })
    
    // const objeto = Object.entries(datos.cars)
    // console.log(objeto);

    // objeto.map(e =>{
    //     console.log(e[1]);
    //     const option = document.createElement('option')
    //     option.textContent = `${e[0]}`
    //     cargarAutos.appendChild(option)
    //     console.log(Object.entries(e[1]));
    // })
   
    
}


