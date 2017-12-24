const mymemory = ( state = [], action ) => {

  switch(action.type){
    case 'SET_MEMO_PROYECT':
      // console.log('SET_MEMO_PROYECT')
      // console.log(action.enlightme)

      const newArray = state;
      const newArray2 = newArray.concat(action.enlightme)
      const newArray3 = newArray.filter(elected => elected['id'] !== action.enlightme["id"])
      const newArray4 = newArray3.concat(action.enlightme)

      return newArray4;
      break;
    case 'SET_MEMO_PASO':
      // console.log('SET_MEMO_PASO')
      // console.log(action.enlightme)
      // return action.enlightme;
      break;
    default:
      return state;
  }
}
export default mymemory;
