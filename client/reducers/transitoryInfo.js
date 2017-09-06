const transitoryInfo = ( state = [], action ) => {
  console.log('transitoryInfo reducer');
  console.log(state, action);
  console.log('here');
  switch(action.type){
    case 'TRANSITORY_INFO':
      console.log('set transitory info reducer')
      console.log(action.filtered)
      return action.filtered;
      break;
    default:
      return state;
  }
}
export default transitoryInfo;
