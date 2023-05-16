import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as constant from "../../redux/constants/history.constant"
import {history, onChangeHistory} from "../../redux/actions/history.action";

import historySelectors from "../../redux/selectors/history.selector";



const useHistory =()=>{
  const dispatch = useDispatch();
  const {historyRes} = useSelector(historySelectors);
  const {  data } = historyRes;

useEffect(() => {
  const data = dispatch(history());
}, []);


  return {
    // isLoading,
    data
  }
}
export default useHistory;