// export const addDeutsch = (campo, titulo, contenido, lenguaje) => {
//   console.log('this is add descripcions action');
//   return(dispatch) => {
//     $.ajax({
//       url: `/api/descripcions`,
//       type: 'POST',
//       dataType: 'JSON',
//       data: { descripcion: { campo, titulo, contenido, lenguaje } }
//     }).done( descripcion => {
//       // console.log('add descripcion done data');
//       // console.table(descripcion);
//       dispatch({ type: 'ADD_DESCRIPCION', descripcion });
//     }).fail( data => {
//       // console.log('add descripcion fail data')
//       // console.log(data);
//     })
//   }

// }

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

// export const editDeutsch = (id, titulo, contenido) => {
//   // console.log(`this is edit descripcion con id: ${id}`)
//   return(dispatch) => {
//     $.ajax({
//       url: `/api/descripcions/${id}`,
//       type: 'PUT',
//       dataType: 'JSON',
//       data: { descripcion: { titulo, contenido } }
//     }).done( descripcion => {
//       // console.log('edit descripcion done data');
//       // console.table(descripcion);
//       dispatch({ type: 'EDIT_DESCRIPCION', descripcion });
//     }).fail( data => {
//       // console.log('edit descripcion fail data')
//       // console.log(data);
//     })
//   }
// }

// export const deleteDeutsch = (id) => {
//   // console.log(`this is delete descripcion con id: ${id}`)
//   return(dispatch) => {
//     $.ajax({
//       url: `/api/descripcions/${id}`,
//       type: 'DELETE',
//       dataType: 'JSON'
//     }).done( data => {
//       // console.log('delete descripcion done data');
//       // console.log(data);
//       dispatch({ type: 'DELETE_DESCRIPCION', id });
//     }).fail( data => {
//       console.log(data);
//     })
//   }
// }
