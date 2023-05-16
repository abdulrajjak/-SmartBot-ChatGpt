import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { sqlGenerator } from "../../redux/actions/sqlGenerator.action";
import sqlGeneratorSelectors from "../../redux/selectors/sqlGenerator.selectors";

const useSqlGenerator =()=>{
  const dispatch = useDispatch();
  const { sqlGeneratorRes } = useSelector(sqlGeneratorSelectors);
  const { isLoading, data } = sqlGeneratorRes;

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
    dispatch(sqlGenerator(state))
  },[state, dispatch]);

  return {
    handleInputChange,
    handleSubmit,
    isLoading,
    data
  }
}
export default useSqlGenerator;