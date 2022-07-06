const listaAutos = document.getElementById('filter');
listaAutos.addEventListener('click', mostrarLista)
const option = document.createElement('option')

function mostrarLista() {
    fetch('carsJSON.json')
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            data.forEach(clase => {
                console.log(clase);
            })
        })
        // .then(respuesta => respuesta.json())
        // .then(data => console.log(data.cars))
        
        listaAutos.appendChild(option)
}
