export const updateThemePoints = (id, points, level) => {
  // console.log(`this is update theme points with id: ${id} & points ${points}`)
  return(dispatch) => {
    $.ajax({
      url: `/api/themes/${id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { theme: { points, level } }
    }).done( theme => {
      // console.log(`update theme points - ${id} - success`);
      // console.log(theme);
      // dispatch({ type: 'UPDATE_SUBTHEME_POINTS', theme });
    }).fail( data => {
      console.log('update theme points fail')
      console.log(data);
    })
  }
}