const themes = ( state = [], action ) => {
  let index;
  switch(action.type){
    case 'FETCH_THEMES':
      // console.log('set themes reducer')
      // console.log(state, action);
      return action.themes;
      break;
    case 'UPDATE_THEME_POINTS':
      let allThemes = state;
      console.log(allThemes)
      index = allThemes.findIndex( c => c.id === action.theme.id)
      console.log(action.theme)
      allThemes[index] = action.theme
      console.log(allThemes)
      return [...allThemes]
      break;
    default:
      return state;
  }
}
export default themes;