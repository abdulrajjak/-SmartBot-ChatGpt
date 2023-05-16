import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isRegister,
} from "../../../redux/actions/auth.action";
import authSelectors from "../../../redux/selectors/auth.selectors";

const useRegister =()=>{
  
  const dispatch = useDispatch();
  const { logedIn } = useSelector(authSelectors);
  const { isLoading } = logedIn;
 
  const [state , setState] = useState({
    name: "",
    email : "",
    password : ""
  })

  const handleInputChange = useCallback((e)=>{
    const {name , value} = e.target;
    setState(prevState => ({
      ...prevState,
      [name] : value
    }))
  },[]);

  const handleRegister = useCallback((e) => {
    e.preventDefault();
    dispatch(isRegister(state));
  },[dispatch, state]);

  return {
    state,
    handleInputChange,
    handleRegister,
    isLoading,
  }
}

export default useRegister;