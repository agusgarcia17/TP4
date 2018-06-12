

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
 

 $('#btn').on('click', function (){
     var select =  $("#pais").val()
     console.log(select)
     var respuesta1 = $("input:checked[type='radio'][name='0']").val()
     console.log(respuesta1)
     var respuesta2 = $("input:checked[type='radio'][name='1']").val()
     console.log(respuesta2)
     var respuesta3 = $("input:checked[type='radio'][name='2']").val()
     console.log(respuesta3)
     var respuesta4 = $("input:checked[type='radio'][name='3']").val()
     console.log(respuesta4)
 })