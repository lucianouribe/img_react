export const maxPasoId = () => {
  return(dispatch) => {
    $.ajax({
      url: 'api/set_last_id',
      type: 'GET',
    }).done( last_id => {
      dispatch({ type: 'SET_MAX_PASO_ID', last_id});
    }).fail( err => {
      console.log(err);
    });
  }
}
