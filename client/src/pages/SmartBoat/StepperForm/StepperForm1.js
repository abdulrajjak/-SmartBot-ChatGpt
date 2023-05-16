import React, { useCallback, useState } from "react";
// core component
import Button from "../../../components/CustomButtons/Button.js";
import GridItem from "../../../components/Grid/GridItem.js";
import GridContainer from "../../../components/Grid/GridContainer.js";
import Card from "../../../components/Card/Card.js";
import CardHeader from "../../../components/Card/CardHeader.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardFooter from "../../../components/Card/CardFooter.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};
const useStyles = makeStyles(styles);

const StepperForm1 = ({
  data,
  setStatus,
  setSaveOption,
  setFormData,
  formData,
  handleStep,
}) => {
  const [error, setError] = useState("");
  const classes = useStyles();
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

  const handleOptionByText = useCallback(
    (e) => {
      if (formData.disease[0] === "1") {
        setError("Option field is required!");
      } else {
        setStatus(true);
        handleStep(e);
      }
    },
    [formData, setStatus]
  );

  return (
    <div className="option-page">
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <div className="content-heading">
            <h3 className="text-white">
              Please select from the following options
            </h3>
          </div>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <div className="option-boxes">
            {data?.map((item, key) => {
              return (
                <Button
                  className="options btn-none btn-default"
                  name="disease"
                  value="2"
                  key={key}
                  onClick={(e) => handleOption(e)}
                >
                  {item}
                </Button>
              );
            })}
          </div>
        </GridItem>
        <GridItem>
          <div className="option-new">
            <h4 className="text-white">Please enter here Option</h4>
            <div className="option-inner">
              <input
                placeholder="Enter option value"
                type="text"
                name="disease"
                onChange={(e) => {
                  setSaveOption(e.target.value);
                  setFormData({
                    ...formData,
                    disease: [e.target.value],
                  });
                }}
              />

              <Button
                type="button"
                className="btn-primary ml-5"
                value="2"
                onClick={(e) => handleOptionByText(e)}
              >
                Submit
              </Button>
            </div>
            {error ? <strong className="errorText">{error}</strong> : ""}
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default StepperForm1;
