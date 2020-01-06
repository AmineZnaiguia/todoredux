
import {ADD,DELETE,COMP,EDIT} from "./actiontype"

export function add(payload) {
    return {type:ADD, payload }
};
export function delet(payload) {
    return {type:DELETE, payload }
}
export const complete=(payload)=>{
    return {type:COMP, payload}
}
export const edit=(payload,id)=>{
    return {type:EDIT, payload,id}
}