const subThemes = ( state = [], action ) => {

  switch(action.type){
    case 'FETCH_SUBTHEMES':
      console.log('set subthemes reducer')
      console.log(action.subworlds)
      return action.subworlds;
      break;
    default:
      return state;
  }
}
export default subThemes;