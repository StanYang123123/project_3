window.initMap = function () {
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: { lat: 41.831380690884345, lng: -87.62711118519744 }
  })

  const icon = {
    url: ../images/icon.png, // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  }

  const marker = new google.maps.Marker({
    position: { lat: 41.831380690884345, lng: -87.62711118519744 },
    map,
    icon
  })

  const modalOne = new google.maps.InfoWindow({
    content: `
        <div>IIT Tower</div>
        <div>A building of IIT</div>
      `
  })

  marker.addListener('mouseover', () => {
    modalOne.open({
      anchor: marker,
      map,
      shouldFocus: false
    })
  })

  const marker_two = new google.maps.Marker({
    position: { lat: 41.834410410311605, lng: -87.62927841004733 },
    map,
    icon,
    animation: google.maps.Animation.DROP
  })

  const modalTwo = new google.maps.InfoWindow({
    content: `
        <div>IIT Main Building</div>
        <div>Best Value University</div>
        <div>—U.S. News & World Report</div>
      `
  })

  marker_two.addListener('mouseover', () => {
    modalTwo.open({
      anchor: marker_two,
      map,
      shouldFocus: false
    })
  })
}
