import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
// import { makeStyles } from "@material-ui/core/styles";
// import AddAlert from "@material-ui/icons/AddAlert";
import Snackbar from "../Snackbar/Snackbar";
import customNotificationSelectors from "../../redux/selectors/customNotification.selectors";

const CustomNotification = () => {
 
  const { notification } = useSelector(customNotificationSelectors);
  const {text, type } = notification;
  
  const [open, setOpen] = useState(false);
  
  const showNotification = () => {
    setOpen(true);
    setTimeout(function () {
      setOpen(false);
    }, 2000);
  }
  const closeNotification = () => {
    setOpen(false);
  }
  useEffect(() => {
    if(text){
      showNotification();
    }
  },[text]);
  return (
     <Snackbar
      place="tr"
      color={type}
      message={text}
      open={open}
      closeNotification={() => closeNotification() }
      close
    />
  )
}
export default CustomNotification;