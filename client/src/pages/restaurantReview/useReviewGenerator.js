import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { reviewGenerator } from "../../redux/actions/reviewGenerator.action";
import reviewGeneratorSelectors from "../../redux/selectors/reviewGenerator.selector";

const useReviewGenerator =()=>{
  const dispatch = useDispatch();
  const { reviewGeneratorRes } = useSelector(reviewGeneratorSelectors);
  const { isLoading, data } = reviewGeneratorRes;

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
    dispatch(reviewGenerator(state))
  },[state, dispatch]);

  return {
    handleInputChange,
    handleSubmit,
    isLoading,
    data
  }
}
export default useReviewGenerator;