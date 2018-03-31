const mymemory = ( state = null, action ) => {
  let newArray = [];
  let tempArray = [];

  switch(action.type){
    case 'ADD_MEMORY':
      // console.log('add memory reducer')
      if(state === null) {
        // console.log("memoryBankFunction | i'm an empty array")
        tempArray = []
        newArray = tempArray.concat(action.whoAmI)
      } else {
        // console.log("memoryBankFunction | i have something inside")
        tempArray = state.filter(elected => elected['id'] !== action.whoAmI["id"])
        newArray = tempArray.concat(action.whoAmI)
      }
      return newArray;
      break;
    default:
      return state;
  }
}
export default mymemory;
