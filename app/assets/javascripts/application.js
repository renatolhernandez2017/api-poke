// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

function get_pokemons(j) {
  $("#btn-pokemon").click(function() {
    if (j == 0) {
      var pokemon = $('#pokemon').val();

      $('.card-pokemon').append("<div class='card start'><h4 class='card-title pt-3 font_size'></h4><hr></div>");
      $('.card').append("<img class='card-img-top card_img' src='' alt='image'><hr><div class='card-body'></div>");
      $('.card-body').append("<h3 class='card-text mb-3'></h3><p class='abilities'></p><hr><div class='row poke'></div>");
      $('.poke').append("<div class='col-6'><p class='weight'></p></div><div class='col-6'><p class='height'></p></div>");

      $.ajax({
        url: "/pokemon/"+ pokemon +"",
        method: 'GET',
        type: 'json',

        success: function(data) {
          $('.card-title').append("<span id='name'>"+ data['name'] +"</span>");
          $('.card-img-top')[0].src = data['image'];
          $('.card-text').append("<span id='text_abilities'>Abilities</span>");

          for (var i = 0; i < data['ability_name'].length; i++) {
            $('.abilities').append("<span class='ability abilities_pokemon margin'>"+ data['ability_name'][i] +"</span>");
          }

          $('.weight').append("<span id='weight' class='abilities_pokemon'><b>Weight:</b> "+ data['weight'] +"</span>");
          $('.height').append("<span id='height' class='abilities_pokemon'><b>Height:</b> "+ data['height'] +"</span>");
        },
        error: function(data) {
          $('.not-found').append("<span id='not-found'>"+ data.responseText +"</span>");
        }
      });
    }
    else {
      var pokemon = '';
      $('#name').remove();
      $('#text_abilities').remove();
      $('#weight').remove();
      $('#height').remove();
      $('#not-found').remove();
      $('.ability').remove();

      var pokemon = $('#pokemon').val();

      $.ajax({
        url: "/pokemon/"+ pokemon +"",
        method: 'GET',
        type: 'json',

        success: function(data) {
          $('.card-title').append("<span id='name'>"+ data['name'] +"</span>");
          $('.card-img-top')[0].src = data['image'];
          $('.card-text').append("<span id='text_abilities'>Abilities</span>");

          for (var i = 0; i < data['ability_name'].length; i++) {
            $('.abilities').append("<span class='ability abilities_pokemon margin'>"+ data['ability_name'][i] +"</span>");
          }

          $('.weight').append("<span id='weight' class='abilities_pokemon'><b>Weight:</b> "+ data['weight'] +"</span>");
          $('.height').append("<span id='height' class='abilities_pokemon'><b>Height:</b> "+ data['height'] +"</span>");
        },
        error: function(data) {
          $('.not-found').append("<span id='not-found'>"+ data.responseText +"</span>");
        }
      });
    }

    j += 1;
  })
}
  