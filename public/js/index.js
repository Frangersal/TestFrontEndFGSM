var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
  },
  computed:{

  }
})

// Formulario
var formulario = new Vue({
  el: '#formulario',
  data: {
    correo:'',
    contenido:'',
    alertaExito:'QUE CHIDO!',
    alertaError:'Llene todos los formularios',
  },
  computed:{
    alerta(){
      if ((this.correo.length>=1)&&(this.contenido.length>=1)) {
        return this.alertaExito;
      } else {
        return this.alertaError;
      }     

    },
  }
})
// 

function iniciarMap(){
  var coord = {lat:16.8638 ,lng: -99.881616};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 10,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });


}


$(function(){
    $("#example-form").submit(function() {
      var inputVal = $("#inputExample").val();
      $(document).trigger("clear-alert-id.example");
      if (inputVal.length < 1) {
        $(document).trigger("set-alert-id-example", [
          {
            "message": "No lleno todo los datos",
            "priority": "error"
          },
          {
            "message": "This is an info alert",
            "priority": "info"
          }
        ]);
      }
    });
  });

