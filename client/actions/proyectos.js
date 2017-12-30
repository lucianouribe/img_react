
// ADD!!!!ADD!!!!ADD!!!!ADD!!!!ADD!!!!ADD!!!!ADD!!!!ADD!!!!ADD!!!!

export const addProyecto = (name, topic, subtopic, difficulty, order) => {
  // console.log('this is add proyectos action');
  // console.log('front end paso 2')
  // debugger;
  return(dispatch) => {
    $.ajax({
      url: `/api/proyectos`,
      type: 'POST',
      dataType: 'JSON',
      data: { proyecto: { name, topic, subtopic, difficulty, order } }
    }).done( proyecto => {
      // console.log('add proyecto done');
      // console.log(proyecto);
      // debugger;
      dispatch({ type: 'ADD_PROYECTO', proyecto });
    }).fail( data => {
      console.log('add proyecto fail data')
      console.log(data);
    })
  }

}

export const addPaso = (proyecto, step, orden, estilo, tutoLink, videoLink, imageLink) => {
  // console.log('this is add paso action');
  let proId = proyecto.id
  return(dispatch) => {
    $.ajax({
      url: `/api/proyectos/${proId}/pasos`,
      type: 'POST',
      dataType: 'JSON',
      data: { paso: { step, orden, estilo, tutoLink, videoLink, imageLink } }
    }).done( paso => {
      // console.log('add paso done data');
      // console.table(paso);
      dispatch({ type: 'ADD_PASO', paso, proId });
    }).fail( data => {
      console.log('add paso fail data')
      console.log(data);
    })
  }

}

export const addProcom = (proId, pasId, pro_content, pro_style, pro_order, type_of_issue) => {
  return(dispatch) => {
    $.ajax({
      url: `/api/pasos/${pasId}/procoms`,
      type: 'POST',
      dataType: 'JSON',
      data: { procom: { pro_content, pro_style, pro_order, type_of_issue } }
    }).done( procom => {
      // console.log('add procom done data');
      // console.log(procom);
      dispatch({ type: 'ADD_PROCOM', procom, pasId, proId });
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
          if(
            proyecto.name.match(regex) ||
            proyecto.topic.match(regex) ||
            proyecto.subtopic.match(regex) ||
            proyecto.difficulty.match(regex)
          ) return proyecto;
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


export const fetchPasos = (proyecto) => {
  // console.log('this is fetch pasos')
  // console.log(proyecto)

  return(dispatch) => {
    $.ajax({
      url: `/api/proyectos/${proyecto.id}/`,
      type: 'GET',
      dataType: 'JSON'
    }).done( pasos => {
        // console.log('fetch pasos success')
        dispatch({ type: 'ALL_PASOS', pasos, proyecto});
        // fix this?
    }).fail( data => {
      console.log('fetch pasos fail data')
      console.log(data)
    })
  }

}

export const fetchProcoms = (proyecto, paso) => {
  // console.log('this is fetch pasos')

  return(dispatch) => {
    $.ajax({
      url: `/api/proyectos/${proyecto.id}/pasos/${paso.id}/`,
      type: 'GET',
      dataType: 'JSON'
    }).done( procoms => {
        // console.log('fetch procoms success')
        dispatch({ type: 'ALL_PROCOMS', procoms, paso, proyecto});
    }).fail( data => {
      console.log('fetch pasos fail data')
      console.log(data)
    })
  }

}

// EDIT!!!!EDIT!!!!EDIT!!!!EDIT!!!!EDIT!!!!EDIT!!!!EDIT!!!!EDIT!!!!

export const editProyecto = (id, name, topic, subtopic, difficulty, order) => {
  // console.log(`this is edit proyecto con id: ${id}`)
  // console.log(id, name, topic, subtopic, difficulty, order)
  return(dispatch) => {
    $.ajax({
      url: `/api/proyectos/${id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { proyecto: { name, topic, subtopic, difficulty, order } }
    }).done( proyecto => {
      // console.log(`edit proyecto - ${id} - done data`);
      // console.log(proyecto);
      dispatch({ type: 'EDIT_PROYECTO', proyecto });
    }).fail( data => {
      console.log('edit proyecto fail data')
      // console.log(data);
    })
  }
}

export const editPaso = (proyecto, id, step, orden, estilo, tutoLink, videoLink, imageLink) => {
  // console.log(`this is edit paso con id: ${id}`)
  // console.log(id, step, orden, estilo)
  let proId = proyecto.id
  let pasId = id
  return(dispatch) => {
    $.ajax({
      url: `/api/proyectos/${proyecto.id}/pasos/${id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { paso: { step, orden, estilo, tutoLink, videoLink, imageLink } }
    }).done( paso => {
      // console.log(`edit paso - ${id} - done data`);
      // console.table(paso);
      dispatch({ type: 'EDIT_PASO', paso, pasId, proId });
    }).fail( data => {
      // console.log('edit proyecto fail data')
      // console.log(data);
    })
  }
}

export const editProcom = (proId, pasId, id, pro_content, pro_style, pro_order, type_of_issue) => {
  // console.log(`this is edit paso con id: ${id}`)
  // step 2
  console.log(id, pro_content, pro_style, pro_order, type_of_issue)
  return(dispatch) => {
    $.ajax({
      url: `/api/pasos/${pasId}/procoms/${id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { procom: { pro_content, pro_style, pro_order, type_of_issue } }
    }).done( procom => {
      console.log(`edit procom - ${id} - done data`);
      // console.table(procom);
      dispatch({ type: 'EDIT_PROCOM', procom, pasId, proId });
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
  // debugger;
  // console.log(`this is delete paso con id: ${pasId} y proyecto id: ${proyecto.id}`)
  return(dispatch) => {
    $.ajax({
      url: `/api/proyectos/${proId}/pasos/${pasId}`,
      type: 'DELETE',
      dataType: 'JSON'
    }).done( data => {
      // console.log('delete paso done');
      // debugger;
      // console.log(data);
      // dispatch({ type: 'EDIT_PROYECTO', proyecto });
      dispatch({ type: 'DELETE_PASO', proId, pasId });
    }).fail( data => {
      console.log(data);
    })
  }
}
export const deleteProcom = (procomId, pasoId, proyectoId) => {
  // console.log(`this is delete procom con id: ${procomId} y paso id: ${pasoId}`)
  return(dispatch) => {
    $.ajax({
      url: `/api/pasos/${pasoId}/procoms/${procomId}`,
      type: 'DELETE',
      dataType: 'JSON'
    }).done( data => {
      console.log('delete procom done');
      // console.log(data);
      // dispatch({ type: 'EDIT_PROYECTO', proyecto });
      dispatch({ type: 'DELETE_PROCOM', procomId, pasoId, proyectoId });
    }).fail( data => {
      console.log(data);
    })
  }
}
