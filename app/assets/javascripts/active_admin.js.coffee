#= require active_admin/base

jQuery ->
  # words
  $('.word_subtheme').each ->
    $(this).parent().hide()

  $('#word_theme').on 'change', (event) ->
    $('.word_subtheme').each ->
      $(this).parent().hide()
    $("#word_subtheme.#{event.target.value}").parent().show()


  # verbs
  $('.verb_subtheme').each ->
    $(this).parent().hide()

  $('#verb_theme').on 'change', (event) ->
    $('.verb_subtheme').each ->
      $(this).parent().hide()
    $("#verb_subtheme.#{event.target.value}").parent().show()

  #phrases