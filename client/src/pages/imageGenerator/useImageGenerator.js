import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { imageGenerator } from "../../redux/actions/imageGenerator.action";
import imageGeneratorSelectors from "../../redux/selectors/imageGenerator.selector";

const useImageGenerator =()=>{
  const dispatch = useDispatch();
  const { imageGeneratorRes } = useSelector(imageGeneratorSelectors);
  const { isLoading, data } = imageGeneratorRes;

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
    dispatch(imageGenerator(state))
  },[state, dispatch]);

  return {
    handleInputChange,
    handleSubmit,
    isLoading,
    data
  }
}
export default useImageGenerator;