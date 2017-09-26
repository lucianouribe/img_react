export const addDescripcion = (campo, titulo, contenido, lenguaje) => {
  console.log('this is add descripcions action');
  return(dispatch) => {
    $.ajax({
      url: `/api/descripcions`,
      type: 'POST',
      dataType: 'JSON',
      data: { descripcion: { campo, titulo, contenido, lenguaje } }
    }).done( descripcion => {
      // console.log('add descripcion done data');
      // console.table(descripcion);
      dispatch({ type: 'ADD_DESCRIPCION', descripcion });
    }).fail( data => {
      // console.log('add descripcion fail data')
      // console.log(data);
    })
  }

}

export const fetchDescripcions = (wordToMatch) => {
  // console.log('this is fetch descripcions')
  const regex = new RegExp(wordToMatch, 'gi');

  return(dispatch) => {
    $.ajax({
      url: '/api/descripcions/',
      type: 'GET',
      dataType: 'JSON'
    }).done( descripcions => {
      if(wordToMatch === 'full') {
        dispatch({ type: 'ALL_DESCRIPCIONS', descripcions});
      } else {
        let lasDescripciones = descripcions.filter( descripcion => {
          if(
            descripcion.campo.match(regex)
          ) return descripcion;
        })
        // console.table(lasTarifas)
        dispatch({ type: 'FILTERED_DESCRIPCIONS', lasDescripciones});
      }
    }).fail( data => {
      console.log('fetch descripcions fail data')
      console.log(data)
    })
  }

}

export const editDescripcion = (id, campo, titulo, contenido, lenguaje) => {
  // console.log(`this is edit descripcion con id: ${id}`)
  return(dispatch) => {
    $.ajax({
      url: `/api/descripcions/${id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { descripcion: { campo, titulo, contenido, lenguaje } }
    }).done( descripcion => {
      // console.log('edit descripcion done data');
      // console.table(descripcion);
      dispatch({ type: 'EDIT_DESCRIPCION', descripcion });
    }).fail( data => {
      // console.log('edit descripcion fail data')
      // console.log(data);
    })
  }
}

export const deleteDescripcion = (id) => {
  // console.log(`this is delete descripcion con id: ${id}`)
  return(dispatch) => {
    $.ajax({
      url: `/api/descripcions/${id}`,
      type: 'DELETE',
      dataType: 'JSON'
    }).done( data => {
      // console.log('delete descripcion done data');
      // console.log(data);
      dispatch({ type: 'DELETE_DESCRIPCION', id });
    }).fail( data => {
      console.log(data);
    })
  }
}
