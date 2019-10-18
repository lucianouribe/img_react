export const fetchGermanGame = () => {
  // console.log('this is fetch german game')
  return(dispatch) => {
    $.ajax({
      url: '/api/deutsch/',
      type: 'GET',
      dataType: 'JSON'
    }).done( game => {
        // console.log('fetch german game done', game)
        dispatch({ type: 'GERMAN_GAME', game });
    }).fail( data => {
      console.log('fetch german games fail')
      console.log(data)
    })
  }

}

