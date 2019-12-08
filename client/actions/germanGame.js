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

export const updateGame = (id, lifes, punctuation, punctuation_4_total, level) => {
  // console.log(`this is updateGame with id: ${id}, lifes ${lifes}, punctuation ${punctuation}, punctuation_4_total ${punctuation_4_total}, level ${level}`)
  return(dispatch) => {
    $.ajax({
      url: `/api/deutsch/${id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { game: { lifes, punctuation, punctuation_4_total, level } }
    }).done( game => {
      // console.log(`updateGame points - ${id} - success`);
      // console.log(game);
      dispatch({ type: 'GERMAN_GAME', game });
    }).fail( data => {
      console.log('update german game points fail')
      console.log(data);
    })
  }
}