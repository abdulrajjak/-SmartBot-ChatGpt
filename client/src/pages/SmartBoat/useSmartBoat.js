import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as constant from "../../redux/constants/smartBoatOption.constant";
import { smartBoatOption } from "../../redux/actions/smartBoatOption.action";
import smartBoatOptionSelectors from "../../redux/selectors/smartBoatOption.selector";
import { smartBoat } from "../../redux/actions/smartBoat.action";
import smartBoatSelectors from "../../redux/selectors/smartBoat.selector";
import webcamImageSelectors from "../../redux/selectors/webcamImage.selectors";
import { webcamImage } from "../../redux/actions/webcamImage.action";
import ingredientSelectors from "../../redux/selectors/ingredient.selectors";
import { ingredient } from "../../redux/actions/ingredient.action";

const useSmartBoat = () => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState(false);
  const { smartBoatOptionRes } = useSelector(smartBoatOptionSelectors);
  const { isLoading, data } = smartBoatOptionRes;
  const { smartBoatRes } = useSelector(smartBoatSelectors);
  const { isLoading: loading, data: formData } = smartBoatRes;
  const { webcamImageRes } = useSelector(webcamImageSelectors);
  const { webcamData } = webcamImageRes;
  const { responseData } = useSelector(webcamImageSelectors);
  const { ingredientRes } = useSelector(ingredientSelectors);
  useEffect(() => {
    const data = dispatch(smartBoatOption());
    //  dispatch(ingredient());
  }, []);
  const getListData = useCallback(() => {
    dispatch(smartBoatOption());
    const smartboatoption = data;
  }, [{ smartboatoption: data }, dispatch]);

  const handleSubmit = useCallback(
    (formData) => {
      dispatch(smartBoat({ smartboat: formData }));
      setTimeout(() => {
        setStatus(false);
      }, 2000);
    },
    [{ smartboat: formData }, dispatch]
  );

  const handleSubmitImg = useCallback((webcamData) => {
    dispatch(webcamImage({ webcamImage: webcamData }));
  }, [{ webcamImage: webcamData }, dispatch]);

  return {
    handleSubmit,
    getListData,
    isLoading,
    data,
    status,
    setStatus,
    handleSubmitImg,
    responseData,
    ingredientRes,
  };
};
export default useSmartBoat;
