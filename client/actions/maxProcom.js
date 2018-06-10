export const maxProcomId = () => {
  console.log('this is set max procom id action')
  return(dispatch) => {
    $.ajax({
      url: 'api/set_last_procom_id',
      type: 'GET',
    }).done( last_id => {
      dispatch({ type: 'SET_MAX_PPROCOM_ID', last_id});
    }).fail( err => {
      console.log(err);
    });
  }
}
