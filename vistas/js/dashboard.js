const dataDashboard = async () => {
    //PERU
    const BASE_API = './data/dataAll.json'

    const getData = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        
        const valuePreviousConfirmed = data[data.length-2].Confirmed
        const valuePreviousConfirmedFast = data[data.length-2].ConfirmedFast
        const valuePreviousRecovered = data[data.length-2].Recovered
        const valuePreviousDeaths = data[data.length-2].Deaths
        const valuePreviousDescarted = data[data.length-2].Descarted
        const valuePreviousDescartedFast = data[data.length-2].DescartedFast
        const valuePreviousActives = valuePreviousConfirmed + valuePreviousConfirmedFast - valuePreviousRecovered - valuePreviousDeaths

        const valueConfirmed = data[data.length-1].Confirmed
        const valueConfirmedFast = data[data.length-1].ConfirmedFast
        const valueRecovered = data[data.length-1].Recovered
        const valueDeaths = data[data.length-1].Deaths
        const valueDescarted = data[data.length-1].Descarted
        const valueDescartedFast = data[data.length-1].DescartedFast
        const valueActives = valueConfirmed + valueConfirmedFast - valueRecovered - valueDeaths

        const valueConfirmedMen = data[data.length-1].Men
        const valueConfirmedWomen = data[data.length-1].Women

        const dataFiltered = {  valueConfirmed,
                                valueConfirmedFast,
                                valueRecovered, 
                                valueDeaths, 
                                valueActives, 
                                valueDescarted,
                                valueDescartedFast,
                                valuePreviousConfirmed,
                                valuePreviousConfirmedFast,
                                valuePreviousRecovered,
                                valuePreviousDeaths,
                                valuePreviousDescarted,
                                valuePreviousDescartedFast,
                                valuePreviousActives,
                                valueConfirmedMen,
                                valueConfirmedWomen
                            }

        return dataFiltered
        throw new Error('No se encontró ningun resultado');
    }

    try {
        const   {     
                    valueConfirmed,
                    valueConfirmedFast,
                    valueRecovered, 
                    valueDeaths, 
                    valueActives, 
                    valueDescarted,
                    valueDescartedFast,
                    valuePreviousConfirmed,
                    valuePreviousConfirmedFast,
                    valuePreviousRecovered,
                    valuePreviousDeaths,
                    valuePreviousDescarted,
                    valuePreviousDescartedFast,
                    valuePreviousActives,
                    valueConfirmedMen,
                    valueConfirmedWomen
                } = await getData(`${BASE_API}`)

        const valueProvesRealized = valueDescarted + valueConfirmed
        const valueProvesRealizedFast = valueDescartedFast + valueConfirmedFast
        const valuePreviousProvesRealized = valuePreviousDescarted + valuePreviousConfirmed
        const valuePreviousProvesRealizedFast = valuePreviousDescartedFast + valuePreviousConfirmedFast

        document.getElementById("nroConfirmed").textContent = valueConfirmed
        document.getElementById("nroConfirmedFast").textContent = valueConfirmedFast
        document.getElementById("nroPositivesTotal").textContent = valueConfirmed + valueConfirmedFast
        document.getElementById("nroDeaths").textContent = valueDeaths
        document.getElementById("nroRecovered").textContent = valueRecovered
        document.getElementById("nroActives").textContent = valueActives
        document.getElementById("nroProvesTotal").textContent = valueConfirmed + valueConfirmedFast + valueDescarted + valueDescartedFast
        document.getElementById("nroDescarted").textContent = valueDescarted
        document.getElementById("nroDescartedFast").textContent = valueDescartedFast
        document.getElementById("nroProves").textContent = valueProvesRealized
        document.getElementById("nroProvesFast").textContent = valueProvesRealizedFast
        document.getElementById("percentRecovered").textContent = `${(valueRecovered/(valueConfirmed+valueConfirmedFast)*100).toFixed(2)} %`
        document.getElementById("percentDeaths").textContent = `${(valueDeaths/(valueConfirmed+valueConfirmedFast)*100).toFixed(2)} %`

        //CONFIRMADOS
        const nroNewsConfirmed = valueConfirmed - valuePreviousConfirmed
        const nroNewsConfirmedFast = valueConfirmedFast - valuePreviousConfirmedFast
        const nroNewsConfirmedTotal = valueConfirmed + valueConfirmedFast - valuePreviousConfirmed - valuePreviousConfirmedFast
        const porNewsConfirmed = ((valueConfirmed - valuePreviousConfirmed) / valuePreviousConfirmed * 100).toFixed(1)
        const porNewsConfirmedFast = ((valueConfirmedFast - valuePreviousConfirmedFast) / valuePreviousConfirmedFast * 100).toFixed(1)
        const porNewsConfirmedTotal = ((valueConfirmed + valueConfirmedFast - valuePreviousConfirmed - valuePreviousConfirmedFast) / (valuePreviousConfirmed + valuePreviousConfirmedFast) * 100).toFixed(1)
        
        if(nroNewsConfirmed > 0){
            document.getElementById("nroNewsConfirmed").textContent = `(${nroNewsConfirmed}) ${porNewsConfirmed}%`
        }

        if(nroNewsConfirmedFast > 0){
            document.getElementById("nroNewsConfirmedFast").textContent = `(${nroNewsConfirmedFast}) ${porNewsConfirmedFast}%`
        }

        document.getElementById("nroNewsConfirmedTotal").textContent = `(${nroNewsConfirmedTotal}) ${porNewsConfirmedTotal}%`
        
        //FALLECIDOS
        const nroNewsDeaths = valueDeaths - valuePreviousDeaths
        const porNewsDeaths = ((valueDeaths - valuePreviousDeaths) / valuePreviousDeaths * 100).toFixed(1)
        
        if(nroNewsDeaths > 0){
            document.getElementById("nroNewsDeaths").textContent = `(${nroNewsDeaths}) ${porNewsDeaths}%`
        }

        //RECUPERADOS
        const nroNewsRecovered = valueRecovered - valuePreviousRecovered
        const porNewsRecovered = ((valueRecovered - valuePreviousRecovered) / valuePreviousRecovered * 100).toFixed(1)
        
        if(nroNewsRecovered > 0){
            document.getElementById("nroNewsRecovered").textContent = `(${nroNewsRecovered}) ${porNewsRecovered}%`
        }

        //ACTIVES
        const nroNewsActives = valueActives - valuePreviousActives
        const porNewsActives = ((valueActives - valuePreviousActives) / valuePreviousActives * 100).toFixed(1)
        
        if(nroNewsActives > 0){
            document.getElementById("nroNewsActives").textContent = `(${nroNewsActives}) ${porNewsActives}%`
        }
        
        //PRUEBAS DESCARTADAS
        const nroNewsDescarted = valueDescarted - valuePreviousDescarted
        const nroNewsDescartedFast = valueDescartedFast - valuePreviousDescartedFast
        const porNewsDescarted = ((valueDescarted - valuePreviousDescarted) / valuePreviousDescarted * 100).toFixed(1)
        const porNewsDescartedFast = ((valueDescartedFast - valuePreviousDescartedFast) / valuePreviousDescartedFast * 100).toFixed(1)
        
        if(nroNewsDescarted > 0){
            document.getElementById("nroNewsDescarted").textContent = `(${nroNewsDescarted}) ${porNewsDescarted}%`
        }

        if(nroNewsDescartedFast > 0){
            document.getElementById("nroNewsDescartedFast").textContent = `(${nroNewsDescartedFast}) ${porNewsDescartedFast}%`
        }

        //PRUEBAS REALIZADAS
        const nroNewsProvesRealized = valueProvesRealized - valuePreviousProvesRealized
        const nroNewsProvesRealizedFast = valueProvesRealizedFast - valuePreviousProvesRealizedFast
        const porNewsProvesRealized = ((valueProvesRealized - valuePreviousProvesRealized) / valuePreviousProvesRealized * 100).toFixed(1)
        const porNewsProvesRealizedFast = ((valueProvesRealizedFast - valuePreviousProvesRealizedFast) / valuePreviousProvesRealizedFast * 100).toFixed(1)
        const porNewsProvesRealizedTotal = ((valueProvesRealized + valueProvesRealizedFast - valuePreviousProvesRealized - valuePreviousProvesRealizedFast) / (valuePreviousProvesRealized + valuePreviousProvesRealizedFast) * 100).toFixed(1)
        
        if(nroNewsProvesRealized > 0){
            document.getElementById("nroNewsRealized").textContent = `(${nroNewsProvesRealized}) ${porNewsProvesRealized}%`
        }

        if(nroNewsProvesRealizedFast > 0){
            document.getElementById("nroNewsRealizedFast").textContent = `(${nroNewsProvesRealizedFast}) ${porNewsProvesRealizedFast}%`
        }
        

        document.getElementById("nroNewsProvesTotal").textContent = `(${nroNewsProvesRealized + nroNewsProvesRealizedFast}) ${porNewsProvesRealizedTotal}%`

        var options = {
            tooltips: {
            enabled: false
            },
            plugins: {
            datalabels: {
                formatter: (value, ctx) => {
                let datasets = ctx.chart.data.datasets;
                if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
                    let sum = datasets[0].data.reduce((a, b) => a + b, 0);
                    let percentage = Math.round((value / sum) * 100) + '%';
                    return percentage;
                } else {
                    return percentage;
                }
                },
                color: '#fff',
            }
            }
        };

        var options = {
            tooltips: {
                enabled: false
            },
            legend: {
                labels: {
                    fontColor: 'white'
                }
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        var dataset = data.datasets[tooltipItem.datasetIndex];
                        var meta = dataset._meta[Object.keys(dataset._meta)[0]];
                        var total = meta.total;
                        var currentValue = dataset.data[tooltipItem.index];
                        var percentage = parseFloat((currentValue/total*100).toFixed(1));
                        return currentValue + ` (${percentage}%)`;
                    },
                    title: function(tooltipItem, data) {
                        return data.labels[tooltipItem[0].index];
                    }
                }
            }
        }

        let ctxSexo = document.getElementById("chartSexo").getContext('2d');
        new Chart(ctxSexo,
        {
            "type": "pie",
            "data": {
                "labels": ['Masculino','Femenino'],
                "datasets": [{
                    "data": [valueConfirmedMen, valueConfirmedWomen],
                    "backgroundColor": ["#118DFF","#F20574"],
                    "borderColor": ["#118DFF","#F20574"],
                    "hoverBorderColor": ["#fff","#fff"],
                    "hoverBorderWidth": 0.7
                }],
            },
            "options": options
        });

        let ctxProves = document.getElementById("chartProves").getContext('2d');
        new Chart(ctxProves,
        {
            "type": "pie",
            "data": {
                "labels": ['Positivos','Descartados'],
                "datasets": [{
                    "data": [valueConfirmed + valueConfirmedFast, valueDescarted + valueDescartedFast],
                    "backgroundColor": ["#63CB89","#EC5E69"],
                    "borderColor": ["#63CB89","#EC5E69"],
                    "hoverBorderColor": ["#fff","#fff"],
                    "hoverBorderWidth": 0.7
                }],
            },
            "options": options
        });

        let ctxCases = document.getElementById("chartCases").getContext('2d');
        new Chart(ctxCases,
        {
            "type": "pie",
            "data": {
                "labels": ['Activos','Recuperados', 'Muertos'],
                "datasets": [{
                    "data": [valueActives, valueRecovered, valueDeaths],
                    "backgroundColor": ["#EC5E69","#63CB89","#272c32"],
                    "borderColor": ["#EC5E69","#63CB89","#272c32"],
                    "hoverBorderColor": ["#fff","#fff", "#fff"],
                    "hoverBorderWidth": 0.7
                }],
            },
            "options": options
        });

    } catch (error) {
        alert(error.message)
    }
}

dataDashboard();

var citymap = {};

const getCities = async () => {
    const BASE_API = './data/dataByRegion.json'
    
    const getData = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        return data
        throw new Error('No se encontró ningun resultado');
    } 
    
    try {
        const resAllDataRegions = await getData(`${BASE_API}`)

        let provinces = [];
        let confirmed = [];

        let confirmedByAmazonas = 0
        let confirmedByAncash = 0
        let confirmedByApurimac = 0
        let confirmedByArequipa = 0
        let confirmedByAyacucho = 0
        let confirmedByCajamarca = 0
        let confirmedByCallao = 0
        let confirmedByCusco = 0
        let confirmedByHuancavelica = 0
        let confirmedByHuanuco = 0
        let confirmedByIca = 0
        let confirmedByJunin = 0
        let confirmedByLaLibertad = 0
        let confirmedByLambayeque = 0
        let confirmedByLima = 0
        let confirmedByLoreto = 0
        let confirmedByMadreDeDios = 0
        let confirmedByMoquegua = 0
        let confirmedByPasco = 0
        let confirmedByPiura = 0
        let confirmedByPuno = 0
        let confirmedBySanMartin = 0
        let confirmedByTacna = 0
        let confirmedByTumbes = 0
        let confirmedByUcayali = 0
        
        for (strNameProvince in resAllDataRegions[0].Provinces)
        {
            provinces.push(strNameProvince);

            switch (strNameProvince) {
                case 'AMAZONAS':          
                    for (strDate in resAllDataRegions[0].Provinces.AMAZONAS)
                    {
                        confirmedByAmazonas = resAllDataRegions[0].Provinces.AMAZONAS[strDate]
                    }
                    break;
                case 'ÁNCASH':          
                    for (strDate in resAllDataRegions[0].Provinces.ÁNCASH)
                    {
                        confirmedByAncash = resAllDataRegions[0].Provinces.ÁNCASH[strDate]
                    }
                    break;
                case 'APURÍMAC':          
                    for (strDate in resAllDataRegions[0].Provinces.APURÍMAC)
                    {
                        confirmedByApurimac = resAllDataRegions[0].Provinces.APURÍMAC[strDate]
                    }
                    break;
                case 'AREQUIPA':          
                    for (strDate in resAllDataRegions[0].Provinces.AREQUIPA)
                    {
                        confirmedByArequipa = resAllDataRegions[0].Provinces.AREQUIPA[strDate]
                    }
                    break;
                case 'AYACUCHO':          
                    for (strDate in resAllDataRegions[0].Provinces.AYACUCHO)
                    {
                        confirmedByAyacucho = resAllDataRegions[0].Provinces.AYACUCHO[strDate]
                    }
                    break;
                case 'CAJAMARCA':          
                    for (strDate in resAllDataRegions[0].Provinces.CAJAMARCA)
                    {
                        confirmedByCajamarca = resAllDataRegions[0].Provinces.CAJAMARCA[strDate]
                    }
                    break;
                case 'CALLAO':          
                    for (strDate in resAllDataRegions[0].Provinces.CALLAO)
                    {
                        confirmedByCallao = resAllDataRegions[0].Provinces.CALLAO[strDate]
                    }
                    break;
                case 'CUSCO':          
                    for (strDate in resAllDataRegions[0].Provinces.CUSCO)
                    {
                        confirmedByCusco = resAllDataRegions[0].Provinces.CUSCO[strDate]
                    }
                    break;
                case 'HUANCAVELICA':          
                    for (strDate in resAllDataRegions[0].Provinces.HUANCAVELICA)
                    {
                        confirmedByHuancavelica = resAllDataRegions[0].Provinces.HUANCAVELICA[strDate]
                    }
                    break;
                case 'HUÁNUCO':          
                    for (strDate in resAllDataRegions[0].Provinces.HUÁNUCO)
                    {
                        confirmedByHuanuco = resAllDataRegions[0].Provinces.HUÁNUCO[strDate]
                    }
                    break;
                case 'ICA':          
                    for (strDate in resAllDataRegions[0].Provinces.ICA)
                    {
                        confirmedByIca = resAllDataRegions[0].Provinces.ICA[strDate]
                    }
                    break;
                case 'JUNÍN':          
                    for (strDate in resAllDataRegions[0].Provinces.JUNÍN)
                    {
                        confirmedByJunin = resAllDataRegions[0].Provinces.JUNÍN[strDate]
                    }
                    break;
                case 'LA_LIBERTAD':          
                    for (strDate in resAllDataRegions[0].Provinces.LA_LIBERTAD)
                    {
                        confirmedByLaLibertad = resAllDataRegions[0].Provinces.LA_LIBERTAD[strDate]
                    }
                    break;
                case 'LAMBAYEQUE':          
                    for (strDate in resAllDataRegions[0].Provinces.LAMBAYEQUE)
                    {
                        confirmedByLambayeque = resAllDataRegions[0].Provinces.LAMBAYEQUE[strDate].Confirmed
                    }
                    break;
                case 'LIMA':          
                    for (strDate in resAllDataRegions[0].Provinces.LIMA)
                    {
                        confirmedByLima = resAllDataRegions[0].Provinces.LIMA[strDate]
                    }
                    break;
                case 'LORETO':          
                    for (strDate in resAllDataRegions[0].Provinces.LORETO)
                    {
                        confirmedByLoreto= resAllDataRegions[0].Provinces.LORETO[strDate]
                    }
                    break;
                case 'MADRE_DE_DIOS':          
                    for (strDate in resAllDataRegions[0].Provinces.MADRE_DE_DIOS)
                    {
                        confirmedByMadreDeDios = resAllDataRegions[0].Provinces.MADRE_DE_DIOS[strDate]
                    }
                    break;
                case 'MOQUEGUA':          
                    for (strDate in resAllDataRegions[0].Provinces.MOQUEGUA)
                    {
                        confirmedByMoquegua = resAllDataRegions[0].Provinces.MOQUEGUA[strDate]
                    }
                    break;
                case 'PASCO':          
                    for (strDate in resAllDataRegions[0].Provinces.PASCO)
                    {
                        confirmedByPasco = resAllDataRegions[0].Provinces.PASCO[strDate]
                    }
                    break;
                case 'PIURA':          
                    for (strDate in resAllDataRegions[0].Provinces.PIURA)
                    {
                        confirmedByPiura = resAllDataRegions[0].Provinces.PIURA[strDate]
                    }
                    break;
                case 'PUNO':          
                    for (strDate in resAllDataRegions[0].Provinces.PUNO)
                    {
                        confirmedByPuno = resAllDataRegions[0].Provinces.PUNO[strDate]
                    }
                    break;
                case 'SAN_MARTÍN':          
                    for (strDate in resAllDataRegions[0].Provinces.SAN_MARTÍN)
                    {
                        confirmedBySanMartin = resAllDataRegions[0].Provinces.SAN_MARTÍN[strDate]
                    }
                    break;
                case 'TACNA':          
                    for (strDate in resAllDataRegions[0].Provinces.TACNA)
                    {
                        confirmedByTacna = resAllDataRegions[0].Provinces.TACNA[strDate]
                    }
                    break;
                case 'TUMBES':          
                    for (strDate in resAllDataRegions[0].Provinces.TUMBES)
                    {
                        confirmedByTumbes = resAllDataRegions[0].Provinces.TUMBES[strDate]
                    }
                    break;
                case 'UCAYALI':          
                    for (strDate in resAllDataRegions[0].Provinces.UCAYALI)
                    {
                        confirmedByUcayali = resAllDataRegions[0].Provinces.UCAYALI[strDate]
                    }
                    break;
                default:
                    break;
            }
        }

        citymap = {
            amazonas: {
                center: {lat: -6.2182059, lng: -78.8567937},
                population: confirmedByAmazonas,
            },
            ancash: {
                center: {lat: -9.0853715, lng: -78.6152081},
                population: confirmedByAncash,
            },
            apurimac: {
                center: {lat: -14.0060787, lng: -73.5098141},
                population: confirmedByApurimac,
            },
            arequipa: {
                center: {lat: -16.3988895, lng: -71.5350037},
                population: confirmedByArequipa,
            },
            ayacucho: {
                center: {lat: -13.1583628, lng: -74.2473237},
                population: confirmedByAyacucho,
            },
            cajamarca: {
                center: {lat: -7.1606346, lng: -78.5392219},
                population: confirmedByCajamarca,
            },
            callao: {
                center: {lat: -12.0565901, lng: -77.1181412},
                population: confirmedByCallao,
            },
            cusco: {
                center: {lat: -13.5226402, lng: -71.9673386},
                population: confirmedByCusco,
            },
            huancavelica: {
                center: {lat: -12.782799, lng: -74.9929764},
                population: confirmedByHuancavelica,
            },
            huanuco: {
                center: {lat: -9.9306202, lng: -76.2422333},
                population: confirmedByHuanuco,
            },
            ica: {
                center: {lat: -14.06777, lng: -75.7286072},
                population: confirmedByIca,
            },
            junin: {
                center: {lat: -12.069156, lng: -75.208648},
                population: confirmedByJunin,
            },
            lalibertad: {
                center: {lat: -8.1159897, lng: -79.0299835},
                population: confirmedByLaLibertad,
            },
            lambayeque: {
                center: {lat: -6.7713699, lng: -79.8408813},
                population: confirmedByLambayeque,
            },
            lima: {
                center: {lat: -12.0431805, lng: -77.0282364},
                population: confirmedByLima,
            },
            loreto: {
                center: {lat: -3.74912, lng: -73.25383},
                population: confirmedByLoreto,
            },
            madrededios: {
                center: {lat: -11.6221466, lng: -71.6618838},
                population: confirmedByMadreDeDios,
            },
            moquegua: {
                center: {lat: -17.1908305, lng: -70.965007},
                population: confirmedByMoquegua,
            },
            pasco: {
                center: {lat: -10.683354, lng: -76.256148},
                population: confirmedByPasco,
            },
            piura: {
                center: {lat: -5.19449, lng: -80.6328201},
                population: confirmedByPiura,
            },
            puno: {
                center: {lat: -15.8422003, lng: -70.0198975},
                population: confirmedByPuno,
            },
            sanmartin: {
                center: {lat: -6.4968454, lng: -76.3980682},
                population: confirmedBySanMartin,
            },
            tacna: {
                center: {lat: -18.0146503, lng: -70.2536163},
                population: confirmedByTacna,
            },
            tumbes: {
                center: {lat: -3.5667477, lng: -80.4538686},
                population: confirmedByTumbes,
            },
            ucayali: {
                center: {lat: -9.3481438, lng: -75.4647077},
                population: confirmedByUcayali,
            },
        }

        initMap()

        return

    } catch (error) {
        alert(error.message)
    }
}

getCities();

async function initMap() {
    let infowindow = new google.maps.InfoWindow(); // Only one InfoWindow
    // Create the map.
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: {lat: -10.1899672, lng: -75.015152},
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
            }
        ]
    });

    for (var city in citymap) {
        if(citymap[city].population > 0){
            const cityCases = citymap[city].population
            
            const cityname = city;

            let cityCircle = new google.maps.Circle({
                strokeColor: '#FF0000',
                strokeOpacity: 0.6,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0.25,
                map: map,
                center: citymap[city].center,
                radius: Math.sqrt(citymap[city].population) * 2000
            });
    
            cityCircle.addListener('click', function(ev){
                infowindow.close();
                infowindow.setContent(`<div id="infowindow">${cityname.toUpperCase()}<br>Casos Confirmados: ${cityCases}</div>`);
                infowindow.setPosition(cityCircle.getCenter());
                infowindow.open(map, this);
            });
        }
    }

    const BASE_API = './data/zoneCases.json'
    const getData = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        return data
        throw new Error('No se encontró ningun resultado');
    }

    try {
        const locations = await getData(`${BASE_API}`)

        var mapZones = new google.maps.Map(document.getElementById('mapZones'), {
            zoom: 5,
            center: {lat: -10.1899672, lng: -75.015152},
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
                {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
                {
                    featureType: 'administrative.locality',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}]
                },
                {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'geometry',
                    stylers: [{color: '#263c3f'}]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#6b9a76'}]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{color: '#38414e'}]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#212a37'}]
                },
                {
                    featureType: 'road',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#9ca5b3'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{color: '#746855'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#1f2835'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#f3d19c'}]
                },
                {
                    featureType: 'transit',
                    elementType: 'geometry',
                    stylers: [{color: '#2f3948'}]
                },
                {
                    featureType: 'transit.station',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{color: '#17263c'}]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#515c6d'}]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.stroke',
                    stylers: [{color: '#17263c'}]
                }
            ]
        });

        // Create an array of alphabetical characters used to label the markers.

        var markers = locations.map(function(location, i) {
            return new google.maps.Marker({
                position: location
            });
        });

        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(mapZones, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

    } catch (error) {
        alert(error.message)
    }
}