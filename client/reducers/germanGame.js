const germanGame = ( state = {}, action ) => {
  let index;
  // console.log('reducer german_game');
  switch(action.type){
    case 'GERMAN_GAME':
      // console.log('state', state)
      // console.log('action', action.game)
      return action.game;
      break;
    // case 'ADD_GERMAN_GAME':
    //   return [action.german_game, ...state]
    //   break;
    // case 'UPDATE_GERMAN_GAME':
    //   let allGermanGames = state;
    //   index = allGermanGames.findIndex( gg => gg.id === action.game.id)
    //   allGermanGames[index] = action.game
    //   return [...allGermanGames]
    //   break;
    // case 'DELETE_GERMAN_GAME':
    //   index = state.findIndex( gg => gg.id === action.id)
    //   return [
    //     ...state.slice(0, index),
    //     ...state.slice(index + 1)
    //   ]
    //   break;
    default:
      return state;
  }
}

export default germanGame;