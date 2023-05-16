import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// core components
import CustomLoader from "../../components/CustomLoader";
import CustomNotification from "../../components/CustomNotification/CustomNotification";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
// import CardAvatar from "../../components/Card/CardAvatar.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";

// import avatar from "../../assets/img/faces/marc.jpg";

import useSqlGenerator from "./useSqlGenerator";

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

const SqlGenerator = () => {
  const classes = useStyles();
  const { handleInputChange, handleSubmit, isLoading, data } = useSqlGenerator();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Sql Generator</h4>
              <p className={classes.cardCategoryWhite}>Ask your question</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <p>{ data }</p>
                    
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Type your question here.."
                    id="question"
                    name="query"
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
            <CardFooter>
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
      <CustomNotification />
    </div>
  );
}
export default SqlGenerator;