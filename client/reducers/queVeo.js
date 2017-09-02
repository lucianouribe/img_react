const queVeo = ( state = 'portada', action ) => {

  switch(action.type){
    case 'SET_QUE_VEO':
      console.log('set que veo reducer')
      console.log(action.info)
      return action.info;
      break;
    default:
      return state;
  }
}
export default queVeo;
