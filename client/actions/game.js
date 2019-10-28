export const fetchGameData = (theme) => {
  return(dispatch) => {
    $.ajax({
      url: `api/game?theme=${theme}`,
      type: 'GET',
      dataType: 'JSON'
    }).done( gameData => {
      // console.log('fetch gameData done', gameData);
      dispatch({ type: 'FETCH_GAME_DATA', gameData })
    }).fail( err => {
      console.log('fetch Game Data fail', err);
    });

  }

}