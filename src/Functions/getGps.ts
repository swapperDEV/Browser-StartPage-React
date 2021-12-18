export const getUserGps = async () => {
  let locationData
  await fetch('http://ipwhois.app/json/').then(loc => loc.json()).then(location => {
    locationData = location
  })
  return {
    //@ts-ignore
    city: locationData.city,
    //@ts-ignore
    lat: locationData.latitude,
    //@ts-ignore
    lon: locationData.longitude,
  }
}