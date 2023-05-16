import React, { useState } from "react";
import Webcam from "react-webcam";
// core component
import Button from "../../../components/CustomButtons/Button.js";
import GridItem from "../../../components/Grid/GridItem.js";
import GridContainer from "../../../components/Grid/GridContainer.js";

// Image
import ScanImg from "../../../assets/img/scan-product.png";
import Capture from "../../../assets/img/capture.svg";
import DropImg from "../../../assets/img/drop-img.svg";

const StepperForm4 = ({
  handleVisibleWebcam,
  backgroundImg,
  showWebcam,
  clickImg,
  webcamRef,
  videoConstraints,
  onUserMedia,
  url,
  setUrl,
  setClickImg,
  handleStep,
  capturePhoto,
  handleChange,
  setActive,
  handleSubmitImg,
  webcamFile,
}) => {
  const [saveUploadImg, setSaveUploadImg] = useState();
  const [error, setError] = useState("");

  const handlSubmitForm = () => {
    const form = new FormData();
    if(saveUploadImg){
      form.append("img", saveUploadImg);
      handleSubmitImg(form);
      setActive(5);
    }else if(webcamFile) {
      form.append("img", webcamFile);
      handleSubmitImg(form);
      setActive(5);
    }
    else if(!saveUploadImg && !webcamFile){
      setError("Please attched the Image file or create from webcam!");
    }
    
  };
  return (
    <>
      <div className="option-page">
        <form onSubmit={handlSubmitForm}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div className="content-heading">
                <h3 className="text-white">Scan Your Product or Upload</h3>
              </div>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={7}>
              <div className="scan-img">
                {backgroundImg && (
                  <>
                    <img src={ScanImg} alt="scanImg" />
                    <span onClick={handleVisibleWebcam}>
                      <img
                        alt="captureImg"
                        src={Capture}
                        className="scan-icon"
                      />
                    </span>
                  </>
                )}
                {showWebcam && clickImg && (
                  <Webcam
                    name="img"
                    ref={webcamRef}
                    audio={false}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                    onUserMedia={onUserMedia}
                  />
                )}
                {url && (
                  <div>
                    <img src={url} alt="Screenshot" />
                  </div>
                )}
                {showWebcam && (
                  <>
                    <Button className="btn-primary" onClick={capturePhoto}>
                      Capture
                    </Button>
                    <Button
                      className="btn-primary"
                      onClick={() => {
                        setUrl(null);
                        setClickImg(true);
                      }}
                    >
                      Refresh
                    </Button>
                  </>
                )}
              </div>
              <div className="or-text">
                <span className="text-white">or</span>
              </div>
              <div className="drop-img-section">
                <img alt="dropImg" src={DropImg} />
                <h5 className="text-white mt-10">
                  Select a file or drag and drop here
                </h5>
                <h6 className="text-white">
                  JPG or PNG, file size no more than 10MB
                </h6>
                <label className="button-label">
                  {" "}
                  Select file
                  <input
                    type="file"
                    name="img"
                    onChange={(e) => setSaveUploadImg(e.target.files[0])}
                  />
                </label>
                <span className="text-white selected-file">
                  {" "}
                  {saveUploadImg?.name}{" "}
                </span>
              </div>
            </GridItem>
          </GridContainer>
        </form>
      </div>
      {/* bottom buttons */}
      <div className="option-page bottom-button">
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <div className="move-buttons">
              <Button
                value="2"
                onClick={(e) => handleStep(e)}
                className="btn-white"
              >
                Back
              </Button>
              <Button
                className="btn-primary"
                onClick={() => {
                  handlSubmitForm();
                  // setActive(5);
                }}
                // disabled={saveUploadImg &&  ? (false) : (true)}
                // {!saveUploadImg ? ("") : (disabled)} 
              >
                Next
              </Button>
            </div>
            {error ? <strong className="errorText">{error}</strong> : ""}
          </GridItem>
        </GridContainer>
      </div>
    </>
  );
};

export default StepperForm4;
