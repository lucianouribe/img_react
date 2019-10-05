const colorset = ( state = '#f4f4f4', action ) => {

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
