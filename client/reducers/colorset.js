const colorset = ( state = '#fff', action ) => {

  switch(action.type){
    case 'SET_COLOR':
      // console.log('set color reducer')
      // console.log(action.farbe)
      return action.farbe;
      break;
    default:
      return state;
  }
}
export default colorset;
