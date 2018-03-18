// ADD!!!!ADD!!!!ADD!!!!ADD!!!!ADD!!!!ADD!!!!ADD!!!!ADD!!!!ADD!!!!

export const addProyecto = (name, topic, subtopic, difficulty, orden, user_id) => {
  // console.log('this is add proyectos action');
  return(dispatch) => {
    $.ajax({
      url: `/api/proyectos`,
      type: 'POST',
      dataType: 'JSON',
      data: { proyecto: { name, topic, subtopic, difficulty, orden, user_id } }
    }).done( proyecto => {
      // console.log('add proyecto done');
      // console.log(proyecto);
      dispatch({ type: 'ADD_PROYECTO', proyecto });
    }).fail( data => {
      console.log('add proyecto fail data')
      console.log(data);
    })
  }

}

export const addPaso = (proyecto, step, orden, estilo, tutoLink, videoLink, image_link, picture) => {
  // console.log('this is add paso action');
  let proId = proyecto.id

  let formData = new FormData();
  formData.append('step', step);
  formData.append('orden', orden);
  formData.append('estilo', estilo);
  formData.append('tutoLink', tutoLink);
  formData.append('videoLink', videoLink);
  formData.append('image_link', image_link);
  formData.append('picture', picture);


  return(dispatch) => {
    $.ajax({
      url: `/api/proyectos/${proId}/pasos`,
      type: 'POST',
      data: formData,
      contentType: false,
      processData: false,
    }).done( paso => {
      // console.log('add paso done data');
      // dispatch({ type: 'ADD_PASO', paso, proId });
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
      // dispatch({ type: 'ADD_PROCOM', procom, pasId, proId });
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

// EDIT!!!!EDIT!!!!EDIT!!!!EDIT!!!!EDIT!!!!EDIT!!!!EDIT!!!!EDIT!!!!

export const editProyecto = (id, name, topic, subtopic, difficulty, orden) => {
  // console.log(`this is edit proyecto con id: ${id}`)
  return(dispatch) => {
    $.ajax({
      url: `/api/proyectos/${id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { proyecto: { name, topic, subtopic, difficulty, orden } }
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

export const editPaso = (proyectoId, id, step, orden, estilo, tutoLink, videoLink, imageLink) => {
  // console.log(`this is edit paso con id: ${id}`)
  return(dispatch) => {
    $.ajax({
      url: `/api/proyectos/${proyectoId}/pasos/${id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { paso: { step, orden, estilo, tutoLink, videoLink, imageLink } }
    }).done( paso => {
      console.log(`edit paso - ${id} - done data`);
      // console.table(paso);
      // dispatch({ type: 'EDIT_PASO', paso, pasId, proId });
    }).fail( data => {
      // console.log(data);
    })
  }
}

export const editProcom = (proId, pasId, id, pro_content, pro_style, pro_order, type_of_issue) => {
  // console.log(`this is edit procom con id: ${id}`)
  let procomId = id;
  return(dispatch) => {
    $.ajax({
      url: `/api/pasos/${pasId}/procoms/${id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { procom: { pro_content, pro_style, pro_order, type_of_issue } }
    }).done( procom => {
      // console.log(`edit procom - ${id} - done data`);
      // dispatch({ type: 'EDIT_PROCOM', procom, procomId, pasId, proId });
    }).fail( data => {
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

export const deletePaso = (pasId, proId) => {
  // let proId = proyecto.id
  console.log(`this is delete paso con id: ${pasId} y proyecto id: ${proId}`)
  return(dispatch) => {
    $.ajax({
      url: `/api/proyectos/${proId}/pasos/${pasId}`,
      type: 'DELETE',
      dataType: 'JSON'
    }).done( data => {
      console.log('delete paso done');
      // dispatch({ type: 'DELETE_PASO', proId, pasId });
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
