export const fetchSubThemes = (theme) => {
  return(dispatch) => {
    $.ajax({
      url: `api/subthemes?theme=${theme}`,
      type: 'GET',
      dataType: 'JSON'
    }).done( subthemes => {
      // console.log(`fetchSubThemes done with theme: ${theme}`);
      // console.log(subthemes);
      dispatch({ type: 'FETCH_SUBTHEMES', subthemes })
    }).fail( err => {
      console.log('fetchSubThemes fail', err);
    });

  }

}

export const updateSubthemePoints = (id, coins, status, best_spree, games_lost) => {
  // console.log(`this is updateSubthemePoints with id: ${id}, coins ${coins}, status ${status} & best_spree ${best_spree}`)
  return(dispatch) => {
    $.ajax({
      url: `/api/subthemes/${id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { subtheme: { coins, status, best_spree, games_lost } }
    }).done( subtheme => {
      // console.log(`update subtheme coins - ${id} - success`);
      // console.log(subtheme);
      dispatch({ type: 'UPDATE_SUBTHEME_POINTS', subtheme });
    }).fail( data => {
      console.log('update subtheme points fail')
      console.log(data);
    })
  }
}

export const updateSubthemeCoins = (id, coins) => {
  // console.log(`this is updateSubthemePoints with id: ${id}, coins ${coins}, status ${status} & best_spree ${best_spree}`)
  return(dispatch) => {
    $.ajax({
      url: `/api/subthemes/${id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { subtheme: { coins } }
    }).done( subtheme => {
      // console.log(`update subtheme coins - ${id} - success`);
      // console.log(subtheme);
      dispatch({ type: 'UPDATE_SUBTHEME_POINTS', subtheme });
    }).fail( data => {
      console.log('update subtheme points fail')
      console.log(data);
    })
  }
}