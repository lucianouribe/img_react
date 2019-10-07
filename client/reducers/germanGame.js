const germanGame = ( state = [], action ) => {
  let index;
  console.log('reducer german_game');
  switch(action.type){
    case 'GERMAN_GAME':
      console.log('state', state)
      console.log('action', action.game)
      return action.game;
      break;
    // case 'ADD_GERMAN_GAME':
    //   return [action.german_game, ...state]
    //   break;
    // case 'EDIT_GERMAN_GAME':
    //   console.log('here')
    //   let allDescripcions = state;
    //   console.log(allDescripcions)
    //   index = allDescripcions.findIndex( desc => desc.id === action.german_game.id)
    //   console.log(action.german_game)
    //   allDescripcions[index] = action.german_game
    //   return [...allDescripcions]
    //   break;
    // case 'DELETE_GERMAN_GAME':
    //   index = state.findIndex( desc => desc.id === action.id)
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