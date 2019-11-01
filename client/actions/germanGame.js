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

export const updateGame = (id, points, level) => {
  // console.log(`this is update game points with id: ${id} & points ${points}`)
  return(dispatch) => {
    $.ajax({
      url: `/api/deutsch/${id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { game: { points, level } }
    }).done( game => {
      // console.log(`update game points - ${id} - success`);
      // console.log(game);
      // dispatch({ type: 'UPDATE_SUBTHEME_POINTS', game });
    }).fail( data => {
      console.log('update theme points fail')
      console.log(data);
    })
  }
}