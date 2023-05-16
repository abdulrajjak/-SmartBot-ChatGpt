import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as constant from "../../redux/constants/friendChat.constant"
import {friendChat, onChangeChat} from "../../redux/actions/friendChat.action";

import sqlGeneratorSelectors from "../../redux/selectors/sqlGenerator.selectors";
import friendChatSelectors from "../../redux/selectors/friend.selector";



const useFriendChat =()=>{
  const dispatch = useDispatch();
  const {friendChatRes } = useSelector(friendChatSelectors);
  const { isLoading, data } = friendChatRes;


  const handleInputChange = useCallback((e)=>{
    const {value} = e.target;
    dispatch(onChangeChat(value))
    
  },[]);
  
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(friendChat({chat : data}))
  },[{chat : data}, dispatch]);

  return {
    handleInputChange,
    handleSubmit,
    isLoading,
    data
  }
}
export default useFriendChat;