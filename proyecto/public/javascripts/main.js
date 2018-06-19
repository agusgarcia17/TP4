//se muestran options de select paises
$.ajax({
    url: "/paises",
    dataType: "json",
}).done(function(data) {
    data.paises.forEach(function(e) {
        let option = `<option value="${e.nombre}">${e.nombre}</option>`
        $("#pais").append(option);
    })
})

//se muestran preguntas con sus respectivas respuestas
$.ajax({
    url: "/preguntas",
    dataType: "json",
}).done(function(data) {
    data.forEach(function(e, i) {
        let li = `<li>${e.pregunta}</li><div id='flex'><input type='radio' name='${i}' value='${e.rta1}'><label>${e.rta1}</label><input type='radio' name='${i}' value='${e.rta2}'><label>${e.rta2}</label><input type='radio' name='${i}' value='${e.rta3}'><label>${e.rta3}</label></div>`
        $("#preguntas").append(li);

    })
})

//función para dibujar cabecera de la tabla
function dibujarCabeceraTabla(){
  $('#resultadosParciales').append(`<tr>
                                <th>Residencia</th>
                                <th>Lenguaje</th>
                                <th>Sistema</th>
                                <th>Browser</th>
                                <th>Editor</th>
                            </tr>`);

}


//función para mostrar las preguntas contestadas en sesión anterior
function mostrarTabla(){

  $.ajax({
    url: "/respuestas",
    dataType: "json",
    }).done(function(data) {
        data.forEach(function(e, i) {
        $('#resultadosParciales').append(`<tr>
                                    <td>${e.pais}</td>
                                    <td>${e.respuesta1}</td>
                                    <td>${e.respuesta2}</td>
                                    <td>${e.respuesta3}</td>
                                    <td>${e.respuesta3}</td>
                                </tr>`)
      });
});
}



$('#btn').on('click', function() {
    var select = $("#pais").val()
    console.log(select)
    var respuesta1 = $("input:checked[type='radio'][name='0']").val()
    console.log(respuesta1)
    var respuesta2 = $("input:checked[type='radio'][name='1']").val()
    console.log(respuesta2)
    var respuesta3 = $("input:checked[type='radio'][name='2']").val()
    console.log(respuesta3)
    var respuesta4 = $("input:checked[type='radio'][name='3']").val()
    console.log(respuesta4)

    //controla que complete todo lo requerido en el form
    if(select!='' && respuesta1!=undefined && respuesta2!=undefined && respuesta3!=undefined && respuesta4!=undefined){
      $('#resultadosParciales').append(`<tr>
                                    <td>${select}</td>
                                    <td>${respuesta1}</td>
                                    <td>${respuesta2}</td>
                                    <td>${respuesta3}</td>
                                    <td>${respuesta3}</td>
                                </tr>`);

      //se hace un post para guardar la nueva respuesta en mi api
      $.ajax({
          type:"POST",
          url: "/respuestas",
          data: {pais:select, respuesta1:respuesta1,respuesta2:respuesta2,respuesta3:respuesta3,respuesta4:respuesta4}
      }).done(function() {
          
        })

      //reset form
      $("input:checked[type='radio']").prop( "checked", false );//resetea los input type='radio' 
      $("#pais").val("");//resetea valor selec de paises
      $('#mjeError').html('')//borra mensaje de error
       
    }
    else{
      $('#mjeError').html('Debes contestar todas las preguntas y seleccionar Pais').css('color','red');
    }   

})

//llamadas a funciones para dibujar la tabla
dibujarCabeceraTabla();
mostrarTabla();