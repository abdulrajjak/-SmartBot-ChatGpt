import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { isReqChatBoat } from "../../redux/actions/openai.action";
import openaiSelectors from "../../redux/selectors/openai.selectors";

const useDashboard =()=>{
  const dispatch = useDispatch();
  const { chatboatRes } = useSelector(openaiSelectors);
  const { isLoading, data } = chatboatRes;
  
  const [state , setState] = useState({
    chat : ""
  })

  const handleInputChange = useCallback((e)=>{
    const {name , value} = e.target;
    setState(prevState => ({
      ...prevState,
      [name] : value
    }))
  },[]);
  
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(isReqChatBoat(state))
  },[state, dispatch]);

  return {
    handleInputChange,
    handleSubmit,
    isLoading,
    data
  }
}
export default useDashboard;