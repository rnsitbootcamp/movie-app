import { combineReducers } from 'redux';


export default combineReducers({
    auth: ()=>{
        console.log("auth reducer called");
        return true;
    }
});