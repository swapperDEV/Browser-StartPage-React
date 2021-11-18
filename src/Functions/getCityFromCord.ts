export const getCityFromCord = async (lat:any,lon:any) => {
        let city
        const URL = `https://api.opencagedata.com/geocode/v1/json?key=545c6cddfc59447eb7a4fd5246181236&q=${lat},${lon}&pretty=1`
        await fetch(URL).then(res => res.json()).then(res => {
            console.log(res.results[0].components.city)
            city = res.results[0].components.city
        })
        return city
    }