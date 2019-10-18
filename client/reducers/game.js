const gameData = ( state = [], action ) => {

  switch(action.type){
    case 'FETCH_GAME_DATA':
      // console.log('set gameData reducer')
      // console.log(action.gameData)
      return action.gameData;
      break;
    default:
      return state;
  }
}
export default gameData;