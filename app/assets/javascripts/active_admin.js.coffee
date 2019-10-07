#= require active_admin/base

jQuery ->
  $('#word_theme').on 'change', (event) ->
    $('#word_subtheme option').hide()
    $("#word_subtheme .#{event.target.value}").show()

  $('#verb_theme').on 'change', (event) ->
    $('#verb_subtheme option').hide()
    $("#verb_subtheme .#{event.target.value}").show()

  $('#phrase_theme').on 'change', (event) ->
    $('#phrase_subtheme option').hide()
    $("#phrase_subtheme .#{event.target.value}").show()
