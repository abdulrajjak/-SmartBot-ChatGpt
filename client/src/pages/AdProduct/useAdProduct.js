import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { adProduct } from "../../redux/actions/adProduct.action";
import adProductSelectors from "../../redux/selectors/adProduct.selectors";

const useAdProduct =()=>{
  const dispatch = useDispatch();
  const { adProductRes } = useSelector(adProductSelectors);
  const { isLoading, data } = adProductRes;

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
    dispatch(adProduct(state))
  },[state, dispatch]);

  return {
    handleInputChange,
    handleSubmit,
    isLoading,
    data
  }
}
export default useAdProduct;