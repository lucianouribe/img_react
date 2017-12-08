export const addProyecto = (name, topic, subtopic, difficulty) => {
  console.log('this is add proyectos action');
  return(dispatch) => {
    $.ajax({
      url: `/api/proyectos`,
      type: 'POST',
      dataType: 'JSON',
      data: { proyecto: { name, topic, subtopic, difficulty } }
    }).done( proyecto => {
      console.log('add proyecto done');
      // console.table(proyecto);
      dispatch({ type: 'ADD_PROYECTO', proyecto });
    }).fail( data => {
      // console.log('add proyecto fail data')
      // console.log(data);
    })
  }

}

export const addPaso = (proyecto, step, orden, estilo) => {
  console.log('this is add paso action');
  return(dispatch) => {
    $.ajax({
      url: `/api/proyectos/${proyecto.id}/pasos`,
      type: 'POST',
      dataType: 'JSON',
      data: { paso: { step, orden, estilo } }
    }).done( data => {
      console.log('add data done data');
      console.table(data);
      dispatch({ type: 'ADD_PASO', proyecto });
    }).fail( data => {
      console.log('add paso fail data')
      console.log(data);
    })
  }

}

export const fetchProyectos = (wordToMatch) => {
  // console.log('this is fetch proyectos')
  const regex = new RegExp(wordToMatch, 'gi');

  return(dispatch) => {
    $.ajax({
      url: '/api/proyectos/',
      type: 'GET',
      dataType: 'JSON'
    }).done( proyectos => {
      if(wordToMatch === 'full') {
        dispatch({ type: 'ALL_PROYECTOS', proyectos});
      } else {
        let losProyectos = proyectos.filter( proyecto => {
          if(proyecto.name.match(regex)) return proyecto;
        })
        // console.table(losProyectos)
        dispatch({ type: 'FILTERED_PROYECTOS', losProyectos});
      }
    }).fail( data => {
      console.log('fetch proyectos fail data')
      console.log(data)
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
        // fix this?
    }).fail( data => {
      console.log('fetch pasos fail data')
      console.log(data)
    })
  }

}

export const editProyecto = (id, name, topic, subtopic, difficulty) => {
  // console.log(`this is edit proyecto con id: ${id}`)
  // console.table(id, name, topic, subtopic, difficulty)
  return(dispatch) => {
    $.ajax({
      url: `/api/proyectos/${id}`,
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

export const deleteProyecto = (id) => {
  // console.log(`this is delete proyecto con id: ${id}`)
  return(dispatch) => {
    $.ajax({
      url: `/api/proyectos/${id}`,
      type: 'DELETE',
      dataType: 'JSON'
    }).done( data => {
      // console.log('delete proyecto done data');
      // console.log(data);
      dispatch({ type: 'DELETE_PROYECTO', id });
    }).fail( data => {
      console.log(data);
    })
  }
}

export const deletePaso = (pasId, proyecto) => {
  let proId = proyecto.id
  console.log(`this is delete paso con paso id: ${pasId} y proyecto id ${proyecto.id}`)
  return(dispatch) => {
    $.ajax({
      url: `/api/proyectos/${proId}/pasos/${pasId}`,
      type: 'DELETE',
      dataType: 'JSON'
    }).done( data => {
      console.log('delete paso done');
      // console.log(data);
      // dispatch({ type: 'EDIT_PROYECTO', proyecto });
      dispatch({ type: 'DELETE_PASO', proId, pasId });
    }).fail( data => {
      console.log(data);
    })
  }
}
