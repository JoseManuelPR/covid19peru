
/*
const filter = v => v % 2
const filterMax = (fn, c) => x => c && fn(x) && c--, array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]  
const max = array.length / 2
const result = array.filter(filterMax(filter, max))
*/

const calculateCurveProjected = async () => {

    const BASE_API = './data/dataAll.json'

    const getData = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        return data
        throw new Error('No se encontró ningun resultado');
    } 

    const getDate = (date) => {        
        let current_datetime = new Date(date)
        current_datetime.setDate(current_datetime.getDate() + 1);
        let formatted_date = (current_datetime.getDate()) + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()
        return formatted_date
    }
    
    try {
        const resAllData = await getData(`${BASE_API}`)

        let days = [
                    "6-3-2020", 
                    "7-3-2020", 
                    "8-3-2020", 
                    "9-3-2020",
                    "10-3-2020",
                    "11-3-2020",
                    "12-3-2020",
                    "13-3-2020",
                    "14-3-2020",
                    "15-3-2020",
                    "16-3-2020",
                    "17-3-2020",
                    "18-3-2020",
                    "19-3-2020",
                    "20-3-2020",
                    "21-3-2020",
                    "22-3-2020",
                    "23-3-2020",
                    "24-3-2020",
                    "25-3-2020",
                    "26-3-2020",
                    "27-3-2020",
                    "28-3-2020",
                    "29-3-2020",
                    "30-3-2020",
                    "31-3-2020",
                    "01-4-2020",
                    "02-4-2020",
                    "03-4-2020",
                    "04-4-2020",
                    "05-4-2020",
                    "06-4-2020",
                    "07-4-2020",
                    "08-4-2020",
                    "09-4-2020",
                    "10-4-2020",
                    "11-4-2020",
                    "12-4-2020",
                    "13-4-2020",
                    "14-4-2020",
                    "15-4-2020",
                    "16-4-2020",
                    "17-4-2020",
                    "18-4-2020",
                    "19-4-2020",
                    "20-4-2020",
                    "21-4-2020",
                    "22-4-2020",
                    "23-4-2020",
                    "24-4-2020",
                    "25-4-2020",
                    "26-4-2020",
                    "27-4-2020",
                    "28-4-2020",
                    "29-4-2020",
                    "30-4-2020",
                    "01-5-2020",
                    "02-5-2020",
                    "03-5-2020",
                    "04-5-2020",
                    "05-5-2020",
                    "06-5-2020",
                    "07-5-2020",
                    "08-5-2020",
                    "09-5-2020",
                    "10-5-2020",
                    "11-5-2020",
                    "12-5-2020",
                    "13-5-2020",
                    "14-5-2020",
                    "15-5-2020",
                    "16-5-2020",
                    "17-5-2020",
                    "18-5-2020",
                    "19-5-2020",
                    "20-5-2020",
                    "21-5-2020",
                    "22-5-2020",
                    "23-5-2020",
                    "24-5-2020",
                    "25-5-2020",
                    "26-5-2020"
                ];

        let confirmed = [];
        const curveExponential = [4,5,7,10,13,18,25,34,47,64,88,120,165,225,308,422,577,790,1080,1478,2022,2820,4200,5100,8100,10700,14700,16300,20100];
        const curvePotencial = [1,6,3,3,8,16,28,44,64,88,116,148,184,223,267,314,366,391,410,472,569,642,667,845,938,1056,1316,1406,1588,1739,2275,2545,2953,4329,5241,5882,6833,7519,8519,9538,10564,11587,12598,13587,14549,15477,16388,17218,18024,18786,19503,20175];
        
        for (let i = 0; i < resAllData.length; i++) {
            confirmed.push(parseInt(resAllData[i].Confirmed) + parseInt(resAllData[i].ConfirmedFast));
        }
        
        let ctx = document.getElementById("chart4");
        new Chart(ctx,
        {
            "type":"line",
            "data":{
                "labels": days,
                "datasets":[{
                    "label":"Curva Actual en Perú",
                    "data":confirmed,
                    "fill":false,
                    "borderColor":"green",
                    "lineTension":0
                },{
                    "label":"Curva Exponencial (Alta Exposición)",
                    "data":curveExponential,
                    "fill":false,
                    "borderColor":"red",
                    "lineTension":0
                },{
                    "label":"Curva Potencial (Baja Exposición)",
                    "data":curvePotencial,
                    "fill":false,
                    "borderColor":"orange",
                    "lineTension":0
                }
                ]
            },
            "options":{
                hover: {
                    "animationDuration": 0
                },
                animation: {
                    "duration": 1,
                    "onComplete": function() {
                        var chartInstance = this.chart,
                        ctx = chartInstance.ctx;
                
                        ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'bottom';
                        ctx.fillStyle = "#ffffff";
                
                        this.data.datasets.forEach(function(dataset, i) {
                            var meta = chartInstance.controller.getDatasetMeta(i);
                            meta.data.forEach(function(bar, index) {
                                let evaluated = index%2
                                if(evaluated == 1){
                                    var data = dataset.data[index];
                                    ctx.fillText(data, bar._model.x, bar._model.y - 5);
                                }
                            });
                        });
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            fontColor: "white",
                            min: 0, // it is for ignoring negative step.
                            beginAtZero: true,
                            callback: function(value, index, values) {
                                if (Math.floor(value) === value) {
                                    return value;
                                }
                            }
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontColor: "white",
                            beginAtZero: true,
                            autoSkip: true,
                            maxTicksLimit: 30
                        }
                    }]
                },
                legend: {
                    labels: {
                        fontColor: 'white'
                    }
                },
                layout: {
                    padding: {
                        right: 15,
                    }
                }
            }
        });

    } catch (error) {
        alert(error.message)
    }
    
}

calculateCurveProjected();

const loadAllHistoricDataPeru = async () => {

    //PERU
    const BASE_API = './data/dataAll.json'

    const getData = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        return data
        throw new Error('No se encontró ningun resultado');
    } 

    const getDate = (date) => {        
        let current_datetime = new Date(date)
        current_datetime.setDate(current_datetime.getDate() + 1);
        let formatted_date = (current_datetime.getDate()) + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()
        return formatted_date
    }
    
    try {
        const resAllData = await getData(`${BASE_API}`)

        let days = [];
        let confirmed = [];
        let recovered = [];
        let deaths = [];
        let actives = [];
        
        for (let i = 0; i < resAllData.length; i++) {
            days.push(getDate(resAllData[i].Date));
            confirmed.push(parseInt(resAllData[i].Confirmed) + parseInt(resAllData[i].ConfirmedFast));
            recovered.push(parseInt(resAllData[i].Recovered));
            deaths.push(parseInt(resAllData[i].Deaths));
            actives.push(parseInt(resAllData[i].Confirmed) + parseInt(resAllData[i].ConfirmedFast) - parseInt(resAllData[i].Recovered) - parseInt(resAllData[i].Deaths));
        }
        
        let ctx = document.getElementById("chart1");
        new Chart(ctx,
        {
            "type":"line",
            "data":{
                "labels": days,
                "datasets":[{
                    "label":"Cantidad de Confirmados Por Día",
                    "data":confirmed,
                    "fill":false,
                    "borderColor":"red",
                    "lineTension":0
                },{
                    "label":"Cantidad de Recuperados Por Día",
                    "data":recovered,
                    "fill":false,
                    "borderColor":"rgb(99, 203, 137)",
                    "lineTension":0
                },{
                    "label":"Cantidad de Muertos Por Día",
                    "data":deaths,
                    "fill":false,
                    "borderColor":"gray",
                    "lineTension":0
                },]
            },
            "options":{
                hover: {
                    "animationDuration": 0
                },
                animation: {
                    "duration": 1,
                    "onComplete": function() {
                        var chartInstance = this.chart,
                        ctx = chartInstance.ctx;
                
                        ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'bottom';
                        ctx.fillStyle = "#ffffff";
                
                        this.data.datasets.forEach(function(dataset, i) {
                            var meta = chartInstance.controller.getDatasetMeta(i);
                            meta.data.forEach(function(bar, index) {
                                let evaluated = index%2
                                if(evaluated == 1){
                                    var data = dataset.data[index];
                                    ctx.fillText(data, bar._model.x, bar._model.y - 5);
                                }
                            });
                        });
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            fontColor: "white",
                            min: 0, // it is for ignoring negative step.
                            beginAtZero: true,
                            callback: function(value, index, values) {
                                if (Math.floor(value) === value) {
                                    return value;
                                }
                            }
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontColor: "white",
                            beginAtZero: true,
                        }
                    }]
                },
                legend: {
                    labels: {
                        fontColor: 'white'
                    }
                },
                layout: {
                    padding: {
                        right: 15,
                    }
                }
            }
        });

        let ctxActives = document.getElementById("chart2");
        new Chart(ctxActives,
        {
            "type":"line",
            "data":{
                "labels": days,
                "datasets":[{
                    "label":"Cantidad de Activos Por Día",
                    "data":actives,
                    "fill":false,
                    "borderColor":"orange",
                    "lineTension":0
                }]
            },
            "options":{
                hover: {
                    "animationDuration": 0
                },
                animation: {
                    "duration": 1,
                    "onComplete": function() {
                        var chartInstance = this.chart,
                        ctx = chartInstance.ctx;
                
                        ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'bottom';
                        ctx.fillStyle = "#ffffff";
                
                        this.data.datasets.forEach(function(dataset, i) {
                            var meta = chartInstance.controller.getDatasetMeta(i);
                            meta.data.forEach(function(bar, index) {
                                let evaluated = index%2
                                if(evaluated == 1){
                                    var data = dataset.data[index];
                                    ctx.fillText(data, bar._model.x, bar._model.y - 5);
                                }
                            });
                        });
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            fontColor: "white",
                            min: 0, // it is for ignoring negative step.
                            beginAtZero: true,
                            callback: function(value, index, values) {
                                if (Math.floor(value) === value) {
                                    return value;
                                }
                            }
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontColor: "white",
                            beginAtZero: true,
                        }
                    }]
                },
                legend: {
                    labels: {
                        fontColor: 'white'
                    }
                },
                layout: {
                    padding: {
                        right: 15,
                    }
                }
            }
        });

        let ctxDeaths = document.getElementById("chart3");
        new Chart(ctxDeaths,
        {
            "type":"line",
            "data":{
                "labels": days,
                "datasets":[{
                    "label":"Cantidad de Muertes Por Día",
                    "data":deaths,
                    "fill":false,
                    "borderColor":"gray",
                    "lineTension":0
                }]
            },
            "options":{
                hover: {
                    "animationDuration": 0
                },
                animation: {
                    "duration": 1,
                    "onComplete": function() {
                        var chartInstance = this.chart,
                        ctx = chartInstance.ctx;
                
                        ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'bottom';
                        ctx.fillStyle = "#ffffff";
                
                        this.data.datasets.forEach(function(dataset, i) {
                            var meta = chartInstance.controller.getDatasetMeta(i);
                            meta.data.forEach(function(bar, index) {
                                let evaluated = index%2
                                if(evaluated == 1){
                                    var data = dataset.data[index];
                                    ctx.fillText(data, bar._model.x, bar._model.y - 5);
                                }
                            });
                        });
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            fontColor: "white",
                            min: 0, // it is for ignoring negative step.
                            beginAtZero: true,
                            callback: function(value, index, values) {
                                if (Math.floor(value) === value) {
                                    return value;
                                }
                            }
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontColor: "white",
                            beginAtZero: true,
                        }
                    }]
                },
                legend: {
                    labels: {
                        fontColor: 'white'
                    }
                },
                layout: {
                    padding: {
                        right: 15,
                    }
                }
            }
        });

    } catch (error) {
        alert(error.message)
    }
    
}

loadAllHistoricDataPeru();

const loadAllRegionsData = async () => {
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
        
        confirmed = [
            confirmedByAmazonas,
            confirmedByAncash,
            confirmedByApurimac,
            confirmedByArequipa,
            confirmedByAyacucho,
            confirmedByCajamarca,
            confirmedByCallao,
            confirmedByCusco,
            confirmedByHuancavelica,
            confirmedByHuanuco,
            confirmedByIca,
            confirmedByJunin,
            confirmedByLaLibertad,
            confirmedByLambayeque,
            confirmedByLima,
            confirmedByLoreto,
            confirmedByMadreDeDios,
            confirmedByMoquegua,
            confirmedByPasco,
            confirmedByPiura,
            confirmedByPuno,
            confirmedBySanMartin,
            confirmedByTacna,
            confirmedByTumbes,
            confirmedByUcayali
        ]        

        let ctx = document.getElementById("chart5");
        new Chart(ctx,
        {
            "type":"bar",
            "data":{
                "labels":provinces,
                "datasets":[{
                    "label":"Cantidad de Confirmados Por Regiones",
                    "data":confirmed,
                    "fill":false,
                    "backgroundColor":[
                        "rgba(236, 94, 105, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                        "rgba(241, 194, 5, 0.2)",
                        "rgba(99, 203, 137, 0.2)",
                        "rgba(0, 112, 224, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(201, 203, 207, 0.2)",
                        "rgba(236, 94, 105, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                        "rgba(241, 194, 5, 0.2)",
                        "rgba(99, 203, 137, 0.2)",
                        "rgba(0, 112, 224, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(201, 203, 207, 0.2)",
                        "rgba(236, 94, 105, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                        "rgba(241, 194, 5, 0.2)",
                        "rgba(99, 203, 137, 0.2)",
                        "rgba(0, 112, 224, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(201, 203, 207, 0.2)",
                        "rgba(236, 94, 105, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                        "rgba(241, 194, 5, 0.2)",
                        "rgba(99, 203, 137, 0.2)",
                        "rgba(0, 112, 224, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(201, 203, 207, 0.2)"
                    ],
                    "borderColor":[
                        "rgb(236, 94, 105)",
                        "rgb(255, 159, 64)",
                        "rgb(241, 194, 5)",
                        "rgb(99, 203, 137)",
                        "rgb(0, 112, 224)",
                        "rgb(153, 102, 255)",
                        "rgb(201, 203, 207)",
                        "rgb(236, 94, 105)",
                        "rgb(255, 159, 64)",
                        "rgb(241, 194, 5)",
                        "rgb(99, 203, 137)",
                        "rgb(0, 112, 224)",
                        "rgb(153, 102, 255)",
                        "rgb(201, 203, 207)",
                        "rgb(236, 94, 105)",
                        "rgb(255, 159, 64)",
                        "rgb(241, 194, 5)",
                        "rgb(99, 203, 137)",
                        "rgb(0, 112, 224)",
                        "rgb(153, 102, 255)",
                        "rgb(201, 203, 207)",
                        "rgb(236, 94, 105)",
                        "rgb(255, 159, 64)",
                        "rgb(241, 194, 5)",
                        "rgb(99, 203, 137)",
                        "rgb(0, 112, 224)",
                        "rgb(153, 102, 255)",
                        "rgb(201, 203, 207)"
                    ],
                    "borderWidth":1
                }]
            },
            "options":{
                hover: {
                    "animationDuration": 0
                },
                animation: {
                    "duration": 1,
                    "onComplete": function() {
                        var chartInstance = this.chart,
                        ctx = chartInstance.ctx;
                
                        ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'bottom';
                        ctx.fillStyle = "#ffffff";
                
                        this.data.datasets.forEach(function(dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function(bar, index) {
                            var data = dataset.data[index];
                            ctx.fillText(data, bar._model.x, bar._model.y - 5);
                        });
                        });
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            fontColor: "white",
                            min: 0, // it is for ignoring negative step.
                            beginAtZero: true,
                            callback: function(value, index, values) {
                                if (Math.floor(value) === value) {
                                    return value;
                                }
                            }
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontColor: "white",
                            beginAtZero: true,
                        }
                    }]
                },
                legend: {
                    labels: {
                        fontColor: 'white'
                    }
                }
            }
        });

    } catch (error) {
        alert(error.message)
    }
}

loadAllRegionsData();

$(document).ready(function() {
    
    "use strict";

    var nvddata1 = function() {
        var sin = [],
        cos = [];

        for (var i = 0; i < 100; i++) {
            sin.push({x: i, y: Math.sin(i/10)});
            cos.push({x: i, y: .5 * Math.cos(i/10)});
        }

        return [
        {
            values: sin,
            key: 'Sine Wave',
            color: '#EC5E69'
        },
        {
            values: cos,
            key: 'Cosine Wave',
            color: '#0066CC'
        }
        ];
    };
    nv.addGraph(function() {
        var chart = nv.models.lineChart()
        .useInteractiveGuideline(true)
        ;

        chart.xAxis
        .axisLabel('Time (ms)')
        .tickFormat(d3.format(',r'))
        ;

        chart.yAxis
        .axisLabel('Voltage (v)')
        .tickFormat(d3.format('.02f'))
        ;

        d3.select('#nvd1 svg')
        .datum(nvddata1())
        .transition().duration(500)
        .call(chart)
        ;

        nv.utils.windowResize(chart.update);

        return chart;
    });

    var nvddata2 = [
    {
        "key": "Series 1",
        "color": '#0066CC',
        "values": [ [ 1025409600000 , 0] , [ 1028088000000 , -6.3382185140371] , [ 1030766400000 , -5.9507873460847] , [ 1033358400000 , -11.569146943813] , [ 1036040400000 , -5.4767332317425] , [ 1038632400000 , 0.50794682203014] , [ 1041310800000 , -5.5310285460542] , [ 1043989200000 , -5.7838296963382] , [ 1046408400000 , -7.3249341615649] , [ 1049086800000 , -6.7078630712489] , [ 1051675200000 , 0.44227126150934] , [ 1054353600000 , 7.2481659343222] , [ 1056945600000 , 9.2512381306992] , [ 1059624000000 , 11.341210982529] , [ 1062302400000 , 14.734820409020] , [ 1064894400000 , 12.387148007542] , [ 1067576400000 , 18.436471461827] , [ 1070168400000 , 19.830742266977] , [ 1072846800000 , 22.643205829887] , [ 1075525200000 , 26.743156781239] , [ 1078030800000 , 29.597478802228] , [ 1080709200000 , 30.831697585341] , [ 1083297600000 , 28.054068024708] , [ 1085976000000 , 29.294079423832] , [ 1088568000000 , 30.269264061274] , [ 1091246400000 , 24.934526898906] , [ 1093924800000 , 24.265982759406] , [ 1096516800000 , 27.217794897473] , [ 1099195200000 , 30.802601992077] , [ 1101790800000 , 36.331003758254] , [ 1104469200000 , 43.142498700060] , [ 1107147600000 , 40.558263931958] , [ 1109566800000 , 42.543622385800] , [ 1112245200000 , 41.683584710331] , [ 1114833600000 , 36.375367302328] , [ 1117512000000 , 40.719688980730] , [ 1120104000000 , 43.897963036919] , [ 1122782400000 , 49.797033975368] , [ 1125460800000 , 47.085993935989] , [ 1128052800000 , 46.601972859745] , [ 1130734800000 , 41.567784572762] , [ 1133326800000 , 47.296923737245] , [ 1136005200000 , 47.642969612080] , [ 1138683600000 , 50.781515820954] , [ 1141102800000 , 52.600229204305] , [ 1143781200000 , 55.599684490628] , [ 1146369600000 , 57.920388436633] , [ 1149048000000 , 53.503593218971] , [ 1151640000000 , 53.522973979964] , [ 1154318400000 , 49.846822298548] , [ 1156996800000 , 54.721341614650] , [ 1159588800000 , 58.186236223191] , [ 1162270800000 , 63.908065540997] , [ 1164862800000 , 69.767285129367] , [ 1167541200000 , 72.534013373592] , [ 1170219600000 , 77.991819436573] , [ 1172638800000 , 78.143584404990] , [ 1175313600000 , 83.702398665233] , [ 1177905600000 , 91.140859312418] , [ 1180584000000 , 98.590960607028] , [ 1183176000000 , 96.245634754228] , [ 1185854400000 , 92.326364432615] , [ 1188532800000 , 97.068765332230] , [ 1191124800000 , 105.81025556260] , [ 1193803200000 , 114.38348777791] , [ 1196398800000 , 103.59604949810] , [ 1199077200000 , 101.72488429307] , [ 1201755600000 , 89.840147735028] , [ 1204261200000 , 86.963597532664] , [ 1206936000000 , 84.075505208491] , [ 1209528000000 , 93.170105645831] , [ 1212206400000 , 103.62838083121] , [ 1214798400000 , 87.458241365091] , [ 1217476800000 , 85.808374141319] , [ 1220155200000 , 93.158054469193] , [ 1222747200000 , 65.973252382360] , [ 1225425600000 , 44.580686638224] , [ 1228021200000 , 36.418977140128] , [ 1230699600000 , 38.727678144761] , [ 1233378000000 , 36.692674173387] , [ 1235797200000 , 30.033022809480] , [ 1238472000000 , 36.707532162718] , [ 1241064000000 , 52.191457688389] , [ 1243742400000 , 56.357883979735] , [ 1246334400000 , 57.629002180305] , [ 1249012800000 , 66.650985790166] , [ 1251691200000 , 70.839243432186] , [ 1254283200000 , 78.731998491499] , [ 1256961600000 , 72.375528540349] , [ 1259557200000 , 81.738387881630] , [ 1262235600000 , 87.539792394232] , [ 1264914000000 , 84.320762662273] , [ 1267333200000 , 90.621278391889] , [ 1270008000000 , 102.47144881651] , [ 1272600000000 , 102.79320353429] , [ 1275278400000 , 90.529736050479] , [ 1277870400000 , 76.580859994531] , [ 1280548800000 , 86.548979376972] , [ 1283227200000 , 81.879653334089] , [ 1285819200000 , 101.72550015956] , [ 1288497600000 , 107.97964852260] , [ 1291093200000 , 106.16240630785] , [ 1293771600000 , 114.84268599533] , [ 1296450000000 , 121.60793322282] , [ 1298869200000 , 133.41437346605] , [ 1301544000000 , 125.46646042904] , [ 1304136000000 , 129.76784954301] , [ 1306814400000 , 128.15798861044] , [ 1309406400000 , 121.92388706072] , [ 1312084800000 , 116.70036100870] , [ 1314763200000 , 88.367701837033] , [ 1317355200000 , 59.159665765725] , [ 1320033600000 , 79.793568139753] , [ 1322629200000 , 75.903834028417] , [ 1325307600000 , 72.704218209157] , [ 1327986000000 , 84.936990804097] , [ 1330491600000 , 93.388148670744]]
    },
    {
        "key": "Series 2",
        "color": '#ff9800',
        "values": [ [ 1025409600000 , 0] , [ 1028088000000 , 0] , [ 1030766400000 , 0] , [ 1033358400000 , 0] , [ 1036040400000 , 0] , [ 1038632400000 , 0] , [ 1041310800000 , 0] , [ 1043989200000 , 0] , [ 1046408400000 , 0] , [ 1049086800000 , 0] , [ 1051675200000 , 0] , [ 1054353600000 , 0] , [ 1056945600000 , 0] , [ 1059624000000 , 0] , [ 1062302400000 , 0] , [ 1064894400000 , 0] , [ 1067576400000 , 0] , [ 1070168400000 , 0] , [ 1072846800000 , 0] , [ 1075525200000 , -0.049184266875945] , [ 1078030800000 , -0.10757569491991] , [ 1080709200000 , -0.075601531307242] , [ 1083297600000 , -0.061245277988149] , [ 1085976000000 , -0.068227316401169] , [ 1088568000000 , -0.11242758058502] , [ 1091246400000 , -0.074848439408270] , [ 1093924800000 , -0.11465623676497] , [ 1096516800000 , -0.24370633342416] , [ 1099195200000 , -0.21523268478893] , [ 1101790800000 , -0.37859370911822] , [ 1104469200000 , -0.41932884345151] , [ 1107147600000 , -0.45393735984802] , [ 1109566800000 , -0.50868179522598] , [ 1112245200000 , -0.48164396881207] , [ 1114833600000 , -0.41605962887194] , [ 1117512000000 , -0.48490348490240] , [ 1120104000000 , -0.55071036101311] , [ 1122782400000 , -0.67489170505394] , [ 1125460800000 , -0.74978070939342] , [ 1128052800000 , -0.86395050745343] , [ 1130734800000 , -0.78524898506764] , [ 1133326800000 , -0.99800440950854] , [ 1136005200000 , -1.1177951153878] , [ 1138683600000 , -1.4119975432964] , [ 1141102800000 , -1.2409959736465] , [ 1143781200000 , -1.3088936375431] , [ 1146369600000 , -1.5495785469683] , [ 1149048000000 , -1.1563414981293] , [ 1151640000000 , -0.87192471725994] , [ 1154318400000 , -0.84073995183442] , [ 1156996800000 , -0.88761892867370] , [ 1159588800000 , -0.81748513917485] , [ 1162270800000 , -1.2874081041274] , [ 1164862800000 , -1.9234702981339] , [ 1167541200000 , -1.8377768147648] , [ 1170219600000 , -2.7107654031830] , [ 1172638800000 , -2.6493268125418] , [ 1175313600000 , -3.0814553134551] , [ 1177905600000 , -3.8509837783574] , [ 1180584000000 , -5.2919167850718] , [ 1183176000000 , -5.2297750650773] , [ 1185854400000 , -3.9335668501451] , [ 1188532800000 , -2.3695525190114] , [ 1191124800000 , -2.3084243151854] , [ 1193803200000 , -3.0753680726738] , [ 1196398800000 , -2.2346609938962] , [ 1199077200000 , -3.0598810361615] , [ 1201755600000 , -1.8410154270386] , [ 1204261200000 , -1.6479442038620] , [ 1206936000000 , -1.9293858622780] , [ 1209528000000 , -3.0769590460943] , [ 1212206400000 , -4.2423933501421] , [ 1214798400000 , -2.6951491617768] , [ 1217476800000 , -2.8981825939957] , [ 1220155200000 , -2.9662727940324] , [ 1222747200000 , 0.21556750497498] , [ 1225425600000 , 2.6784995167088] , [ 1228021200000 , 4.1296711248958] , [ 1230699600000 , 3.7311068218734] , [ 1233378000000 , 4.7695330866954] , [ 1235797200000 , 5.1919133040990] , [ 1238472000000 , 4.1025856045660] , [ 1241064000000 , 2.8498939666225] , [ 1243742400000 , 2.8106017222851] , [ 1246334400000 , 2.8456526669963] , [ 1249012800000 , 0.65563070754298] , [ 1251691200000 , -0.30022343874633] , [ 1254283200000 , -1.1600358228964] , [ 1256961600000 , -0.26674408835052] , [ 1259557200000 , -1.4693389757812] , [ 1262235600000 , -2.7855421590594] , [ 1264914000000 , -1.2668244065703] , [ 1267333200000 , -2.5537804115548] , [ 1270008000000 , -4.9144552474502] , [ 1272600000000 , -6.0484408234831] , [ 1275278400000 , -3.3834349033750] , [ 1277870400000 , -0.46752826932523] , [ 1280548800000 , -1.8030186027963] , [ 1283227200000 , -0.99623230097881] , [ 1285819200000 , -3.3475370235594] , [ 1288497600000 , -3.8187026520342] , [ 1291093200000 , -4.2354146250353] , [ 1293771600000 , -5.6795404292885] , [ 1296450000000 , -6.2928665328172] , [ 1298869200000 , -6.8549277434419] , [ 1301544000000 , -6.9925308360918] , [ 1304136000000 , -8.3216548655839] , [ 1306814400000 , -7.7682867271435] , [ 1309406400000 , -6.9244213301058] , [ 1312084800000 , -5.7407624451404] , [ 1314763200000 , -2.1813149077927] , [ 1317355200000 , 2.9407596325999] , [ 1320033600000 , -1.1130607112134] , [ 1322629200000 , -2.0274822307752] , [ 1325307600000 , -1.8372559072154] , [ 1327986000000 , -4.0732815531148] , [ 1330491600000 , -6.4417038470291]]
    },
    {
        "key": "Series 3",
        "color": '#33AC71',
        "values": [ [ 1025409600000 , 0] , [ 1028088000000 , -6.3382185140371] , [ 1030766400000 , -5.9507873460847] , [ 1033358400000 , -11.569146943813] , [ 1036040400000 , -5.4767332317425] , [ 1038632400000 , 0.50794682203014] , [ 1041310800000 , -5.5310285460542] , [ 1043989200000 , -5.7838296963382] , [ 1046408400000 , -7.3249341615649] , [ 1049086800000 , -6.7078630712489] , [ 1051675200000 , 0.44227126150934] , [ 1054353600000 , 7.2481659343222] , [ 1056945600000 , 9.2512381306992] , [ 1059624000000 , 11.341210982529] , [ 1062302400000 , 14.734820409020] , [ 1064894400000 , 12.387148007542] , [ 1067576400000 , 18.436471461827] , [ 1070168400000 , 19.830742266977] , [ 1072846800000 , 22.643205829887] , [ 1075525200000 , 26.693972514363] , [ 1078030800000 , 29.489903107308] , [ 1080709200000 , 30.756096054034] , [ 1083297600000 , 27.992822746720] , [ 1085976000000 , 29.225852107431] , [ 1088568000000 , 30.156836480689] , [ 1091246400000 , 24.859678459498] , [ 1093924800000 , 24.151326522641] , [ 1096516800000 , 26.974088564049] , [ 1099195200000 , 30.587369307288] , [ 1101790800000 , 35.952410049136] , [ 1104469200000 , 42.723169856608] , [ 1107147600000 , 40.104326572110] , [ 1109566800000 , 42.034940590574] , [ 1112245200000 , 41.201940741519] , [ 1114833600000 , 35.959307673456] , [ 1117512000000 , 40.234785495828] , [ 1120104000000 , 43.347252675906] , [ 1122782400000 , 49.122142270314] , [ 1125460800000 , 46.336213226596] , [ 1128052800000 , 45.738022352292] , [ 1130734800000 , 40.782535587694] , [ 1133326800000 , 46.298919327736] , [ 1136005200000 , 46.525174496692] , [ 1138683600000 , 49.369518277658] , [ 1141102800000 , 51.359233230659] , [ 1143781200000 , 54.290790853085] , [ 1146369600000 , 56.370809889665] , [ 1149048000000 , 52.347251720842] , [ 1151640000000 , 52.651049262704] , [ 1154318400000 , 49.006082346714] , [ 1156996800000 , 53.833722685976] , [ 1159588800000 , 57.368751084016] , [ 1162270800000 , 62.620657436870] , [ 1164862800000 , 67.843814831233] , [ 1167541200000 , 70.696236558827] , [ 1170219600000 , 75.281054033390] , [ 1172638800000 , 75.494257592448] , [ 1175313600000 , 80.620943351778] , [ 1177905600000 , 87.289875534061] , [ 1180584000000 , 93.299043821956] , [ 1183176000000 , 91.015859689151] , [ 1185854400000 , 88.392797582470] , [ 1188532800000 , 94.699212813219] , [ 1191124800000 , 103.50183124741] , [ 1193803200000 , 111.30811970524] , [ 1196398800000 , 101.36138850420] , [ 1199077200000 , 98.665003256909] , [ 1201755600000 , 87.999132307989] , [ 1204261200000 , 85.315653328802] , [ 1206936000000 , 82.146119346213] , [ 1209528000000 , 90.093146599737] , [ 1212206400000 , 99.385987481068] , [ 1214798400000 , 84.763092203314] , [ 1217476800000 , 82.910191547323] , [ 1220155200000 , 90.191781675161] , [ 1222747200000 , 66.188819887335] , [ 1225425600000 , 47.259186154933] , [ 1228021200000 , 40.548648265024] , [ 1230699600000 , 42.458784966634] , [ 1233378000000 , 41.462207260082] , [ 1235797200000 , 35.224936113579] , [ 1238472000000 , 40.810117767284] , [ 1241064000000 , 55.041351655012] , [ 1243742400000 , 59.168485702020] , [ 1246334400000 , 60.474654847301] , [ 1249012800000 , 67.306616497709] , [ 1251691200000 , 70.539019993440] , [ 1254283200000 , 77.571962668603] , [ 1256961600000 , 72.108784451998] , [ 1259557200000 , 80.269048905849] , [ 1262235600000 , 84.754250235173] , [ 1264914000000 , 83.053938255703] , [ 1267333200000 , 88.067497980334] , [ 1270008000000 , 97.556993569060] , [ 1272600000000 , 96.744762710807] , [ 1275278400000 , 87.146301147104] , [ 1277870400000 , 76.113331725206] , [ 1280548800000 , 84.745960774176] , [ 1283227200000 , 80.883421033110] , [ 1285819200000 , 98.377963136001] , [ 1288497600000 , 104.16094587057] , [ 1291093200000 , 101.92699168281] , [ 1293771600000 , 109.16314556604] , [ 1296450000000 , 115.31506669000] , [ 1298869200000 , 126.55944572261] , [ 1301544000000 , 118.47392959295] , [ 1304136000000 , 121.44619467743] , [ 1306814400000 , 120.38970188330] , [ 1309406400000 , 114.99946573061] , [ 1312084800000 , 110.95959856356] , [ 1314763200000 , 86.186386929240] , [ 1317355200000 , 62.100425398325] , [ 1320033600000 , 78.680507428540] , [ 1322629200000 , 73.876351797642] , [ 1325307600000 , 70.866962301942] , [ 1327986000000 , 80.863709250982] , [ 1330491600000 , 86.946444823715]]
    },
    {
        "key": "Series 4",
        "color": '#EC5E69',
        "values": [ [ 1025409600000 , -7.0674410638835] , [ 1028088000000 , -14.663359292964] , [ 1030766400000 , -14.104393060540] , [ 1033358400000 , -23.114477037218] , [ 1036040400000 , -16.774256687841] , [ 1038632400000 , -11.902028464000] , [ 1041310800000 , -16.883038668422] , [ 1043989200000 , -19.104223676831] , [ 1046408400000 , -20.420523282736] , [ 1049086800000 , -19.660555051587] , [ 1051675200000 , -13.106911231646] , [ 1054353600000 , -8.2448460302143] , [ 1056945600000 , -7.0313058730976] , [ 1059624000000 , -5.1485118700389] , [ 1062302400000 , -3.0011028761469] , [ 1064894400000 , -4.1367265281467] , [ 1067576400000 , 1.5425209565025] , [ 1070168400000 , 2.7673533607299] , [ 1072846800000 , 7.7077114755360] , [ 1075525200000 , 9.7565015112434] , [ 1078030800000 , 11.396888609473] , [ 1080709200000 , 10.013964745578] , [ 1083297600000 , 8.0558890950562] , [ 1085976000000 , 9.6081966657458] , [ 1088568000000 , 11.918590426432] , [ 1091246400000 , 7.9945345523982] , [ 1093924800000 , 8.3201276776796] , [ 1096516800000 , 9.8283954846342] , [ 1099195200000 , 11.527125859650] , [ 1101790800000 , 16.413657596527] , [ 1104469200000 , 20.393798297928] , [ 1107147600000 , 17.456308413907] , [ 1109566800000 , 20.087778400999] , [ 1112245200000 , 17.988336990817] , [ 1114833600000 , 15.378490151331] , [ 1117512000000 , 19.474322935730] , [ 1120104000000 , 20.013851070354] , [ 1122782400000 , 24.749943726975] , [ 1125460800000 , 23.558710274826] , [ 1128052800000 , 24.558915040889] , [ 1130734800000 , 22.355860488034] , [ 1133326800000 , 27.138026265756] , [ 1136005200000 , 27.202220808591] , [ 1138683600000 , 31.219437344964] , [ 1141102800000 , 31.392355525125] , [ 1143781200000 , 33.373099232542] , [ 1146369600000 , 35.095277582309] , [ 1149048000000 , 30.923356507615] , [ 1151640000000 , 31.083717332561] , [ 1154318400000 , 31.290690671561] , [ 1156996800000 , 34.247769216679] , [ 1159588800000 , 37.411073177620] , [ 1162270800000 , 42.079177096411] , [ 1164862800000 , 44.978191659648] , [ 1167541200000 , 46.713271025310] , [ 1170219600000 , 49.203892437699] , [ 1172638800000 , 46.684723471826] , [ 1175313600000 , 48.385458973500] , [ 1177905600000 , 54.660197840305] , [ 1180584000000 , 60.311838415602] , [ 1183176000000 , 57.583282204682] , [ 1185854400000 , 52.425398898751] , [ 1188532800000 , 54.663538086985] , [ 1191124800000 , 60.181844325224] , [ 1193803200000 , 62.877219773621] , [ 1196398800000 , 55.760611512951] , [ 1199077200000 , 54.735280367784] , [ 1201755600000 , 45.495912959474] , [ 1204261200000 , 40.934919015876] , [ 1206936000000 , 40.303777633187] , [ 1209528000000 , 47.403740368773] , [ 1212206400000 , 49.951960898839] , [ 1214798400000 , 37.534590035098] , [ 1217476800000 , 36.405758293321] , [ 1220155200000 , 38.545373001858] , [ 1222747200000 , 26.106358664455] , [ 1225425600000 , 4.2658006768744] , [ 1228021200000 , -3.5517839867557] , [ 1230699600000 , -2.0878920761513] , [ 1233378000000 , -10.408879093829] , [ 1235797200000 , -19.924242196038] , [ 1238472000000 , -12.906491912782] , [ 1241064000000 , -3.9774866468346] , [ 1243742400000 , 1.0319171601402] , [ 1246334400000 , 1.3109350357718] , [ 1249012800000 , 9.1668309061935] , [ 1251691200000 , 13.121178985954] , [ 1254283200000 , 17.578680237511] , [ 1256961600000 , 14.971294355085] , [ 1259557200000 , 21.551327027338] , [ 1262235600000 , 24.592328423819] , [ 1264914000000 , 20.158087829555] , [ 1267333200000 , 24.135661929185] , [ 1270008000000 , 31.815205405903] , [ 1272600000000 , 34.389524768466] , [ 1275278400000 , 23.785555857522] , [ 1277870400000 , 17.082756649072] , [ 1280548800000 , 25.248007727100] , [ 1283227200000 , 19.415179069165] , [ 1285819200000 , 30.413636349327] , [ 1288497600000 , 35.357952964550] , [ 1291093200000 , 35.886413535859] , [ 1293771600000 , 45.003601951959] , [ 1296450000000 , 48.274893564020] , [ 1298869200000 , 53.562864914648] , [ 1301544000000 , 54.108274337412] , [ 1304136000000 , 58.618190111927] , [ 1306814400000 , 56.806793965598] , [ 1309406400000 , 54.135477252994] , [ 1312084800000 , 50.735258942442] , [ 1314763200000 , 42.208170945813] , [ 1317355200000 , 31.617916826724] , [ 1320033600000 , 46.492005006737] , [ 1322629200000 , 46.203116922145] , [ 1325307600000 , 47.541427643137] , [ 1327986000000 , 54.518998440993] , [ 1330491600000 , 61.099720234693]]
    }
    ];
    nv.addGraph(function() {
        var chart = nv.models.cumulativeLineChart()
        .x(function(d) { return d[0] })
        //adjusting, 100% is 1.00, not 100 as it is in the data
        .y(function(d) { return d[1] / 100 })
        .color(d3.scale.category10().range())
        .useInteractiveGuideline(true)
        ;

        chart.xAxis
        .tickFormat(function(d) {
            return d3.time.format('%x')(new Date(d))
        });

        chart.yAxis.tickFormat(d3.format(',.1%'));

        d3.select('#nvd2 svg')
        .datum(nvddata2)
        .transition().duration(500)
        .call(chart)
        ;

        nv.utils.windowResize(chart.update);

        return chart;
    });

    /* Inspired by Lee Byron's test data generator. */
    function stream_layers(n, m, o) {
        if (arguments.length < 3) o = 0;
        function bump(a) {
            var x = 1 / (.1 + Math.random()),
                y = 2 * Math.random() - .5,
                z = 10 / (.1 + Math.random());
            for (var i = 0; i < m; i++) {
            var w = (i / m - y) * z;
            a[i] += x * Math.exp(-w * w);
            }
        }
        return d3.range(n).map(function() {
            var a = [], i;
            for (i = 0; i < m; i++) a[i] = o + o * Math.random();
            for (i = 0; i < 5; i++) bump(a);
            return a.map(stream_index);
        });
    };

    /* Another layer generator using gamma distributions. */
    function stream_waves(n, m) {
        return d3.range(n).map(function(i) {
            return d3.range(m).map(function(j) {
                var x = 20 * j / m - i / 3;
                return 2 * x * Math.exp(-.5 * x);
            }).map(stream_index);
        });
    };

    function stream_index(d, i) {
        return {x: i, y: Math.max(0, d)};
    };
    
    var nvddata3 = function() {
        return stream_layers(3,10+Math.random()*100,.1).map(function(data, i) {
            return {
                key: 'Stream' + i,
                values: data
            };
        });
    };
    nv.addGraph(function() {
    var chart = nv.models.multiBarChart()
    .color(['#0066CC','#5893DF','#ff9800'])

    chart.xAxis
        .tickFormat(d3.format(',f'));

    chart.yAxis
        .tickFormat(d3.format(',.1f'));

    d3.select('#nvd3 svg')
        .datum(nvddata3())
        .transition().duration(500)
        .call(chart)
        ;

    nv.utils.windowResize(chart.update);

    return chart;
    });

    var nvddata4 = [ 
    { 
        "key" : "North America" ,
        "color": '#0066CC',
        "values" : [ [ 1025409600000 , 23.041422681023] , [ 1028088000000 , 19.854291255832] , [ 1030766400000 , 21.02286281168] , [ 1033358400000 , 22.093608385173] , [ 1036040400000 , 25.108079299458] , [ 1038632400000 , 26.982389242348] , [ 1041310800000 , 19.828984957662] , [ 1043989200000 , 19.914055036294] , [ 1046408400000 , 19.436150539916] , [ 1049086800000 , 21.558650338602] , [ 1051675200000 , 24.395594061773] , [ 1054353600000 , 24.747089309384] , [ 1056945600000 , 23.491755498807] , [ 1059624000000 , 23.376634878164] , [ 1062302400000 , 24.581223154533] , [ 1064894400000 , 24.922476843538] , [ 1067576400000 , 27.357712939042] , [ 1070168400000 , 26.503020572593] , [ 1072846800000 , 26.658901244878] , [ 1075525200000 , 27.065704156445] , [ 1078030800000 , 28.735320452588] , [ 1080709200000 , 31.572277846319] , [ 1083297600000 , 30.932161503638] , [ 1085976000000 , 31.627029785554] , [ 1088568000000 , 28.728743674232] , [ 1091246400000 , 26.858365172675] , [ 1093924800000 , 27.279922830032] , [ 1096516800000 , 34.408301211324] , [ 1099195200000 , 34.794362930439] , [ 1101790800000 , 35.609978198951] , [ 1104469200000 , 33.574394968037] , [ 1107147600000 , 31.979405070598] , [ 1109566800000 , 31.19009040297] , [ 1112245200000 , 31.083933968994] , [ 1114833600000 , 29.668971113185] , [ 1117512000000 , 31.490638014379] , [ 1120104000000 , 31.818617451128] , [ 1122782400000 , 32.960314008183] , [ 1125460800000 , 31.313383196209] , [ 1128052800000 , 33.125486081852] , [ 1130734800000 , 32.791805509149] , [ 1133326800000 , 33.506038030366] , [ 1136005200000 , 26.96501697216] , [ 1138683600000 , 27.38478809681] , [ 1141102800000 , 27.371377218209] , [ 1143781200000 , 26.309915460827] , [ 1146369600000 , 26.425199957518] , [ 1149048000000 , 26.823411519396] , [ 1151640000000 , 23.850443591587] , [ 1154318400000 , 23.158355444054] , [ 1156996800000 , 22.998689393695] , [ 1159588800000 , 27.9771285113] , [ 1162270800000 , 29.073672469719] , [ 1164862800000 , 28.587640408904] , [ 1167541200000 , 22.788453687637] , [ 1170219600000 , 22.429199073597] , [ 1172638800000 , 22.324103271052] , [ 1175313600000 , 17.558388444187] , [ 1177905600000 , 16.769518096208] , [ 1180584000000 , 16.214738201301] , [ 1183176000000 , 18.729632971229] , [ 1185854400000 , 18.814523318847] , [ 1188532800000 , 19.789986451358] , [ 1191124800000 , 17.070049054933] , [ 1193803200000 , 16.121349575716] , [ 1196398800000 , 15.141659430091] , [ 1199077200000 , 17.175388025297] , [ 1201755600000 , 17.286592443522] , [ 1204261200000 , 16.323141626568] , [ 1206936000000 , 19.231263773952] , [ 1209528000000 , 18.446256391095] , [ 1212206400000 , 17.822632399764] , [ 1214798400000 , 15.53936647598] , [ 1217476800000 , 15.255131790217] , [ 1220155200000 , 15.660963922592] , [ 1222747200000 , 13.254482273698] , [ 1225425600000 , 11.920796202299] , [ 1228021200000 , 12.122809090924] , [ 1230699600000 , 15.691026271393] , [ 1233378000000 , 14.720881635107] , [ 1235797200000 , 15.387939360044] , [ 1238472000000 , 13.765436672228] , [ 1241064000000 , 14.631445864799] , [ 1243742400000 , 14.292446536221] , [ 1246334400000 , 16.170071367017] , [ 1249012800000 , 15.948135554337] , [ 1251691200000 , 16.612872685134] , [ 1254283200000 , 18.778338719091] , [ 1256961600000 , 16.756026065421] , [ 1259557200000 , 19.385804443146] , [ 1262235600000 , 22.950590240168] , [ 1264914000000 , 23.61159018141] , [ 1267333200000 , 25.708586989581] , [ 1270008000000 , 26.883915999885] , [ 1272600000000 , 25.893486687065] , [ 1275278400000 , 24.678914263176] , [ 1277870400000 , 25.937275793024] , [ 1280548800000 , 29.461381693838] , [ 1283227200000 , 27.357322961861] , [ 1285819200000 , 29.057235285673] , [ 1288497600000 , 28.549434189386] , [ 1291093200000 , 28.506352379724] , [ 1293771600000 , 29.449241421598] , [ 1296450000000 , 25.796838168807] , [ 1298869200000 , 28.740145449188] , [ 1301544000000 , 22.091744141872] , [ 1304136000000 , 25.07966254541] , [ 1306814400000 , 23.674906973064] , [ 1309406400000 , 23.418002742929] , [ 1312084800000 , 23.24364413887] , [ 1314763200000 , 31.591854066817] , [ 1317355200000 , 31.497112374114] , [ 1320033600000 , 26.67238082043] , [ 1322629200000 , 27.297080015495] , [ 1325307600000 , 20.174315530051] , [ 1327986000000 , 19.631084213898] , [ 1330491600000 , 20.366462219461] , [ 1333166400000 , 19.284784434185] , [ 1335758400000 , 19.157810257624]]
    }, 
    { 
        "key" : "Africa" ,
        "color": '#5893DF', 
        "values" : [ [ 1025409600000 , 7.9356392949025] , [ 1028088000000 , 7.4514668527298] , [ 1030766400000 , 7.9085410566608] , [ 1033358400000 , 5.8996782364764] , [ 1036040400000 , 6.0591869346923] , [ 1038632400000 , 5.9667815800451] , [ 1041310800000 , 8.65528925664] , [ 1043989200000 , 8.7690763386254] , [ 1046408400000 , 8.6386160387453] , [ 1049086800000 , 5.9895557449743] , [ 1051675200000 , 6.3840324338159] , [ 1054353600000 , 6.5196511461441] , [ 1056945600000 , 7.0738618553114] , [ 1059624000000 , 6.5745957367133] , [ 1062302400000 , 6.4658359184444] , [ 1064894400000 , 2.7622758754954] , [ 1067576400000 , 2.9794782986241] , [ 1070168400000 , 2.8735432712019] , [ 1072846800000 , 1.6344817513645] , [ 1075525200000 , 1.5869248754883] , [ 1078030800000 , 1.7172279157246] , [ 1080709200000 , 1.9649927409867] , [ 1083297600000 , 2.0261695079196] , [ 1085976000000 , 2.0541261923929] , [ 1088568000000 , 3.9466318927569] , [ 1091246400000 , 3.7826770946089] , [ 1093924800000 , 3.9543021004028] , [ 1096516800000 , 3.8309891064711] , [ 1099195200000 , 3.6340958946166] , [ 1101790800000 , 3.5289755762525] , [ 1104469200000 , 5.702378559857] , [ 1107147600000 , 5.6539569019223] , [ 1109566800000 , 5.5449506370392] , [ 1112245200000 , 4.7579993280677] , [ 1114833600000 , 4.4816139372906] , [ 1117512000000 , 4.5965558568606] , [ 1120104000000 , 4.3747066116976] , [ 1122782400000 , 4.4588822917087] , [ 1125460800000 , 4.4460351848286] , [ 1128052800000 , 3.7989113035136] , [ 1130734800000 , 3.7743883140088] , [ 1133326800000 , 3.7727852823828] , [ 1136005200000 , 7.2968111448895] , [ 1138683600000 , 7.2800122043237] , [ 1141102800000 , 7.1187787503354] , [ 1143781200000 , 8.351887016482] , [ 1146369600000 , 8.4156698763993] , [ 1149048000000 , 8.1673298604231] , [ 1151640000000 , 5.5132447126042] , [ 1154318400000 , 6.1152537710599] , [ 1156996800000 , 6.076765091942] , [ 1159588800000 , 4.6304473798646] , [ 1162270800000 , 4.6301068469402] , [ 1164862800000 , 4.3466656309389] , [ 1167541200000 , 6.830104897003] , [ 1170219600000 , 7.241633040029] , [ 1172638800000 , 7.1432372054153] , [ 1175313600000 , 10.608942063374] , [ 1177905600000 , 10.914964549494] , [ 1180584000000 , 10.933223880565] , [ 1183176000000 , 8.3457524851265] , [ 1185854400000 , 8.1078413081882] , [ 1188532800000 , 8.2697185922474] , [ 1191124800000 , 8.4742436475968] , [ 1193803200000 , 8.4994601179319] , [ 1196398800000 , 8.7387319683243] , [ 1199077200000 , 6.8829183612895] , [ 1201755600000 , 6.984133637885] , [ 1204261200000 , 7.0860136043287] , [ 1206936000000 , 4.3961787956053] , [ 1209528000000 , 3.8699674365231] , [ 1212206400000 , 3.6928925238305] , [ 1214798400000 , 6.7571718894253] , [ 1217476800000 , 6.4367313362344] , [ 1220155200000 , 6.4048441521454] , [ 1222747200000 , 5.4643833239669] , [ 1225425600000 , 5.3150786833374] , [ 1228021200000 , 5.3011272612576] , [ 1230699600000 , 4.1203601430809] , [ 1233378000000 , 4.0881783200525] , [ 1235797200000 , 4.1928665957189] , [ 1238472000000 , 7.0249415663205] , [ 1241064000000 , 7.006530880769] , [ 1243742400000 , 6.994835633224] , [ 1246334400000 , 6.1220222336254] , [ 1249012800000 , 6.1177436137653] , [ 1251691200000 , 6.1413396231981] , [ 1254283200000 , 4.8046006145874] , [ 1256961600000 , 4.6647600660544] , [ 1259557200000 , 4.544865006255] , [ 1262235600000 , 6.0488249316539] , [ 1264914000000 , 6.3188669540206] , [ 1267333200000 , 6.5873958262306] , [ 1270008000000 , 6.2281189839578] , [ 1272600000000 , 5.8948915746059] , [ 1275278400000 , 5.5967320482214] , [ 1277870400000 , 0.99784432084837] , [ 1280548800000 , 1.0950794175359] , [ 1283227200000 , 0.94479734407491] , [ 1285819200000 , 1.222093988688] , [ 1288497600000 , 1.335093106856] , [ 1291093200000 , 1.3302565104985] , [ 1293771600000 , 1.340824670897] , [ 1296450000000 , 0] , [ 1298869200000 , 0] , [ 1301544000000 , 0] , [ 1304136000000 , 0] , [ 1306814400000 , 0] , [ 1309406400000 , 0] , [ 1312084800000 , 0] , [ 1314763200000 , 0] , [ 1317355200000 , 4.4583692315] , [ 1320033600000 , 3.6493043348059] , [ 1322629200000 , 3.8610064091761] , [ 1325307600000 , 5.5144800685202] , [ 1327986000000 , 5.1750695220791] , [ 1330491600000 , 5.6710066952691] , [ 1333166400000 , 5.5611890039181] , [ 1335758400000 , 5.5979368839939]]
    }, 
    { 
        "key" : "South America" , 
        "color": '#ff9800',
        "values" : [ [ 1025409600000 , 7.9149900245423] , [ 1028088000000 , 7.0899888751059] , [ 1030766400000 , 7.5996132380614] , [ 1033358400000 , 8.2741174301034] , [ 1036040400000 , 9.3564460833513] , [ 1038632400000 , 9.7066786059904] , [ 1041310800000 , 10.213363052343] , [ 1043989200000 , 10.285809585273] , [ 1046408400000 , 10.222053149228] , [ 1049086800000 , 8.6188592137975] , [ 1051675200000 , 9.3335447543566] , [ 1054353600000 , 8.9312402186628] , [ 1056945600000 , 8.1895089343658] , [ 1059624000000 , 8.260622135079] , [ 1062302400000 , 7.7700786851364] , [ 1064894400000 , 7.9907428771318] , [ 1067576400000 , 8.7769091865606] , [ 1070168400000 , 8.4855077060661] , [ 1072846800000 , 9.6277203033655] , [ 1075525200000 , 9.9685913452624] , [ 1078030800000 , 10.615085181759] , [ 1080709200000 , 9.2902488079646] , [ 1083297600000 , 8.8610439830061] , [ 1085976000000 , 9.1075344931229] , [ 1088568000000 , 9.9156737639203] , [ 1091246400000 , 9.7826003238782] , [ 1093924800000 , 10.55403610555] , [ 1096516800000 , 10.926900264097] , [ 1099195200000 , 10.903144818736] , [ 1101790800000 , 10.862890389067] , [ 1104469200000 , 10.64604998964] , [ 1107147600000 , 10.042790814087] , [ 1109566800000 , 9.7173391591038] , [ 1112245200000 , 9.6122415755443] , [ 1114833600000 , 9.4337921146562] , [ 1117512000000 , 9.814827171183] , [ 1120104000000 , 12.059260396788] , [ 1122782400000 , 12.139649903873] , [ 1125460800000 , 12.281290663822] , [ 1128052800000 , 8.8037085409056] , [ 1130734800000 , 8.6300618239176] , [ 1133326800000 , 9.1225708491432] , [ 1136005200000 , 12.988124170836] , [ 1138683600000 , 13.356778764353] , [ 1141102800000 , 13.611196863271] , [ 1143781200000 , 6.8959030061189] , [ 1146369600000 , 6.9939633271353] , [ 1149048000000 , 6.7241510257676] , [ 1151640000000 , 5.5611293669517] , [ 1154318400000 , 5.6086488714041] , [ 1156996800000 , 5.4962849907033] , [ 1159588800000 , 6.9193153169278] , [ 1162270800000 , 7.0016334389778] , [ 1164862800000 , 6.7865422443273] , [ 1167541200000 , 9.0006454225383] , [ 1170219600000 , 9.2233916171431] , [ 1172638800000 , 8.8929316009479] , [ 1175313600000 , 10.345937520404] , [ 1177905600000 , 10.075914677026] , [ 1180584000000 , 10.089006188111] , [ 1183176000000 , 10.598330295008] , [ 1185854400000 , 9.9689546533009] , [ 1188532800000 , 9.7740580198146] , [ 1191124800000 , 10.558483060626] , [ 1193803200000 , 9.9314651823603] , [ 1196398800000 , 9.3997715873769] , [ 1199077200000 , 8.4086493387262] , [ 1201755600000 , 8.9698309085926] , [ 1204261200000 , 8.2778357995396] , [ 1206936000000 , 8.8585045600123] , [ 1209528000000 , 8.7013756413322] , [ 1212206400000 , 7.7933605469443] , [ 1214798400000 , 7.0236183483064] , [ 1217476800000 , 6.9873088186829] , [ 1220155200000 , 6.8031713070097] , [ 1222747200000 , 6.6869531315723] , [ 1225425600000 , 6.138256993963] , [ 1228021200000 , 5.6434994016354] , [ 1230699600000 , 5.495220262512] , [ 1233378000000 , 4.6885326869846] , [ 1235797200000 , 4.4524349883438] , [ 1238472000000 , 5.6766520778185] , [ 1241064000000 , 5.7675774480752] , [ 1243742400000 , 5.7882863168337] , [ 1246334400000 , 7.2666010034924] , [ 1249012800000 , 7.5191821322261] , [ 1251691200000 , 7.849651451445] , [ 1254283200000 , 10.383992037985] , [ 1256961600000 , 9.0653691861818] , [ 1259557200000 , 9.6705248324159] , [ 1262235600000 , 10.856380561349] , [ 1264914000000 , 11.27452370892] , [ 1267333200000 , 11.754156529088] , [ 1270008000000 , 8.2870811422455] , [ 1272600000000 , 8.0210264360699] , [ 1275278400000 , 7.5375074474865] , [ 1277870400000 , 8.3419527338039] , [ 1280548800000 , 9.4197471818443] , [ 1283227200000 , 8.7321733185797] , [ 1285819200000 , 9.6627062648126] , [ 1288497600000 , 10.187962234548] , [ 1291093200000 , 9.8144201733476] , [ 1293771600000 , 10.275723361712] , [ 1296450000000 , 16.796066079353] , [ 1298869200000 , 17.543254984075] , [ 1301544000000 , 16.673660675083] , [ 1304136000000 , 17.963944353609] , [ 1306814400000 , 16.63774086721] , [ 1309406400000 , 15.84857094609] , [ 1312084800000 , 14.767303362181] , [ 1314763200000 , 24.778452182433] , [ 1317355200000 , 18.370353229999] , [ 1320033600000 , 15.253137429099] , [ 1322629200000 , 14.989600840649] , [ 1325307600000 , 16.052539160125] , [ 1327986000000 , 16.424390322793] , [ 1330491600000 , 17.884020741104] , [ 1333166400000 , 18.372698836036] , [ 1335758400000 , 18.315881576096]]
    },
    { 
        "key" : "Asia" , 
        "color": '#ffd180', 
        "values" : [ [ 1025409600000 , 13.153938631352] , [ 1028088000000 , 12.456410521864] , [ 1030766400000 , 12.537048663919] , [ 1033358400000 , 13.947386398309] , [ 1036040400000 , 14.421680682568] , [ 1038632400000 , 14.143238262286] , [ 1041310800000 , 12.229635347478] , [ 1043989200000 , 12.508479916948] , [ 1046408400000 , 12.155368409526] , [ 1049086800000 , 13.335455563994] , [ 1051675200000 , 12.888210138167] , [ 1054353600000 , 12.842092790511] , [ 1056945600000 , 12.513816474199] , [ 1059624000000 , 12.21453674494] , [ 1062302400000 , 11.750848343935] , [ 1064894400000 , 10.526579636787] , [ 1067576400000 , 10.873596086087] , [ 1070168400000 , 11.019967131519] , [ 1072846800000 , 11.235789380602] , [ 1075525200000 , 11.859910850657] , [ 1078030800000 , 12.531031616536] , [ 1080709200000 , 11.360451067019] , [ 1083297600000 , 11.456244780202] , [ 1085976000000 , 11.436991407309] , [ 1088568000000 , 11.638595744327] , [ 1091246400000 , 11.190418301469] , [ 1093924800000 , 11.835608007589] , [ 1096516800000 , 11.540980244475] , [ 1099195200000 , 10.958762325687] , [ 1101790800000 , 10.885791159509] , [ 1104469200000 , 13.605810720109] , [ 1107147600000 , 13.128978067437] , [ 1109566800000 , 13.119012086882] , [ 1112245200000 , 13.003706129783] , [ 1114833600000 , 13.326996807689] , [ 1117512000000 , 13.547947991743] , [ 1120104000000 , 12.807959646616] , [ 1122782400000 , 12.931763821068] , [ 1125460800000 , 12.795359993008] , [ 1128052800000 , 9.6998935538319] , [ 1130734800000 , 9.3473740089131] , [ 1133326800000 , 9.36902067716] , [ 1136005200000 , 14.258619539875] , [ 1138683600000 , 14.21241095603] , [ 1141102800000 , 13.973193618249] , [ 1143781200000 , 15.218233920664] , [ 1146369600000 , 14.382109727451] , [ 1149048000000 , 13.894310878491] , [ 1151640000000 , 15.593086090031] , [ 1154318400000 , 16.244839695189] , [ 1156996800000 , 16.017088850647] , [ 1159588800000 , 14.183951830057] , [ 1162270800000 , 14.148523245696] , [ 1164862800000 , 13.424326059971] , [ 1167541200000 , 12.974450435754] , [ 1170219600000 , 13.232470418021] , [ 1172638800000 , 13.318762655574] , [ 1175313600000 , 15.961407746104] , [ 1177905600000 , 16.287714639805] , [ 1180584000000 , 16.24659058389] , [ 1183176000000 , 17.564505594808] , [ 1185854400000 , 17.872725373164] , [ 1188532800000 , 18.018998508756] , [ 1191124800000 , 15.584518016602] , [ 1193803200000 , 15.480850647182] , [ 1196398800000 , 15.699120036985] , [ 1199077200000 , 19.184281817226] , [ 1201755600000 , 19.691226605205] , [ 1204261200000 , 18.982314051293] , [ 1206936000000 , 18.707820309008] , [ 1209528000000 , 17.459630929759] , [ 1212206400000 , 16.500616076782] , [ 1214798400000 , 18.086324003978] , [ 1217476800000 , 18.929464156259] , [ 1220155200000 , 18.233728682084] , [ 1222747200000 , 16.315776297325] , [ 1225425600000 , 14.632892190251] , [ 1228021200000 , 14.667835024479] , [ 1230699600000 , 13.946993947309] , [ 1233378000000 , 14.394304684398] , [ 1235797200000 , 13.724462792967] , [ 1238472000000 , 10.930879035807] , [ 1241064000000 , 9.8339915513708] , [ 1243742400000 , 10.053858541872] , [ 1246334400000 , 11.786998438286] , [ 1249012800000 , 11.780994901769] , [ 1251691200000 , 11.305889670277] , [ 1254283200000 , 10.918452290083] , [ 1256961600000 , 9.6811395055706] , [ 1259557200000 , 10.971529744038] , [ 1262235600000 , 13.330210480209] , [ 1264914000000 , 14.592637568961] , [ 1267333200000 , 14.605329141157] , [ 1270008000000 , 13.936853794037] , [ 1272600000000 , 12.189480759072] , [ 1275278400000 , 11.676151385046] , [ 1277870400000 , 13.058852800018] , [ 1280548800000 , 13.62891543203] , [ 1283227200000 , 13.811107569918] , [ 1285819200000 , 13.786494560786] , [ 1288497600000 , 14.045162857531] , [ 1291093200000 , 13.697412447286] , [ 1293771600000 , 13.677681376221] , [ 1296450000000 , 19.96151186453] , [ 1298869200000 , 21.049198298156] , [ 1301544000000 , 22.687631094009] , [ 1304136000000 , 25.469010617433] , [ 1306814400000 , 24.88379943712] , [ 1309406400000 , 24.203843814249] , [ 1312084800000 , 22.138760964036] , [ 1314763200000 , 16.034636966228] , [ 1317355200000 , 15.394958944555] , [ 1320033600000 , 12.62564246197] , [ 1322629200000 , 12.973735699739] , [ 1325307600000 , 15.78601833615] , [ 1327986000000 , 15.227368020134] , [ 1330491600000 , 15.899752650733] , [ 1333166400000 , 15.661317319168] , [ 1335758400000 , 15.359891177281]]
    }, 
    { 
        "key" : "Europe" , 
        "color": '#63CB89',
        "values" : [ [ 1025409600000 , 9.3433263069351] , [ 1028088000000 , 8.4583069475546] , [ 1030766400000 , 8.0342398154196] , [ 1033358400000 , 8.1538966876572] , [ 1036040400000 , 10.743604786849] , [ 1038632400000 , 12.349366155851] , [ 1041310800000 , 10.742682503899] , [ 1043989200000 , 11.360983869935] , [ 1046408400000 , 11.441336039535] , [ 1049086800000 , 10.897508791837] , [ 1051675200000 , 11.469101547709] , [ 1054353600000 , 12.086311476742] , [ 1056945600000 , 8.0697180773504] , [ 1059624000000 , 8.2004392233445] , [ 1062302400000 , 8.4566434900643] , [ 1064894400000 , 7.9565760979059] , [ 1067576400000 , 9.3764619255827] , [ 1070168400000 , 9.0747664160538] , [ 1072846800000 , 10.508939004673] , [ 1075525200000 , 10.69936754483] , [ 1078030800000 , 10.681562399145] , [ 1080709200000 , 13.184786109406] , [ 1083297600000 , 12.668213052351] , [ 1085976000000 , 13.430509403986] , [ 1088568000000 , 12.393086349213] , [ 1091246400000 , 11.942374044842] , [ 1093924800000 , 12.062227685742] , [ 1096516800000 , 11.969974363623] , [ 1099195200000 , 12.14374574055] , [ 1101790800000 , 12.69422821995] , [ 1104469200000 , 9.1235211044692] , [ 1107147600000 , 8.758211757584] , [ 1109566800000 , 8.8072309258443] , [ 1112245200000 , 11.687595946835] , [ 1114833600000 , 11.079723082664] , [ 1117512000000 , 12.049712896076] , [ 1120104000000 , 10.725319428684] , [ 1122782400000 , 10.844849996286] , [ 1125460800000 , 10.833535488461] , [ 1128052800000 , 17.180932407865] , [ 1130734800000 , 15.894764896516] , [ 1133326800000 , 16.412751299498] , [ 1136005200000 , 12.573569093402] , [ 1138683600000 , 13.242301508051] , [ 1141102800000 , 12.863536342041] , [ 1143781200000 , 21.034044171629] , [ 1146369600000 , 21.419084618802] , [ 1149048000000 , 21.142678863692] , [ 1151640000000 , 26.56848967753] , [ 1154318400000 , 24.839144939906] , [ 1156996800000 , 25.456187462166] , [ 1159588800000 , 26.350164502825] , [ 1162270800000 , 26.478333205189] , [ 1164862800000 , 26.425979547846] , [ 1167541200000 , 28.191461582256] , [ 1170219600000 , 28.930307448808] , [ 1172638800000 , 29.521413891117] , [ 1175313600000 , 28.188285966466] , [ 1177905600000 , 27.704619625831] , [ 1180584000000 , 27.49086242483] , [ 1183176000000 , 28.770679721286] , [ 1185854400000 , 29.06048067145] , [ 1188532800000 , 28.240998844973] , [ 1191124800000 , 33.004893194128] , [ 1193803200000 , 34.075180359928] , [ 1196398800000 , 32.548560664834] , [ 1199077200000 , 30.629727432729] , [ 1201755600000 , 28.642858788159] , [ 1204261200000 , 27.973575227843] , [ 1206936000000 , 27.393351882726] , [ 1209528000000 , 28.476095288522] , [ 1212206400000 , 29.29667866426] , [ 1214798400000 , 29.222333802896] , [ 1217476800000 , 28.092966093842] , [ 1220155200000 , 28.107159262922] , [ 1222747200000 , 25.482974832099] , [ 1225425600000 , 21.208115993834] , [ 1228021200000 , 20.295043095268] , [ 1230699600000 , 15.925754618402] , [ 1233378000000 , 17.162864628346] , [ 1235797200000 , 17.084345773174] , [ 1238472000000 , 22.24600710228] , [ 1241064000000 , 24.530543998508] , [ 1243742400000 , 25.084184918241] , [ 1246334400000 , 16.606166527359] , [ 1249012800000 , 17.239620011628] , [ 1251691200000 , 17.336739127379] , [ 1254283200000 , 25.478492475754] , [ 1256961600000 , 23.017152085244] , [ 1259557200000 , 25.617745423684] , [ 1262235600000 , 24.061133998641] , [ 1264914000000 , 23.223933318646] , [ 1267333200000 , 24.425887263936] , [ 1270008000000 , 35.501471156693] , [ 1272600000000 , 33.775013878675] , [ 1275278400000 , 30.417993630285] , [ 1277870400000 , 30.023598978467] , [ 1280548800000 , 33.327519522436] , [ 1283227200000 , 31.963388450372] , [ 1285819200000 , 30.49896723209] , [ 1288497600000 , 32.403696817913] , [ 1291093200000 , 31.47736071922] , [ 1293771600000 , 31.53259666241] , [ 1296450000000 , 41.760282761548] , [ 1298869200000 , 45.605771243237] , [ 1301544000000 , 39.986557966215] , [ 1304136000000 , 43.84633051005] , [ 1306814400000 , 39.857316881858] , [ 1309406400000 , 37.675127768207] , [ 1312084800000 , 35.775077970313] , [ 1314763200000 , 48.631009702578] , [ 1317355200000 , 42.830831754505] , [ 1320033600000 , 35.611502589362] , [ 1322629200000 , 35.320136981738] , [ 1325307600000 , 31.564136901516] , [ 1327986000000 , 32.074407502433] , [ 1330491600000 , 35.053013769977] , [ 1333166400000 , 33.873085184128] , [ 1335758400000 , 32.321039427046]]
    }, 
    {
        "key" : "Australia" ,  
        "color": '#b9f6ca',
        "values" : [ [ 1025409600000 , 5.1162447683392] , [ 1028088000000 , 4.2022848306513] , [ 1030766400000 , 4.3543715758736] , [ 1033358400000 , 5.4641223667245] , [ 1036040400000 , 6.0041275884577] , [ 1038632400000 , 6.6050520064486] , [ 1041310800000 , 5.0154059912793] , [ 1043989200000 , 5.1835708554647] , [ 1046408400000 , 5.1142682006164] , [ 1049086800000 , 5.0271381717695] , [ 1051675200000 , 5.3437782653456] , [ 1054353600000 , 5.2105844515767] , [ 1056945600000 , 6.552565997799] , [ 1059624000000 , 6.9873363581831] , [ 1062302400000 , 7.010986789097] , [ 1064894400000 , 4.4254242025515] , [ 1067576400000 , 4.9613848042174] , [ 1070168400000 , 4.8854920484764] , [ 1072846800000 , 4.0441111794228] , [ 1075525200000 , 4.0219596813179] , [ 1078030800000 , 4.3065749225355] , [ 1080709200000 , 3.9148434915404] , [ 1083297600000 , 3.8659430654512] , [ 1085976000000 , 3.9572824600686] , [ 1088568000000 , 4.7372190641522] , [ 1091246400000 , 4.6871476374455] , [ 1093924800000 , 5.0398702564196] , [ 1096516800000 , 5.5221787544964] , [ 1099195200000 , 5.424646299798] , [ 1101790800000 , 5.9240223067349] , [ 1104469200000 , 5.9936860983601] , [ 1107147600000 , 5.8499523215019] , [ 1109566800000 , 6.4149040329325] , [ 1112245200000 , 6.4547895561969] , [ 1114833600000 , 5.9385382611161] , [ 1117512000000 , 6.0486751030592] , [ 1120104000000 , 5.23108613838] , [ 1122782400000 , 5.5857797121029] , [ 1125460800000 , 5.3454665096987] , [ 1128052800000 , 5.0439154120119] , [ 1130734800000 , 5.054634702913] , [ 1133326800000 , 5.3819451380848] , [ 1136005200000 , 5.2638869269803] , [ 1138683600000 , 5.5806167415681] , [ 1141102800000 , 5.4539047069985] , [ 1143781200000 , 7.6728842432362] , [ 1146369600000 , 7.719946716654] , [ 1149048000000 , 8.0144619912942] , [ 1151640000000 , 7.942223133434] , [ 1154318400000 , 8.3998279827444] , [ 1156996800000 , 8.532324572605] , [ 1159588800000 , 4.7324285199763] , [ 1162270800000 , 4.7402397487697] , [ 1164862800000 , 4.9042069355168] , [ 1167541200000 , 5.9583963430882] , [ 1170219600000 , 6.3693899239171] , [ 1172638800000 , 6.261153903813] , [ 1175313600000 , 5.3443942184584] , [ 1177905600000 , 5.4932111235361] , [ 1180584000000 , 5.5747393101109] , [ 1183176000000 , 5.3833633060013] , [ 1185854400000 , 5.5125898831832] , [ 1188532800000 , 5.8116112661327] , [ 1191124800000 , 4.3962296939996] , [ 1193803200000 , 4.6967663605521] , [ 1196398800000 , 4.7963004350914] , [ 1199077200000 , 4.1817985183351] , [ 1201755600000 , 4.3797643870182] , [ 1204261200000 , 4.6966642197965] , [ 1206936000000 , 4.3609995132565] , [ 1209528000000 , 4.4736290996496] , [ 1212206400000 , 4.3749762738128] , [ 1214798400000 , 3.3274661194507] , [ 1217476800000 , 3.0316184691337] , [ 1220155200000 , 2.5718140204728] , [ 1222747200000 , 2.7034994044603] , [ 1225425600000 , 2.2033786591364] , [ 1228021200000 , 1.9850621240805] , [ 1230699600000 , 0] , [ 1233378000000 , 0] , [ 1235797200000 , 0] , [ 1238472000000 , 0] , [ 1241064000000 , 0] , [ 1243742400000 , 0] , [ 1246334400000 , 0] , [ 1249012800000 , 0] , [ 1251691200000 , 0] , [ 1254283200000 , 0.44495950017788] , [ 1256961600000 , 0.33945469262483] , [ 1259557200000 , 0.38348269455195] , [ 1262235600000 , 0] , [ 1264914000000 , 0] , [ 1267333200000 , 0] , [ 1270008000000 , 0] , [ 1272600000000 , 0] , [ 1275278400000 , 0] , [ 1277870400000 , 0] , [ 1280548800000 , 0] , [ 1283227200000 , 0] , [ 1285819200000 , 0] , [ 1288497600000 , 0] , [ 1291093200000 , 0] , [ 1293771600000 , 0] , [ 1296450000000 , 0.52216435716176] , [ 1298869200000 , 0.59275786698454] , [ 1301544000000 , 0] , [ 1304136000000 , 0] , [ 1306814400000 , 0] , [ 1309406400000 , 0] , [ 1312084800000 , 0] , [ 1314763200000 , 0] , [ 1317355200000 , 0] , [ 1320033600000 , 0] , [ 1322629200000 , 0] , [ 1325307600000 , 0] , [ 1327986000000 , 0] , [ 1330491600000 , 0] , [ 1333166400000 , 0] , [ 1335758400000 , 0]]
    }, 
    { 
        "key" : "Antarctica" , 
        "color": '#EC5E69',
        "values" : [ [ 1025409600000 , 1.3503144674343] , [ 1028088000000 , 1.2232741112434] , [ 1030766400000 , 1.3930470790784] , [ 1033358400000 , 1.2631275030593] , [ 1036040400000 , 1.5842699103708] , [ 1038632400000 , 1.9546996043116] , [ 1041310800000 , 0.8504048300986] , [ 1043989200000 , 0.85340686311353] , [ 1046408400000 , 0.843061357391] , [ 1049086800000 , 2.119846992476] , [ 1051675200000 , 2.5285382124858] , [ 1054353600000 , 2.5056570712835] , [ 1056945600000 , 2.5212789901005] , [ 1059624000000 , 2.6192011642534] , [ 1062302400000 , 2.5382187823805] , [ 1064894400000 , 2.3393223047168] , [ 1067576400000 , 2.491219888698] , [ 1070168400000 , 2.497555874906] , [ 1072846800000 , 1.734018115546] , [ 1075525200000 , 1.9307268299646] , [ 1078030800000 , 2.2261679836799] , [ 1080709200000 , 1.7608893704206] , [ 1083297600000 , 1.6242690616808] , [ 1085976000000 , 1.7161663801295] , [ 1088568000000 , 1.7183554537038] , [ 1091246400000 , 1.7179780759145] , [ 1093924800000 , 1.7314274801784] , [ 1096516800000 , 1.2596883356752] , [ 1099195200000 , 1.381177053009] , [ 1101790800000 , 1.4408819615814] , [ 1104469200000 , 3.4743581836444] , [ 1107147600000 , 3.3603749903192] , [ 1109566800000 , 3.5350883257893] , [ 1112245200000 , 3.0949644237828] , [ 1114833600000 , 3.0796455899995] , [ 1117512000000 , 3.3441247640644] , [ 1120104000000 , 4.0947643978168] , [ 1122782400000 , 4.4072631274052] , [ 1125460800000 , 4.4870979780825] , [ 1128052800000 , 4.8404549457934] , [ 1130734800000 , 4.8293016233697] , [ 1133326800000 , 5.2238093263952] , [ 1136005200000 , 3.382306337815] , [ 1138683600000 , 3.7056975170243] , [ 1141102800000 , 3.7561118692318] , [ 1143781200000 , 2.861913700854] , [ 1146369600000 , 2.9933744103381] , [ 1149048000000 , 2.7127537218463] , [ 1151640000000 , 3.1195497076283] , [ 1154318400000 , 3.4066964004508] , [ 1156996800000 , 3.3754571113569] , [ 1159588800000 , 2.2965579982924] , [ 1162270800000 , 2.4486818633018] , [ 1164862800000 , 2.4002308848517] , [ 1167541200000 , 1.9649579750349] , [ 1170219600000 , 1.9385263638056] , [ 1172638800000 , 1.9128975336387] , [ 1175313600000 , 2.3412869836298] , [ 1177905600000 , 2.4337870351445] , [ 1180584000000 , 2.62179703171] , [ 1183176000000 , 3.2642864957929] , [ 1185854400000 , 3.3200396223709] , [ 1188532800000 , 3.3934212707572] , [ 1191124800000 , 4.2822327088179] , [ 1193803200000 , 4.1474964228541] , [ 1196398800000 , 4.1477082879801] , [ 1199077200000 , 5.2947122916128] , [ 1201755600000 , 5.2919843508028] , [ 1204261200000 , 5.198978305031] , [ 1206936000000 , 3.5603057673513] , [ 1209528000000 , 3.3009087690692] , [ 1212206400000 , 3.1784852603792] , [ 1214798400000 , 4.5889503538868] , [ 1217476800000 , 4.401779617494] , [ 1220155200000 , 4.2208301828278] , [ 1222747200000 , 3.89396671475] , [ 1225425600000 , 3.0423832241354] , [ 1228021200000 , 3.135520611578] , [ 1230699600000 , 1.9631418164089] , [ 1233378000000 , 1.8963543874958] , [ 1235797200000 , 1.8266636017025] , [ 1238472000000 , 0.93136635895188] , [ 1241064000000 , 0.92737801918888] , [ 1243742400000 , 0.97591889805002] , [ 1246334400000 , 2.6841193805515] , [ 1249012800000 , 2.5664341140531] , [ 1251691200000 , 2.3887523699873] , [ 1254283200000 , 1.1737801663681] , [ 1256961600000 , 1.0953582317281] , [ 1259557200000 , 1.2495674976653] , [ 1262235600000 , 0.36607452464754] , [ 1264914000000 , 0.3548719047291] , [ 1267333200000 , 0.36769242398939] , [ 1270008000000 , 0] , [ 1272600000000 , 0] , [ 1275278400000 , 0] , [ 1277870400000 , 0] , [ 1280548800000 , 0] , [ 1283227200000 , 0] , [ 1285819200000 , 0.85450741275337] , [ 1288497600000 , 0.91360317921637] , [ 1291093200000 , 0.89647678692269] , [ 1293771600000 , 0.87800687192639] , [ 1296450000000 , 0] , [ 1298869200000 , 0] , [ 1301544000000 , 0.43668720882994] , [ 1304136000000 , 0.4756523602692] , [ 1306814400000 , 0.46947368328469] , [ 1309406400000 , 0.45138896152316] , [ 1312084800000 , 0.43828726648117] , [ 1314763200000 , 2.0820861395316] , [ 1317355200000 , 0.9364411075395] , [ 1320033600000 , 0.60583907839773] , [ 1322629200000 , 0.61096950747437] , [ 1325307600000 , 0] , [ 1327986000000 , 0] , [ 1330491600000 , 0] , [ 1333166400000 , 0] , [ 1335758400000 , 0]]
    }
    ];

    nv.addGraph(function() {
        var chart = nv.models.stackedAreaChart()
        .x(function(d) { return d[0] })
        .y(function(d) { return d[1] })
        .clipEdge(true)
        .useInteractiveGuideline(true)
        ;

        chart.xAxis
        .showMaxMin(false)
        .tickFormat(function(d) { return d3.time.format('%x')(new Date(d)) });

        chart.yAxis
        .tickFormat(d3.format(',.2f'));

        d3.select('#nvd4 svg')
        .datum(nvddata4)
        .transition().duration(500).call(chart);
        nv.utils.windowResize(chart.update);
        return chart;
    });
    
    
    
    var flot1 = function () {
        var data = [[0, 11], [1, 15], [2, 25], [3, 24], [4, 13], [5, 18]];
        var dataset = [{
            data: data,
            color: "#0070E0"
        }];
        var ticks = [[0, "1"], [1, "2"], [2, "3"], [3, "4"], [4, "5"], [5, "6"]];

        var options = {
            series: {
                bars: {
                    show: true,
                    fill: 1
                }
            },
            bars: {
                align: "center",
                barWidth: 0.3
            },
            xaxis: {
                ticks: ticks,
                tickLength: 0
            },
            legend: {
                show: false
            },
            grid: {
                color: "#AFAFAF",
                hoverable: true,
                borderWidth: 0,
                backgroundColor: '#FFF'
            },
            tooltip: true,
            tooltipOpts: {
                content: "X: %x, Y: %y",
                defaultTheme: false
            }
        };
        $.plot($("#flot1"), dataset, options);
    };

    flot1();


    var flot2 = function () {
        var data1 = [[1, 3],
                [2, 345],
                [3, 34],
                [4, 234],
                [5, 435],
                [6, 458],
                [7, 879]
            ];
        var data2 = [
                [1, 134],
                [2, 789],
                [3, 423],
                [4, 416],
                [5, 489],
                [6, 157],
                [7, 340]
            ];
        var dataset = [{
            data: data1,
            color: "#0070E0"
        },
        {
            data: data2,
            color: "#63CB89"
        }];
        var ticks = [[1, "1"], [2, "2"], [3, "3"], [4, "4"], [5, "5"], [6, "6"], [7, "7"]];

        var options = {
            series: {
                lines: {
                    show: true,
                    shadowSize: 0
                }
            },
            xaxis: {
                ticks: ticks,
                tickLength: 0
            },
            legend: {
                show: false
            },
            grid: {
                color: "#AFAFAF",
                hoverable: true,
                borderWidth: 0,
                backgroundColor: '#FFF'
            },
            tooltip: true,
            tooltipOpts: {
                content: "X: %x, Y: %y",
                defaultTheme: false
            }
        };
        $.plot($("#flot2"), dataset, options);
    };

    flot2();


    var flot3 = function () {
        var data = [{
            label: "1",
            data: 42,
            color: "#0070E0",
        }, {
            label: "2",
            data: 23,
            color: "#F1C205",
        }, {
            label: "3",
            data: 35,
            color: "#5893DF",
        }];
        var options = {
            series: {
                pie: {
                    show: true
                }
            },
            legend: {
                labelFormatter: function(label, series){
                    return '<span class="pie-chart-legend">'+label+'</span>';
                }
            },
            grid: {
                hoverable: true
            },
            tooltip: true,
            tooltipOpts: {
                content: "%p.0%, %s",
                shifts: {
                    x: 20,
                    y: 0
                },
                defaultTheme: false
            }
        };
        $.plot($("#flot3"), data, options);
    };

    flot3();


    var flot4 = function () {

        // We use an inline data source in the example, usually data would
        // be fetched from a server

        var data = [],
            totalPoints = 300;
        
        function getRandomData() {

            if (data.length > 0)
                data = data.slice(1);

            // Do a random walk

            while (data.length < totalPoints) {

                var prev = data.length > 0 ? data[data.length - 1] : 50,
                    y = prev + Math.random() * 10 - 5;

                if (y < 0) {
                    y = 0;
                } else if (y > 100) {
                    y = 100;
                }

                data.push(y);
            }

            // Zip the generated y values with the x values

            var res = [];
            for (var i = 0; i < data.length; ++i) {
                res.push([i, data[i]])
            }

            return res;
        }

        var plot4 = $.plot("#flot4", [ getRandomData() ], {
            series: {
                shadowSize: 0   // Drawing is faster without shadows
            },
            yaxis: {
                min: 0,
                max: 100
            },
            xaxis: {
                show: false
            },
            colors: ["#63CB89"],
            legend: {
                show: false
            },
            grid: {
                color: "#AFAFAF",
                hoverable: true,
                borderWidth: 0,
                backgroundColor: '#FFF'
            },
            tooltip: true,
            tooltipOpts: {
                content: "Y: %y",
                defaultTheme: false
            }
        });

        function update() {
            plot4.setData([getRandomData()]);

            plot4.draw();
            setTimeout(update, 30);
        }

        update();
        
    };

    flot4();

});