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

export const updateSubthemePoints = (id, points, status, hearts) => {
  // console.log(`this is updateSubthemePoints with id: ${id}, points ${points}, status ${status} & hearts ${hearts}`)
  return(dispatch) => {
    $.ajax({
      url: `/api/subthemes/${id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { subtheme: { points, status, hearts } }
    }).done( subtheme => {
      // console.log(`update subtheme points - ${id} - success`);
      // console.log(subtheme);
      dispatch({ type: 'UPDATE_SUBTHEME_POINTS', subtheme });
    }).fail( data => {
      console.log('update subtheme points fail')
      console.log(data);
    })
  }
}