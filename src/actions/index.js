import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getWord = () => {
  return (dispatch)=> {
    dispatch(fetchStart());

    axios.get("https://random-word-form.herokuapp.com/random/noun")
        .then(resp=> {
          console.log("res---pri",resp.data);
          dispatch(fetchSuccess(resp.data));
        })
        .catch(err=>{
          dispatch(fetchFail(err));
        });

  }
    
}

export const fetchStart = ()=>{
  return({type: FETCH_START});
}

export const fetchSuccess = (word)=> {
  return({type: FETCH_SUCCESS, payload: word});
} 

export const fetchFail = (error)=> {
  return({type: FETCH_FAIL, payload: error});
}
    