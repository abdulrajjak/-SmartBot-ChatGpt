import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

import CustomLoader from "../../../components/CustomLoader";
import CustomNotification from "../../../components/CustomNotification/CustomNotification";
import {
  isVerifyEmail,
} from "../../../redux/actions/auth.action";
import authSelectors from "../../../redux/selectors/auth.selectors";

const VerifyEmail = () =>{
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ searchParams ] = useSearchParams();
  const token = searchParams.get('token');

  const { verifiedEmail } = useSelector(authSelectors);
  const { isSuccessful } = verifiedEmail;
  useEffect(() =>{
    if(isSuccessful){
      navigate('/login')
    }else{
      dispatch(isVerifyEmail(token));
    }
  })

  return(
    <>
      <CustomLoader/>
      <CustomNotification />
    </>
  )
}
export default VerifyEmail;