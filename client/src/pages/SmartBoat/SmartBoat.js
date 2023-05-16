import React, { useCallback, useEffect, useState, useRef } from "react";
import { Stepper, Step } from "react-form-stepper";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// import useDashboard from "../Dashboard/useDashboard";
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";
import useSmartBoat from "./useSmartBoat";
import Services from "./Services.js";
import StepperForm1 from "./StepperForm/StepperForm1.js";
import StepperForm2 from "./StepperForm/StepperForm2.js";
import StepperForm4 from "./StepperForm/StepperForm4.js";
import StepperForm3 from "./StepperForm/StepperForm3.js";
import StepperForm5 from "./StepperForm/StepperForm5.js";

const useStyles = makeStyles(styles);
const videoConstraints = {
  width: 600,
  facingMode: "environment",
};
const SmartBoat1 = () => {
  const classes = useStyles();
  const {
    data,
    handleSubmit,
    setStatus,
    status,
    handleSubmitImg,
    responseData,
    ingredientRes
  } = useSmartBoat();
  // const { handleInputChange, handleSubmit, isLoading, data } = useDashboard();
  const [active, setActive] = useState(1);
  const [saveOption, setSaveOption] = React.useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState({});
  const [formData, setFormData] = useState({
    disease: ["1"],
    gender: "",
    age: "",
    weight: "",
    height: "",
  });
  const webcamRef = useRef(null);
  const [url, setUrl] = React.useState("");
  const [setUploadFile] = React.useState("");
  const [clickImg, setClickImg] = React.useState(true);
  const [showWebcam, setShowWebcam] = React.useState(false);
  const [backgroundImg, setBackgroundImg] = React.useState(true);
  const [webcamFile, setWebcamFile] = React.useState();

  const handleStep = (event) => {
    const val = event?.currentTarget?.value;
    setActive(+val);
  };

  const handleSubmitDetail = () => {
    const errName = {};
    setFormData({
      ...formData,
      // option: active,
      disease: saveOption,
    });
    if (formData.gender === "") {
      errName.gender = "Gender field is required!";
    } else if (formData.age === "") {
      errName.age = "Age field is required!";
    } else if (formData.weight === "") {
      errName.weight = "Weight field is required!";
    } else if (formData.height === "") {
      errName.height = "Height field is required!";
    } else {
      handleSubmit(formData);
      setActive(4);
    }
    setError(errName);
  };
  const handleOption = useCallback(
    (e) => {
      setStatus(true);
      setSaveOption(e.target.innerText);
      setFormData({
        ...formData,
        disease: [e.target.innerText],
      });
      handleStep(e);
    },
    [formData, setStatus]
  );

  useEffect(() => {
    if (formData.disease !== ["1"] && status) {
      handleSubmit(formData);
    }
  }, [formData, status]);

  useEffect(() => {
    if (Object.keys(error).length === 0) {
      // console.log("form", formData);
    }
  }, [Object.keys(error).length == 0]);

  function b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || "";
    sliceSize = sliceSize || 512;
    var byteCharacters = atob(b64Data);
    var byteArrays = [];
    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);
      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      var byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  const capturePhoto = React.useCallback((e) => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
    const base64Data = imageSrc;
    setClickImg(false);
    const block = base64Data.split(";");
    const contentType = block[0].split(":")[1];
    const realData = block[1].split(",")[1];

    // Convert it to a blob to upload
    const blob = b64toBlob(realData, contentType);
    const file = new File([blob], "img", { type: blob.type });
    setWebcamFile(file);
    const form = new FormData();

    form.append("img", blob, "xray_image.jpg");
    // console.log("blob",blob);
    // handleSubmitImg(file);
  }, [webcamRef]);

  const onUserMedia = (e) => {
    // console.log(e);
  };

  const handleChange = (event) => {
    setUploadFile(event.target.files[0]);
    handleSubmitImg(event.target.files[0]);
  };

  const handleVisibleWebcam = () => {
    setBackgroundImg(false);
    setShowWebcam(true);
  };

  return (
    <div>
      <div>
        {/* Select Service */}
        {!isVisible && (
          <>
            <Services setIsVisible={setIsVisible} />
          </>
        )}

        {/* Stepper form */}
        {isVisible ? (
          <>
            <Stepper activeStep={active}>
              <Step label="Step 1" value="1" />
              <Step label="Step 2" value="2" />
              <Step label="Step 3" value="3" />
              <Step label="Step 4" value="4" />
              <Step label="Step 5" value="5" />
            </Stepper>

            {/* Stepper form 1 */}
            {active === 1 ? (
              <div>
                <StepperForm1
                  data={data}
                  setStatus={setStatus}
                  setSaveOption={setSaveOption}
                  setFormData={setFormData}
                  formData={formData}
                  handleStep={handleStep}
                />
              </div>
            ) : null}

            {/* Stepper form 2 */}
            {active === 2 ? (
              <div>
                <StepperForm2
                  classes={classes}
                  error={error}
                  setFormData={setFormData}
                  formData={formData}
                  handleStep={handleStep}
                  handleSubmitDetail={handleSubmitDetail}
                />
              </div>
            ) : null}

            {/* Stepper form 3 */}
            {/* {active === 3 ? (
              <div>
                <StepperForm3 classes={classes} />
              </div>
            ) : null} */}

            {/* Stepper form 4 */}
            {active === 4 ? (
              <div>
                <StepperForm4
                  handleVisibleWebcam={handleVisibleWebcam}
                  backgroundImg={backgroundImg}
                  showWebcam={showWebcam}
                  clickImg={clickImg}
                  webcamRef={webcamRef}
                  videoConstraints={videoConstraints}
                  onUserMedia={onUserMedia}
                  url={url}
                  setUrl={setUrl}
                  setClickImg={setClickImg}
                  handleStep={handleStep}
                  capturePhoto={capturePhoto}
                  handleChange={handleChange}
                  setActive={setActive}
                  handleSubmitImg= {handleSubmitImg}
                  webcamFile={webcamFile}
                />
              </div>
            ) : null}
            {/* Stepper form 5 */}
            {active === 5 ? (
              <div>
                <StepperForm5 responseData={responseData} ingredientRes={ingredientRes} />
              </div>
            ) : null}
          </>
        ) : null}
      </div>
    </div>
  );
};
export default SmartBoat1;
