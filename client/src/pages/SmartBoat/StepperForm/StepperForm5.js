import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridItem from "../../../components/Grid/GridItem.js";
import GridContainer from "../../../components/Grid/GridContainer.js";
import CustomLoader from "../../../components/CustomLoader";

// @material-ui/core
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";

// Image
import bread from "../../../assets/img/bread.png";
import thumb from "../../../assets/img/thumb.svg";
import caret from "../../../assets/img/caret.svg";

const styles = {
  loaderText: {
    color: "#ffffff",
  },
};
const useStyles = makeStyles(styles);

const StepperForm5 = ({ responseData, isLoading, ingredientRes }) => {
  const classes = useStyles();
  return (
    <div className="option-page">
      {responseData && responseData?.resData && ingredientRes ? (
        <>
        <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <div className="content-heading">
            {responseData && responseData?.resData && (
              <h3 className="text-white">
                {responseData?.resData?.title[0]?.text}
              </h3>
            )}
          </div>
        </GridItem>
      </GridContainer>
      <GridContainer className="main-row">
        <GridItem xs={12} sm={12} md={7}>
          <div className="bread-image">
            <img alt="scanImage" src={responseData?.resData?.image} />
          </div>
          <div className="bread-text">
            {responseData && responseData?.resData ? (
              <>
              {responseData?.resData?.summary[0]?.text.split('\n').map(str => <p className="text-white">{str}</p>)}
              </>
            ) : (
              <CustomLoader
                className={classes.loaderText}
                color="text-primary"
              />
            )}
          </div>
        </GridItem>
        <GridItem xs={12} sm={12} md={5}>
          {ingredientRes?.data ? (
            <div className="accordian-summary">
              {ingredientRes?.data.length > 0 &&
                ingredientRes?.data.map((item, key) => {
                  return (
                    <Accordion className="main-col" key={key}>
                      <AccordionSummary
                        // expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className="accordian-title"
                      >
                        <Typography>{item?.name}</Typography>
                        <div className="accordian-icon">
                        {item?.healthy === false ? (
                          <img alt="img" src={thumb} />
                        ) : ("")}
                          
                          <img alt="img" src={caret} />
                        </div>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography className="text-justify">{item?.description}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
            </div>
          ) : (
            <CustomLoader className={classes.loaderText} color="text-primary" />
          )}
        </GridItem>
      </GridContainer></>
      ) : (
        <CustomLoader color="text-primary" />
      )}
      {/* {isLoading && <CustomLoader color="text-primary" />} */}
    </div>
  );
};

export default StepperForm5;
