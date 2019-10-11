export const fetchSubThemes = (theme) => {
  return(dispatch) => {
    $.ajax({
      url: `api/subthemes?theme=${theme}`,
      type: 'GET',
      dataType: 'JSON'
    }).done( subworlds => {
      console.log('fetchSubThemes done');
      console.log(subworlds);
      dispatch({ type: 'FETCH_SUBTHEMES', subworlds })
    }).fail( err => {
      console.log('fetchSubThemes fail', err);
    });

  }

}