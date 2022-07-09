const cargarAutos = document.querySelector('#filter');
const filtro = document.querySelector('.filter')
const auto = document.querySelector('.auto')
const resultado = document.querySelector('.resultado')




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
    autos.map( car =>{
        const option = document.createElement('option')
        option.textContent = `${car}`
        cargarAutos.appendChild(option)
    })

    const company = Object.values(datos.cars)
    company.map(com =>{
        const reducido = com.Company1
        console.log(reducido);
        const {Code, Features2, PictureURL, Rates, VehGroup, Name} = reducido
        
        
        let AR = Rates.AR.irrf
        const numAR = AR.toFixed(2)

        let F2 = Rates.F2.irrf
        const numF2 = F2.toFixed(2)
        let SC = Rates.SC.irrf
        const numSC = SC.toFixed(2)
        let H8 = Rates.H8.irrf
        const numH8 = H8.toFixed(2)

        resultado.innerHTML += `
            <div class="container-auto">
            <div class="container-auto-S1">
                    <div class="auto">
                        <img src="${PictureURL}" alt="">
                    </div>
                    <div class="parrafos">
                        <h3>${Features2.category}</h3>
                        <p>Group ${VehGroup} ${Code} <br> ${Name}</p>
                    </div>
                    <div class="btn-book">
                        <button><span><img src="./assets/ok.svg" alt=""></span> Book now!</button>
                    </div>
            </div>

            <div class="container-auto-S2">
                    <div class="characteristics">
                        <h6>characteristics</h6>
                        <ul>
                            <li><span><img src="./assets/seats.svg" alt=""></span>${Features2.seats} seats</li>
                            <li><span><img src="./assets/luggage.svg" alt=""></span>${Features2.largeSuitcase} large suitcase</li>
                            <li><span><img src="./assets/bag.svg" alt=""></span>${Features2.smallSuitcase} small suitcase</li>
                            <li><span><img src="./assets/door.svg" alt=""></span>${Features2.doors} doors</li>
                            <li><span><img src="./assets/transmision.svg" alt=""></span>${Features2.transmition} transmission</li>
                            <li><span><img src="./assets/air-conditioning.svg" alt=""></span>${Features2.air}</li>
                        </ul>
                    </div>
                    <div class="rates">
                        <h6>available rates</h6>
                        <div class="rates-contenido">
                            <div class="rates-list">
                                <div class="container-input">
                                    <input type="radio">
                                    <p>${Rates.AR.RateData.name}</p>
                                </div>
                                <p data-bs-toggle="modal" data-bs-target="#exampleModal" class="rate-red">Rate Inclusions</p>
                                <p class="rate-precio">USD <span>${numAR}</span></p>
                            </div>
                            <div class="rates-list">
                                <div class="container-input">
                                    <input type="radio">
                                    <p>${Rates.F2.RateData.name}</p>
                                </div>
                                <p data-bs-toggle="modal" data-bs-target="#exampleModal" class="rate-red">Rate Inclusions</p>
                                <p class="rate-precio">USD <span>${numF2}</span></p>
                            </div>
                            <div class="rates-list">
                                <div class="container-input">
                                    <input type="radio">
                                    <p>${Rates.SC.RateData.name}</p>
                                </div>
                                <p data-bs-toggle="modal" data-bs-target="#exampleModal" class="rate-red">Rate Inclusions</p>
                                <p class="rate-precio">USD <span>${numSC}</span></p>
                            </div>
                            <div class="rates-list">
                                <div class="container-input">
                                    <input type="radio">
                                    <p>${Rates.H8.RateData.name}</p>
                                </div>
                                <p data-bs-toggle="modal" data-bs-target="#exampleModal" class="rate-red">Rate Inclusions</p>
                                <p class="rate-precio">USD <span>${numH8}</span></p>
                            </div>
                            <div class="rates-list">
                                <div class="container-input">
                                    <input type="radio">
                                    <p>Lorem ipsun</p>
                                </div>
                                <p data-bs-toggle="modal" data-bs-target="#exampleModal" class="rate-red">Rate Inclusions</p>
                                <p class="rate-precio">USD <span>866.26</span></p>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
        `
        

        // const imagenAuto = document.createElement('img')
        // imagenAuto.src = `${PictureURL}`
        // auto.appendChild(imagenAuto)
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


// let myModal = document.getElementById('myModal')
// let myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })


