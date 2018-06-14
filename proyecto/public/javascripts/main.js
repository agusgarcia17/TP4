$.ajax({
    url: "/paises",
    dataType: "json",
}).done(function(data) {
    data.paises.forEach(function(e) {
        let option = `<option value="${e.nombre}">${e.nombre}</option>`
        $("#pais").append(option);
    })
})


$.ajax({
    url: "/preguntas",
    dataType: "json",
}).done(function(data) {
    data.forEach(function(e, i) {
        let li = `<li>${e.pregunta}</li><div id='flex'><input type='radio' name='${i}' value='${e.rta1}'><label>${e.rta1}</label><input type='radio' name='${i}' value='${e.rta2}'><label>${e.rta2}</label><input type='radio' name='${i}' value='${e.rta3}'><label>${e.rta3}</label></div>`
        $("#preguntas").append(li);

    })
})


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
      
      guardoInfoEnArray(select,respuesta1,respuesta2,respuesta3,respuesta4);
      $("input:checked[type='radio']").prop( "checked", false );//resetea los input type='radio' 
      $("#pais").val("");//resetea valor selec de paises
      $('#mjeError').html('')//borra mensaje de error
       
    }
    else{
      $('#mjeError').html('Debes contestar todas las preguntas y seleccionar Pais').css('color','red');
    }


})

function guardoInfoEnArray(select,respuesta1,respuesta2,respuesta3,respuesta4){
  let resultados= [];
  let respuesta={
    "residencia": "",
    "lenguaje": "",
    "sistema": "",
    "browser":"",
    "editor":""
  }
  respuesta.residencia = select;
  respuesta.lenguaje = respuesta1;
  respuesta.sistema = respuesta2;
  respuesta.browser = respuesta3;
  respuesta.editor = respuesta4;

  resultados.push(respuesta);
  detallarResultados(resultados);
}

/*creo tabla y la lleno*/
    /*Resultados Parciales*/
    $('#resultadosParciales').append(`<tr>
                                <th>Residencia</th>
                                <th>Lenguaje</th>
                                <th>Sistema</th>
                                <th>Browser</th>
                                <th>Editor</th>
                            </tr>`);


function detallarResultados(resultados) {    

   /*Despliego Ranking por Array Historico*/
   console.log("resultados"+JSON.stringify(resultados));

  for (var i = resultados.length - 1; i >= 0; i--) {
        $('#resultadosParciales').append(`<tr>
                                    <td>${resultados[i].residencia}</td>
                                    <td>${resultados[i].lenguaje}</td>
                                    <td>${resultados[i].sistema}</td>
                                    <td>${resultados[i].browser}</td>
                                    <td>${resultados[i].editor}</td>
                                </tr>`)    }
  
}