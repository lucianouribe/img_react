export const addCarrusel = (name, image, infopic, role) => {
  // console.log('this is add carrusels action');
  return(dispatch) => {
    $.ajax({
      url: `/api/carrusels`,
      type: 'POST',
      dataType: 'JSON',
      data: { carrusel: { name, image, infopic, role } }
    }).done( carrusel => {
      // console.log('add carrusel done data');
      // console.table(carrusel);
      dispatch({ type: 'ADD_CARRUSEL', carrusel });
    }).fail( data => {
      console.log('add carrusel fail data')
      console.log(data);
    })
  }

}

export const fetchCarrusels = (info, picType) => {
  console.log('this is fetch carrusels')
  console.log(info)

  return(dispatch) => {
    $.ajax({
      url: '/api/carrusels/',
      type: 'GET',
      dataType: 'JSON'
    }).done( carrusels => {
      const carruselFiltered = carrusels.filter( filteredData => filteredData.role === info )
      // dispatch({ type: 'ALL_CARRUSELS', carruselFiltered});
    }).fail( data => {
      console.log('fetch carrusels fail data')
      console.log(data)
    })
  }

}

export const editCarrusel = (id, name, image, infopic, role) => {
  // console.log(`this is edit profesor con id: ${id}`)
  return(dispatch) => {
    $.ajax({
      url: `/api/carrusels/${id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { carrusel: { name, image, infopic, role } }
    }).done( carrusel => {
      // console.log('edit carrusel done data');
      // console.table(carrusel);
      dispatch({ type: 'EDIT_CARRUSEL', carrusel });
    }).fail( data => {
      console.log('edit carrusel fail data')
      console.log(data);
    })
  }
}

export const deleteCarrusel = (id) => {
  // console.log(`this is delete carrusel con id: ${id}`)
  return(dispatch) => {
    $.ajax({
      url: `/api/carrusels/${id}`,
      type: 'DELETE',
      dataType: 'JSON'
    }).done( data => {
      // console.log('delete carrusel done data');
      // console.log(data);
      dispatch({ type: 'DELETE_CARRUSEL', id });
    }).fail( data => {
      console.log('delete carrusel data')
      console.log(data);
    })
  }
}
