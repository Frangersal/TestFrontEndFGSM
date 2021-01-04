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
    
    //0=null, 1=lleno, 2=vacio
    lleno:0,


  },
  filter:{


  },
  watch:{
 
    

  },
  methods: {
    alertas(){
      if (this.correo.length==0 && this.contenido.length==0  ) {
        this.lleno=2;
        
      } else {
        this.lleno=1;
        
      }

    }
  },
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
