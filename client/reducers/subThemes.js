const subThemes = ( state = [], action ) => {
  let index;
  switch(action.type){
    case 'FETCH_SUBTHEMES':
      // console.log('set subthemes reducer')
      // console.log(state, action);
      return action.subthemes;
      break;
    case 'UPDATE_SUBTHEME_POINTS':
      let allSubThemes = state;
      index = allSubThemes.findIndex( c => c.id === action.subtheme.id)
      allSubThemes[index] = action.subtheme
      return [...allSubThemes]
      break;
    default:
      return state;
  }
}
export default subThemes;