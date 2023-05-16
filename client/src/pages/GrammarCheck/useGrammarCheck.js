import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { grammarCheck } from "../../redux/actions/grammarCheck.action";
import grammarCheckSelectors from "../../redux/selectors/grammarCheck.selectors";

const useGrammarCheck =()=>{
  const dispatch = useDispatch();
  const { grammarCheckRes } = useSelector(grammarCheckSelectors);
  const { isLoading, data } = grammarCheckRes;

  const [state , setState] = useState({
    sentence : ""
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
    dispatch(grammarCheck(state))
  },[state, dispatch]);

  return {
    handleInputChange,
    handleSubmit,
    isLoading,
    data
  }
}
export default useGrammarCheck;