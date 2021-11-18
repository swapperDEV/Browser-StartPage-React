import $ from 'jquery'
export const getUserGps = () => {
    return $.ajax({
      url: "https://geolocation-db.com/jsonp",
      jsonpCallback: "callback",
      dataType: "jsonp",
    }).then((location) => {
      return {
          city: location.city,
          lat: location.latitude,
          lon: location.longitude 
      }
    })
  }