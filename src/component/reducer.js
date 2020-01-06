import { ADD, DELETE, COMP, EDIT} from './actiontype'

const initialState =  [{title:"aaaa",
        isCompliete : false,
        id:Math.random()}]


 const reducer=(state = initialState, action)=> {

    switch(action.type){
        case ADD :
            return state.concat(action.payload)
            // return {...state, todos[...state,todos,action.payload]}
        case DELETE :
            return state.filter(el=> el.id!==action.payload)
        case COMP :
            return state.map(el=> el.id===action.payload?{...el,isComplete:!el.isComplete}:el)
            case EDIT :
                return state.map(el=> el.id===action.id?{...el,title:action.payload}:el)
        default : 
        return state;

    }
  
}
export default reducer
