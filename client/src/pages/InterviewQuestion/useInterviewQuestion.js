import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { interviewQuestion } from "../../redux/actions/interviewQuestion.action";
import interviewQuestionSelectors from "../../redux/selectors/interviewQuestion.selectors";

const useInterviewQuestion =()=>{
  const dispatch = useDispatch();
  const { interviewQuestionRes } = useSelector(interviewQuestionSelectors);
  const { isLoading, data } = interviewQuestionRes;

  const [state , setState] = useState({
    query : ""
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
    dispatch(interviewQuestion(state))
  },[state, dispatch]);

  return {
    handleInputChange,
    handleSubmit,
    isLoading,
    data
  }
}
export default useInterviewQuestion;