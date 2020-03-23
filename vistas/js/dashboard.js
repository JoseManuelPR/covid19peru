const dataDashboard = async () => {
    //PERU
    const BASE_API = './data/dataAll.json'

    const getData = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        
        const valuePreviousConfirmed = data[data.length-2].Confirmed
        const valuePreviousRecovered = data[data.length-2].Recovered
        const valuePreviousDeaths = data[data.length-2].Deaths
        const valuePreviousDescarted = data[data.length-2].Descarted
        const valuePreviousActives = valuePreviousConfirmed - valuePreviousRecovered - valuePreviousDeaths

        const valueConfirmed = data[data.length-1].Confirmed
        const valueRecovered = data[data.length-1].Recovered
        const valueDeaths = data[data.length-1].Deaths
        const valueDescarted = data[data.length-1].Descarted
        const valueActives = valueConfirmed - valueRecovered - valueDeaths

        const dataFiltered = {  valueConfirmed, 
                                valueRecovered, 
                                valueDeaths, 
                                valueActives, 
                                valueDescarted, 
                                valuePreviousConfirmed,
                                valuePreviousRecovered,
                                valuePreviousDeaths,
                                valuePreviousDescarted,
                                valuePreviousActives
                            }

        return dataFiltered
        throw new Error('No se encontró ningun resultado');
    }

    try {
        const   {     
                    valueConfirmed, 
                    valueRecovered, 
                    valueDeaths, 
                    valueActives, 
                    valueDescarted, 
                    valuePreviousConfirmed,
                    valuePreviousRecovered,
                    valuePreviousDeaths,
                    valuePreviousDescarted,
                    valuePreviousActives
                } = await getData(`${BASE_API}`)

        const valueProvesRealized = valueDescarted + valueConfirmed
        const valuePreviousProvesRealized = valuePreviousDescarted + valuePreviousConfirmed

        document.getElementById("nroConfirmed").textContent = valueConfirmed
        document.getElementById("nroDeaths").textContent = valueDeaths
        document.getElementById("nroRecovered").textContent = valueRecovered
        document.getElementById("nroActives").textContent = valueActives
        document.getElementById("nroDescarted").textContent = valueDescarted
        document.getElementById("nroProves").textContent = valueProvesRealized

        //CONFIRMADOS
        const nroNewsConfirmed = valueConfirmed - valuePreviousConfirmed
        const porNewsConfirmed = ((valueConfirmed - valuePreviousConfirmed) / valuePreviousConfirmed * 100).toFixed(1)
        
        if(nroNewsConfirmed > 0){
            document.getElementById("nroNewsConfirmed").textContent = `(${nroNewsConfirmed}) ${porNewsConfirmed}%`
        }
        
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
        const porNewsDescarted = ((valueDescarted - valuePreviousDescarted) / valuePreviousDescarted * 100).toFixed(1)
        
        if(nroNewsDescarted > 0){
            document.getElementById("nroNewsDescarted").textContent = `(${nroNewsDescarted}) ${porNewsDescarted}%`
        }

        //PRUEBAS REALIZADAS
        const nroNewsProvesRealized = valueProvesRealized - valuePreviousProvesRealized
        const porNewsProvesRealized = ((valueProvesRealized - valuePreviousProvesRealized) / valuePreviousProvesRealized * 100).toFixed(1)
        
        if(nroNewsProvesRealized > 0){
            document.getElementById("nroNewsRealized").textContent = `(${nroNewsProvesRealized}) ${porNewsProvesRealized}%`
        }

    } catch (error) {
        alert(error.message)
    }
}

dataDashboard();