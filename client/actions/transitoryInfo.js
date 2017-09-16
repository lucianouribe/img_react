// aca va la informacion de cada listado de fotos this.props.details
// export const setTransitoryInfo = (informacion) => {
//   // console.log('this is set tipo curso action')
//   return(dispatch) => {
//     dispatch({ type: 'SET_TRANSITORY_INFO', informacion});
//   }
// }

export const transitoryInfo = (infoII) => {
  // console.log('this is setTransitoryInfo actions');
  return(dispatch) => {
    $.ajax({
      url: '/api/carrusels/',
      type: 'GET',
      dataType: 'JSON'
    }).done( carrusel => {
      // console.log(carrusel)
      // console.log(infoII)
      const filtered = carrusel.filter( filteredData => filteredData.role === infoII )
      // console.log(filtered)
      dispatch({ type: 'TRANSITORY_INFO', filtered});
    }).fail( data => {
      console.log('fetch carrusels fail data')
      console.log(data)
    })
  }

}
