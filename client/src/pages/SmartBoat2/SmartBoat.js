import React, { useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// core components
import CustomLoader from "../../components/CustomLoader";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Button.js";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Mic from "../../assets/img/mic.svg";
import Search from "../../assets/img/Search.svg";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import PinkHeart from "../../assets/img/pink-heart.svg";
import OrangeHeart from "../../assets/img/orange-heart.svg";
import PurpleHeart from "../../assets/img/purple-heart.svg";
import bread from "../../assets/img/bread.png";
import GreenHeart from "../../assets/img/green-heart.svg";
import thumb from "../../assets/img/thumb.svg";
import caret from "../../assets/img/caret.svg";
import Time from "../../assets/img/time.svg";
import food1 from "../../assets/img/1.jpg";
import food2 from "../../assets/img/2.jpg";
import food3 from "../../assets/img/3.jpg";
import food4 from "../../assets/img/4.jpg";
import food5 from "../../assets/img/5.jpg";
import food6 from "../../assets/img/6.jpg";
import food7 from "../../assets/img/7.jpg";
import food8 from "../../assets/img/8.jpg";
import food9 from "../../assets/img/9.jpg";
import food10 from "../../assets/img/10.jpg";
import food11 from "../../assets/img/11.jpg";
import food12 from "../../assets/img/12.jpg";
import useDashboard from "../Dashboard/useDashboard";
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);
const SmartBoat2 = () => {
  const classes = useStyles();
  const { handleInputChange, handleSubmit, isLoading, data } = useDashboard();
  const [active, setActive] = useState(1);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleStep = (event) => {
    const val = event.currentTarget.value;
    setActive(+val);
  };
  return (
    <div>
      {/*form 7 design starts from here  */}
      <div className="option-page">
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <div className="content-heading">
              <h3 className="text-white">Is White Bread Good for Weight Loss?</h3>
            </div>
          </GridItem>
        </GridContainer>
        <GridContainer className='main-row'>

          <GridItem xs={12} sm={12} md={7}>
            <div className="bread-image">
              <img src={bread} />
            </div>
            <div className="bread-text">
              <p className="text-white">Refined wheat flour is the main ingredient in white bread. The bran and germ are removed during refining, leaving only the starchy endosperm.</p>

              <p className="text-white">The outermost coating of wheat grains is called bran. It is rich in vitamins, minerals, and fibre. The centre of the grain is the germ. It is abundant in phytochemicals, good fats, and vitamins.</p>

              <p className="text-white">A grain loses fibre, protein, and vitamins during the refining process. On the other hand, wholewheat bread retains the germ and the bran. From a taste perspective, white bread is soft and tasty as the fibrous element gets removed. However, even though it is delicious, it has nutritional deficiencies.</p>

              <p className="text-white">The GI value of white bread is 73, which is exceptionally high. In 100 g bread, only 2.7 g is the fibre component.</p>
              <div className="text-list">
                <ul className="text-white">
                  <li><span>Energy:</span><span>256 kcal</span></li>
                  <li><span>Protein:</span><span>9.3g</span></li>
                  <li><span>Carbohydrate:</span><span>48.84</span></li>
                  <li><span>Fat:</span><span>3.49g</span></li>
                  <li><span>Sugar:</span><span>6.98g</span></li>
                  <li><span>Sodium:</span><span>465mg</span></li>
                </ul>
              </div>
                <p className="text-white">The GI value of white bread is 73, which is exceptionally high. In 100 g bread, only 2.7 g is the fibre component.</p>

            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={5}>
            <div className="accordian-summary">
              <Accordion className="main-col">
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="accordian-title"
                >
                  <Typography>Flour</Typography>
                  <div className="accordian-icon">
                    <img src={thumb} />
                    <img src={caret} />
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="main-col">
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  className="accordian-title"
                >
                  <Typography>Water</Typography>
                  <div className="accordian-icon">

                    <img src={caret} />
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>


              <Accordion className="main-col">
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                  className="accordian-title"
                >
                  <Typography>Yeast</Typography>
                  <div className="accordian-icon">
                    <img src={thumb} />
                    <img src={caret} />
                  </div>

                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>



              <Accordion className="main-col">
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4a-content"
                  id="panel4a-header"
                  className="accordian-title"
                >
                  <Typography>Honey</Typography>
                  <div className="accordian-icon">

                    <img src={caret} />
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="main-col">
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel5a-content"
                  id="panel5a-header"
                  className="accordian-title"
                >
                  <Typography>Salt</Typography>
                  <div className="accordian-icon">

                    <img src={caret} />
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="main-col">
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel6a-content"
                  id="panel6a-header"
                  className="accordian-title"
                >
                  <Typography>Butter (or some other type of fat)</Typography>
                  <div className="accordian-icon">

                    <img src={caret} />
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </GridItem>

        </GridContainer>


      </div>
       {/*form 8 design starts from here  */}
          <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <div className="content-heading">
            <h3 className="text-white">History</h3>
          </div>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
         <div className="or-text">
              <span className="text-white">Today</span>
            </div>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
            <div className="service-box history">
              <div className="history-inner">
                 <img src={food1} className="food-img"/>
                <div className="history-content">
                  <div className="history-heading">
                  <h4 className="text-white mb-0">Health</h4><span><img src={Time} /><span className="font-Alegreya text-white">08:51 pm</span></span>
                </div>          
                <p className="text-white mt-10">
                  Lorem Ipsum dolor is a dummy text used in the market psum
                  dolor is a dummy text used in the market
                </p>
                </div>
              </div>
            </div>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
            <div className="service-box history">
              <div className="history-inner">
                 <img src={food2} className="food-img"/>
                <div className="history-content">
                  <div className="history-heading">
                  <h4 className="text-white mb-0">Health</h4><span><img src={Time} /><span className="font-Alegreya text-white">08:51 pm</span></span>
                </div>          
                <p className="text-white mt-10">
                  Lorem Ipsum dolor is a dummy text used in the market psum
                  dolor is a dummy text used in the market
                </p>
                </div>
              </div>
            </div>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
            <div className="service-box history">
              <div className="history-inner">
                 <img src={food3} className="food-img"/>
                <div className="history-content">
                  <div className="history-heading">
                  <h4 className="text-white mb-0">Health</h4><span><img src={Time} /><span className="font-Alegreya text-white">08:51 pm</span></span>
                </div>          
                <p className="text-white mt-10">
                  Lorem Ipsum dolor is a dummy text used in the market psum
                  dolor is a dummy text used in the market
                </p>
                </div>
              </div>
            </div>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
            <div className="service-box history">
              <div className="history-inner">
                 <img src={food4} className="food-img"/>
                <div className="history-content">
                  <div className="history-heading">
                  <h4 className="text-white mb-0">Health</h4><span><img src={Time} /><span className="font-Alegreya text-white">08:51 pm</span></span>
                </div>          
                <p className="text-white mt-10">
                  Lorem Ipsum dolor is a dummy text used in the market psum
                  dolor is a dummy text used in the market
                </p>
                </div>
              </div>
            </div>
        </GridItem>
       
        <GridItem xs={12} sm={12} md={12}>
         <div className="or-text">
              <span className="text-white">Yesterday</span>
            </div>
        </GridItem>
         <GridItem xs={12} sm={6} md={3}>
            <div className="service-box history">
              <div className="history-inner"> 
                 <img src={food5} className="food-img"/>
                <div className="history-content">
                  <div className="history-heading">
                  <h4 className="text-white mb-0">Health</h4><span><img src={Time} /><span className="font-Alegreya text-white">08:51 pm</span></span>
                </div>          
                <p className="text-white mt-10">
                  Lorem Ipsum dolor is a dummy text used in the market psum
                  dolor is a dummy text used in the market
                </p>
                </div>
              </div>
            </div>
        </GridItem> <GridItem xs={12} sm={6} md={3}>
            <div className="service-box history">
              <div className="history-inner">
                 <img src={food6} className="food-img"/>
                <div className="history-content">
                  <div className="history-heading">
                  <h4 className="text-white mb-0">Health</h4><span><img src={Time} /><span className="font-Alegreya text-white">08:51 pm</span></span>
                </div>          
                <p className="text-white mt-10">
                  Lorem Ipsum dolor is a dummy text used in the market psum
                  dolor is a dummy text used in the market
                </p>
                </div>
              </div>
            </div>
        </GridItem> <GridItem xs={12} sm={6} md={3}>
            <div className="service-box history">
              <div className="history-inner">
                 <img src={food7} className="food-img"/>
                <div className="history-content">
                  <div className="history-heading">
                  <h4 className="text-white mb-0">Health</h4><span><img src={Time} /><span className="font-Alegreya text-white">08:51 pm</span></span>
                </div>          
                <p className="text-white mt-10">
                  Lorem Ipsum dolor is a dummy text used in the market psum
                  dolor is a dummy text used in the market
                </p>
                </div>
              </div>
            </div>
        </GridItem> <GridItem xs={12} sm={6} md={3}>
            <div className="service-box history">
              <div className="history-inner">
                 <img src={food8} className="food-img"/>
                <div className="history-content">
                  <div className="history-heading">
                  <h4 className="text-white mb-0">Health</h4><span><img src={Time} /><span className="font-Alegreya text-white">08:51 pm</span></span>
                </div>          
                <p className="text-white mt-10">
                  Lorem Ipsum dolor is a dummy text used in the market psum
                  dolor is a dummy text used in the market
                </p>
                </div>
              </div>
            </div>
        </GridItem>
      </GridContainer>
      {/* bottom buttons */}
      <div className="option-page bottom-button">
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <div className="move-buttons">
              <Button className="btn-primary">Next</Button>
              <Button className="btn-white">Back</Button>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
export default SmartBoat2;
