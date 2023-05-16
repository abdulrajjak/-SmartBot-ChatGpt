import React, { useEffect, useRef, useState } from "react";

import Webcam from "react-webcam";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// core components
import CustomLoader from "../../components/CustomLoader";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Button.js";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";

import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import useDashboard from "../Dashboard/useDashboard";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";
import "./webcam.css";
const useStyles = makeStyles(styles);
const videoConstraints = {
    width: 300,
    facingMode: "environment"
  };
const WebcamTest = () => {
  const classes = useStyles();
  const { handleInputChange, handleSubmit, isLoading, data } = useDashboard();

const webcamRef = useRef(null);
  const [url, setUrl] = React.useState("");

// Convert a Base64-encoded string to a File object
//  function base64StringtoFile (base64String, fileName) {
//   var arr = base64String.split(','), mime = arr[0].match(/:(.*?);/)[1],
//     bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n)
//   while (n--) {
//     u8arr[n] = bstr.charCodeAt(n)
//   }
//   return new File([u8arr], fileName, {type: mime})
// }



  const capturePhoto = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
    const base64Data = imageSrc;
    const splitText = base64Data.split(",");
    const base64Response = await fetch(`data:image/jpeg;base64,${splitText[1]}`);
// const blob = await fetch(`data:image/jpeg;base64,${splitText[1]}`).then(res => res.blob());
const blob = await base64Response.blob();
const formData = new FormData();
formData.append('file', blob);
// formData.append('url', newUrl);
console.log("datas",formData);
console.log("blob",blob)

  }, [webcamRef]);
 
  const onUserMedia = (e) => {
    console.log(e);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>WebCams image</h4>
              <p className={classes.cardCategoryWhite}>Ask your question sds</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={8}>
                  <p className={classes.description}>{data}</p>

                  <Webcam
                    ref={webcamRef}
                    audio={false}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                    onUserMedia={onUserMedia}
                />
                <button onClick={capturePhoto}>Capture</button>
                <button onClick={() => setUrl(null)}>Refresh</button>
                {url && (
                    <div>
                    <img src={url} alt="Screenshot" />
                    </div>
                )}




                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter stats>
              {isLoading ? (
                <CustomLoader color="text-primary" />
              ) : (
                <Button
                  type="button"
                  color="primary"
                  className="form__custom-button"
                  onClick={(e) => handleSubmit(e)}
                >
                  Submit
                </Button>
              )}
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};
export default WebcamTest;
