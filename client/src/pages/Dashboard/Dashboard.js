import React from "react";

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

import useDashboard from "./useDashboard";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";
const useStyles = makeStyles(styles);

const Dashboard=()=> {
  const classes = useStyles();
  const { handleInputChange, handleSubmit, isLoading, data } = useDashboard();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Chat Boat</h4>
              <p className={classes.cardCategoryWhite}>Ask your question</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={8}>
                  <p className={classes.description}>{ data }</p>
                  <CustomInput
                    labelText="Type your question here.."
                    id="company-disabled"
                    name="chat"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: false,
                    }}
                    handleInputChange={handleInputChange}
                  /> 
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter stats>
            {isLoading ? (
              <CustomLoader color="text-primary" />
            ):(
              <Button 
                type="button" 
                color="primary" 
                className="form__custom-button"
                onClick={(e) => handleSubmit(e) }
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
}
export default Dashboard;
