const reseter = ( state = true, action ) => {

  switch(action.type){
    case 'RESET':
      return action.info;
      break;
    default:
      return state;
  }
}
export default reseter;
