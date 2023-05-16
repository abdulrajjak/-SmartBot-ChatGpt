import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { codeGenerator } from "../../redux/actions/codeGenerator.action";
import codeGeneratorSelectors from "../../redux/selectors/codeGenerator.selectors";

const useCodeGenerator =()=>{
  const dispatch = useDispatch();
  const { codeGeneratorRes } = useSelector(codeGeneratorSelectors);
  const { isLoading, data } = codeGeneratorRes;

  const [state , setState] = useState({
    input : ""
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
    dispatch(codeGenerator(state))
  },[state, dispatch]);

  return {
    handleInputChange,
    handleSubmit,
    isLoading,
    data
  }
}
export default useCodeGenerator;