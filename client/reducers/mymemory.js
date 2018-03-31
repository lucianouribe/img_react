const mymemory = ( state = null, action ) => {
  let newArray = [];
  let tempArray = [];

  switch(action.type){
    case 'SET_MEMO_PROYECT':
      // console.log('SET_MEMO_PROYECT')
      // console.log(action.enlightme)

      // const newArray = state;
      // const newArray2 = newArray.concat(action.enlightme)
      // const newArray3 = newArray.filter(elected => elected['id'] !== action.enlightme["id"])
      // const newArray4 = newArray3.concat(action.enlightme)
      //
      // return newArray4;
      break;
    case 'SET_MEMO_PASO':
      // console.log('SET_MEMO_PASO')
      // console.log(action.enlightme)
      // return action.enlightme;
      break;
    case 'ADD_MEMORY':
      // console.log('add memory reducer')
      // console.log(action.memoryState)
      if(state === null) {
        // console.log("memoryBankFunction | i'm an empty array")
        tempArray = []
        newArray = tempArray.concat(action.memoryState)
      } else {
        // console.log("memoryBankFunction | i have something inside")
        tempArray = state.filter(elected => elected['id'] !== action.memoryState["id"])
        newArray = tempArray.concat(action.memoryState)
      }
      return newArray;
      // return action.doorStatus;
      // return [action.doorStatus, ...state];
      break;
    default:
      return state;
  }
}
export default mymemory;
