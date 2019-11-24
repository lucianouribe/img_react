const fails = ( state = 0, action ) => {

  switch(action.type){
    case 'FAILS':
      return action.fails;
      break;
    default:
      return state;
  }
}
export default fails;
