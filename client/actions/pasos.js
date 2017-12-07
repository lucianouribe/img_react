export const addPaso = (proyecto, step, orden, estilo) => {
  console.log('this is add paso action');
  return(dispatch) => {
    $.ajax({
      url: `/api/proyectos/${proyecto.id}/pasos`,
      type: 'POST',
      dataType: 'JSON',
      data: { paso: { step, orden, estilo } }
    }).done( paso => {
      // console.log('add paso done data');
      // console.table(paso);
      dispatch({ type: 'ADD_PASO', paso });
    }).fail( data => {
      console.log('add paso fail data')
      console.log(data);
    })
  }

}

export const fetchPasos = (fetchWho) => {
  console.log('this is fetch pasos')

  return(dispatch) => {
    $.ajax({
      url: `/api/proyectos/${fetchWho}/`,
      type: 'GET',
      dataType: 'JSON'
    }).done( pasos => {
        console.log('fetch pasos success')
        dispatch({ type: 'ALL_PASOS', pasos});
    }).fail( data => {
      console.log('fetch pasos fail data')
      console.log(data)
    })
  }

}
// export const fetchPasos = (proyecto) => {
//   console.log('this is fetch pasos')
//
//   return(dispatch) => {
//     $.ajax({
//       url: `/api/proyectos/${proyecto.id}/pasos`,
//       type: 'GET',
//       dataType: 'JSON'
//     }).done( pasos => {
//         dispatch({ type: 'ALL_PASOS', pasos});
//     }).fail( data => {
//       console.log('fetch pasos fail data')
//       console.log(data)
//     })
//   }
//
// }

export const editProyecto = (id, name, topic, subtopic, difficulty) => {
  console.log(`this is edit proyecto con id: ${id}`)
  console.table(id, name, topic, subtopic, difficulty)
  return(dispatch) => {
    $.ajax({
      url: `/api/pasos/${id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { proyecto: { name, topic, subtopic, difficulty } }
    }).done( proyecto => {
      // console.log('edit proyecto done data');
      // console.table(proyecto);
      dispatch({ type: 'EDIT_PROYECTO', proyecto });
    }).fail( data => {
      // console.log('edit proyecto fail data')
      // console.log(data);
    })
  }
}

export const deletePaso = (pasId, proId) => {
  // console.log(`this is delete paso con paso id: ${pasId} y proyecto id ${proId}`)
  return(dispatch) => {
    $.ajax({
      url: `/api/proyectos/${proId}/pasos/${pasId}`,
      type: 'DELETE',
      dataType: 'JSON'
    }).done( data => {
      console.log('delete paso done');
      // console.log(data);
      dispatch({ type: 'DELETE_PASO', pasId });
    }).fail( data => {
      console.log(data);
    })
  }
}
