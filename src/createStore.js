export function createStore(rootReducer, initionalState){
  let state = rootReducer(initionalState, {type: '__INIT__'})
  
  const subscribers = []
  return {
    dispatch(action){
      state = rootReducer(state, action)
      subscribers.forEach(sub=>sub())
    },
    subscribe(callback){
      subscribers.push(callback)
    },
    getState(){
      return state

    }

  }
}
