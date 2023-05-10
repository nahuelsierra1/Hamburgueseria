function iniciarMap(){
    var coord = {lat:-38.0652054 ,lng: -57.5479307};

    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 16,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });

    //SEGUNDO MAPA

    var coorde = {lat:-38.0293995 ,lng: -57.5384438};

    var mapa = new google.maps.Map(document.getElementById('mapa'),{
      zoom: 16,
      center: coorde
    });
    var marker = new google.maps.Marker({
      position: coorde,
      map: mapa
    });
}