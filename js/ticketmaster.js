$(document).ready(function () {
  var apikey = "xBVHjDnzrYiNAH4i7AApRbO1kzO4QBjw";

  $('#search-button').click(function () {
    var search = $('#search-text').val(); //texto con el que se va a hacer la busqueda
    $('#characters-container').html(''); //LIMPIAR LA CAJA DESPUES DEL CLICK
    //$('#characters-container').innerHTML = '';
    $('#search-text').val('');// limpia lo escrito en el input
    console.log(search);

    $.ajax({
      url:"https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey="+ apikey + "&keyword=" + search,
      success: function (response) {
        console.log(response); //TODO ARREGLO

        // var template = $('#template-character').html(); //no cambia Imprime el template que escribimos en el html
        // var $characters = $('#characters-container'); //Objeto jquerisado ya tiene función append
        // console.log(template);
        // //console.log(response.data.results); 20 OBJETOS CON INFO
        // response.data.results.forEach(function (character) {


        //   var data = {
        //     name: character.name,
        //     description: character.description,
        //     profile: character.thumbnail.path + '.' + character.thumbnail.extension,
        //     url: character.urls[0].url,
        //   };
        //   //console.log(character); //CADA UNO DE LOS 20 OBJETOS CON SUS ELEMENTOS
        //   //console.log(data); //cambia cada ciclo
        //   var filledTemplate = fillTemplate(template, data); //Combina nuestro template con los datos
        //   console.log(filledTemplate);
        //   $characters.append(filledTemplate); //
        // });
      }
    });
  });
  //SI QUEREMOS QUE SE EJECUTE AL HACER CLICK PODEMOS METER TODO DENTRO DE UN CLICK
});

//FUNCIONES QUE USAMOS PARA LAS PLANTILLAS Y PODER IMPRIMIR LA INFORMACIÓN
//PLANTILLA
function fillTemplate(template, data) {
  for (var index in data) {
    var value = data[index];
    template = template.replace(new RegExp('{{' + index + '}}', 'g'), escapeHtml(value));
  };
  return template;
}
//FUNCIÓN QUE SALVA A ELEMENTOS Y SIMBOLOS
function escapeHtml(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}