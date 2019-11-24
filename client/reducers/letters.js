const letters = ( state = '', action ) => {

  switch(action.type){
    case 'LETTERS':
      return action.letters;
      break;
    default:
      return state;
  }
}
export default letters;
