
// ADD!!!!ADD!!!!ADD!!!!ADD!!!!ADD!!!!ADD!!!!ADD!!!!ADD!!!!ADD!!!!

export const addProyecto = (name, topic, subtopic, difficulty, order) => {
  console.log('this is add proyectos action');
  return(dispatch) => {
    $.ajax({
      url: `/api/proyectos`,
      type: 'POST',
      dataType: 'JSON',
      data: { proyecto: { name, topic, subtopic, difficulty, order } }
    }).done( proyecto => {
      console.log('add proyecto done');
      console.log(proyecto);
      dispatch({ type: 'ADD_PROYECTO', proyecto });
    }).fail( data => {
      console.log('add proyecto fail data')
      console.log(data);
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

export const addProcom = (paso, pro_content, pro_style, pro_order, type_of_issue) => {
  console.log('this is add procom action');
  return(dispatch) => {
    $.ajax({
      url: `/api/pasos/${paso.id}/procoms`,
      type: 'POST',
      dataType: 'JSON',
      data: { procom: { pro_content, pro_style, pro_order, type_of_issue } }
    }).done( procom => {
      console.log('add procom done data');
      console.log(procom);
      // dispatch({ type: 'ADD_PASO', proyecto });
    }).fail( data => {
      console.log('add procom fail data')
      console.log(data);
    })
  }

}

// FETCH!!!!FETCH!!!!FETCH!!!!FETCH!!!!FETCH!!!!FETCH!!!!FETCH!!!!FETCH!!!!

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

// EDIT!!!!EDIT!!!!EDIT!!!!EDIT!!!!EDIT!!!!EDIT!!!!EDIT!!!!EDIT!!!!

export const editProyecto = (id, name, topic, subtopic, difficulty, order) => {
  // console.log(`this is edit proyecto con id: ${id}`)
  // console.table(id, name, topic, subtopic, difficulty)
  return(dispatch) => {
    $.ajax({
      url: `/api/proyectos/${id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { proyecto: { name, topic, subtopic, difficulty, order } }
    }).done( proyecto => {
      console.log('edit proyecto done data');
      console.log(proyecto);
      dispatch({ type: 'EDIT_PROYECTO', proyecto });
    }).fail( data => {
      console.log('edit proyecto fail data')
      // console.log(data);
    })
  }
}

export const editPaso = (proyecto, id, step, orden, estilo) => {
  console.log(`this is edit paso con id: ${id}`)
  console.table(id, step, orden, estilo)
  return(dispatch) => {
    $.ajax({
      url: `/api/proyectos/${proyecto.id}/pasos/${id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { paso: { step, orden, estilo } }
    }).done( paso => {
      console.log('edit paso done data');
      console.table(paso);
      dispatch({ type: 'EDIT_PASO', paso });
    }).fail( data => {
      // console.log('edit proyecto fail data')
      // console.log(data);
    })
  }
}

export const editProcom = (paso, id, pro_content, pro_style, pro_order, type_of_issue) => {
  console.log(`this is edit paso con id: ${id}`)
  console.table(id, pro_content, pro_style, pro_order, type_of_issue)
  return(dispatch) => {
    $.ajax({
      url: `/api/pasos/${paso.id}/procoms/${id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { procom: { pro_content, pro_style, pro_order, type_of_issue } }
    }).done( procom => {
      console.log('edit procom done data');
      console.table(procom);
      dispatch({ type: 'EDIT_PROCOM', procom });
    }).fail( data => {
      // console.log('edit proyecto fail data')
      // console.log(data);
    })
  }
}

// DELETE!!!!DELETE!!!!DELETE!!!!DELETE!!!!DELETE!!!!DELETE!!!!

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
  // console.log(`this is delete paso con id: ${pasId} y proyecto id: ${proyecto.id}`)
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
export const deleteProcom = (procomId, pasoId) => {
  console.log(`this is delete procom con id: ${procomId} y paso id: ${pasoId}`)
  return(dispatch) => {
    $.ajax({
      url: `/api/pasos/${pasoId}/procoms/${procomId}`,
      type: 'DELETE',
      dataType: 'JSON'
    }).done( data => {
      console.log('delete procom done');
      // console.log(data);
      // dispatch({ type: 'EDIT_PROYECTO', proyecto });
      dispatch({ type: 'DELETE_PROCOM', pasoId, procomId });
    }).fail( data => {
      console.log(data);
    })
  }
}
