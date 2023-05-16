import React from "react";
// core component
import Button from "../../../components/CustomButtons/Button.js";
import GridItem from "../../../components/Grid/GridItem.js";
import GridContainer from "../../../components/Grid/GridContainer.js";
// @material-ui/core
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {StepperForm2GenderOption, StepperForm2AgeOption, StepperForm2WeightOption, StepperForm2HeightOption} from "../../../utils/constants"


const StepperForm2 = ({classes, error, setFormData, formData, handleStep, handleSubmitDetail}) => {
    const {male, female} = StepperForm2GenderOption;
    const {option1, option2} = StepperForm2AgeOption;
    const {weight1, weight2} = StepperForm2WeightOption;
    const {height1, height2} = StepperForm2HeightOption;
    return (
    <>
      <div className="option-page">
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <div className="content-heading">
              <h3 className="text-white">Enter your details</h3>
            </div>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <div className="select-boxes">
              <div>
                <h6 className="text-white mb-5">
                  Select Gender <span className="requiredField">*</span>
                </h6>
                <Select
                  value={formData.gender}
                  name="gender"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      gender: e.target.value,
                    });
                  }}
                  displayEmpty
                  className={classes.selectEmpty + " " + "select-default"}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Gender</em>
                  </MenuItem>
                  <MenuItem value="male">{male}</MenuItem>
                  <MenuItem value="female">{female}</MenuItem>
                </Select>
                {error.gender ? (
                  <strong className="errorText">{error.gender}</strong>
                ) : (
                  ""
                )}
              </div>

              <div>
                <h6 className="text-white mb-5">
                  Select Age <span className="requiredField">*</span>
                </h6>
                <Select
                  value={formData.age}
                  name="age"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      age: e.target.value,
                    });
                  }}
                  displayEmpty
                  className={classes.selectEmpty + " " + "select-default"}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Age</em>
                  </MenuItem>
                  <MenuItem value="30">{option1}</MenuItem>
                  <MenuItem value="40">{option2}</MenuItem>
                </Select>
                {error.age ? (
                  <strong className="errorText">{error.age}</strong>
                ) : (
                  ""
                )}
              </div>

              <div>
                <h6 className="text-white mb-5">
                  Select Weight <span className="requiredField">*</span>
                </h6>
                <Select
                  value={formData.weight}
                  name="weight"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      weight: e.target.value,
                    });
                  }}
                  displayEmpty
                  className={classes.selectEmpty + " " + "select-default"}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Weight</em>
                  </MenuItem>
                  <MenuItem value="10">{weight1}</MenuItem>
                  <MenuItem value="20">{weight2}</MenuItem>
                </Select>
                {error.weight ? (
                  <strong className="errorText">{error.weight}</strong>
                ) : (
                  ""
                )}
              </div>

              <div>
                <h6 className="text-white mb-5">
                  Select Height <span className="requiredField">*</span>
                </h6>
                <Select
                  value={formData.height}
                  name="height"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      height: e.target.value,
                    });
                  }}
                  displayEmpty
                  className={classes.selectEmpty + " " + "select-default"}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Height</em>
                  </MenuItem>
                  <MenuItem value="10">{height1}</MenuItem>
                  <MenuItem value="20">{height2}</MenuItem>
                </Select>
                {error.height ? (
                  <strong className="errorText">{error.height}</strong>
                ) : (
                  ""
                )}
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>

      <div className="option-page bottom-button">
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <div className="move-buttons">
              <Button
                className="btn-white"
                value="1"
                onClick={(e) => handleStep(e)}
              >
                Back
              </Button>
              <Button className="btn-primary" onClick={handleSubmitDetail}>
                Next
              </Button>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </>
  );
};

export default StepperForm2;
