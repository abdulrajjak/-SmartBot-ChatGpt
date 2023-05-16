import React, { useState } from "react";
import { Stepper, Step } from "react-form-stepper";

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
import GreenHeart from "../../assets/img/green-heart.svg";
import Plus from "../../assets/img/Plus.svg";
import ScanImg from "../../assets/img/scan-product.png";
import Capture from "../../assets/img/capture.svg";
import DropImg from "../../assets/img/drop-img.svg";
import useDashboard from "../Dashboard/useDashboard";
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);
const SmartBoat1 = () => {
  const classes = useStyles();
  const { handleInputChange, handleSubmit, isLoading, data } = useDashboard();
  const [active, setActive] = useState(1);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleStep = (event) => {
    const val = event.currentTarget.value;
    console.log(+val);
    setActive(+val);
  };
  return (
    <div>
      <Stepper activeStep={active}>
        <Step label="Step 1" value="1" onClick={(e) => handleStep(e)} />
        <Step label="Step 2" value="2" onClick={(e) => handleStep(e)} />
        <Step label="Step 3" value="3" onClick={(e) => handleStep(e)} />
        <Step label="Step 4" value="4" onClick={(e) => handleStep(e)} />
        <Step label="Step 5" value="5" onClick={(e) => handleStep(e)} />
      </Stepper>

      {active === 1 ? <div>step 1 content</div> : null}
      {active === 2 ? <div>step 2 content</div> : null}
      {active === 3 ? <div>step 3 content</div> : null}
      {active === 4 ? <div>step 4 content</div> : null}
      {active === 5 ? <div>step 5 content</div> : null}
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <div className="content-heading">
            <h3 className="text-white">Select Services</h3>
          </div>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Button className="btn-unset">
            <div className="service-box">
              <div className="service-inner">
                <img src={PinkHeart} />
                <h4 className="text-white font-Alegreya mt-15 weight-500">
                  Health
                </h4>
                <p className="text-white mt-10">
                  Lorem Ipsum dolor is a dummy text used in the market psum
                  dolor is a dummy text used in the market{" "}
                </p>
              </div>
            </div>
          </Button>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <div className="service-box">
            <div className="service-inner">
              <img src={OrangeHeart} />
              <h4 className="text-white font-Alegreya mt-15 weight-500">
                Health
              </h4>
              <p className="text-white mt-10">
                Lorem Ipsum dolor is a dummy text used in the market psum dolor
                is a dummy text used in the market{" "}
              </p>
            </div>
          </div>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <div className="service-box">
            <div className="service-inner">
              <img src={PurpleHeart} />
              <h4 className="text-white font-Alegreya mt-15 weight-500">
                Health
              </h4>
              <p className="text-white mt-10">
                Lorem Ipsum dolor is a dummy text used in the market psum dolor
                is a dummy text used in the market{" "}
              </p>
            </div>
          </div>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <div className="service-box">
            <div className="service-inner">
              <img src={GreenHeart} />
              <h4 className="text-white font-Alegreya mt-15 weight-500">
                Health
              </h4>
              <p className="text-white mt-10">
                Lorem Ipsum dolor is a dummy text used in the market psum dolor
                is a dummy text used in the market{" "}
              </p>
            </div>
          </div>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <div className="service-box">
            <div className="service-inner">
              <img src={GreenHeart} />
              <h4 className="text-white font-Alegreya mt-15 weight-500">
                Health
              </h4>
              <p className="text-white mt-10">
                Lorem Ipsum dolor is a dummy text used in the market psum dolor
                is a dummy text used in the market{" "}
              </p>
            </div>
          </div>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <div className="service-box">
            <div className="service-inner">
              <img src={OrangeHeart} />
              <h4 className="text-white font-Alegreya mt-15 weight-500">
                Health
              </h4>
              <p className="text-white mt-10">
                Lorem Ipsum dolor is a dummy text used in the market psum dolor
                is a dummy text used in the market{" "}
              </p>
            </div>
          </div>
        </GridItem>
      </GridContainer>
      {/* multistep form design start from here */}
      {/* form 1 */}
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
              <Button className="options btn-none btn-default">
                Weight Loss
              </Button>
              <Button className="options btn-none btn-default">
                Weight Gain
              </Button>
              <Button className="options btn-none btn-default">
                Fitness and Exercise
              </Button>
              <Button className="options btn-none btn-default">
                Physical Fitness
              </Button>
              <Button className="options btn-none btn-default">
                Immune System
              </Button>
              <Button className="options btn-none btn-default">
                Hydration Calculator
              </Button>
              <Button className="options btn-none btn-default">
                Weight Loss
              </Button>
              <Button className="options btn-none btn-default">
                Weight Gain
              </Button>
              <Button className="options btn-none btn-default">
                Fitness and Exercise
              </Button>
              <Button className="options btn-none btn-default">
                Physical Fitness
              </Button>
              <Button className="options btn-none btn-default">
                Immune System
              </Button>
              <Button className="options btn-none btn-default">
                Hydration Calculator
              </Button>
            </div>
          </GridItem>
        </GridContainer>
      </div>
      {/* form 2 */}
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
                <h6 className="text-white mb-5">Select Gender</h6>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  className={classes.selectEmpty + " " + "select-default"}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Gender</em>
                  </MenuItem>
                  <MenuItem value={10}>Male</MenuItem>
                  <MenuItem value={20}>Female</MenuItem>
                </Select>
              </div>

              <div>
                <h6 className="text-white mb-5">Select Age</h6>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  className={classes.selectEmpty + " " + "select-default"}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Age</em>
                  </MenuItem>
                  <MenuItem value={10}>Male</MenuItem>
                  <MenuItem value={20}>Female</MenuItem>
                </Select>
              </div>

              <div>
                <h6 className="text-white mb-5">Select Weight</h6>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  className={classes.selectEmpty + " " + "select-default"}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Weight</em>
                  </MenuItem>
                  <MenuItem value={10}>Male</MenuItem>
                  <MenuItem value={20}>Female</MenuItem>
                </Select>
              </div>

              <div>
                <h6 className="text-white mb-5">Select Height</h6>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  className={classes.selectEmpty + " " + "select-default"}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Height</em>
                  </MenuItem>
                  <MenuItem value={10}>Male</MenuItem>
                  <MenuItem value={20}>Female</MenuItem>
                </Select>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>
      {/* form 3 */}
      <div className="option-page">
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <div className="content-heading">
              <h3 className="text-white">Which foods your trying to Eat?</h3>
            </div>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <div className="search-boxes">
              <h6>Search your food</h6>
              <div className="header-search">
                <img src={Search} className="search-img" />
                <CustomInput
                  formControlProps={{
                    className:
                      classes.margin +
                      " " +
                      classes.search +
                      " " +
                      "search-input",
                  }}
                  inputProps={{
                    placeholder: "Search",
                    inputProps: {
                      "aria-label": "Search",
                    },
                  }}
                />
                <img src={Mic} className="mic-img" />
              </div>

              <div className="mt-15 search-details">
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <div className="option-boxes">
                      <Button className="options btn-none btn-default">
                        Weight Loss
                      </Button>
                      <Button className="options btn-none btn-default">
                        Weight Gain
                      </Button>
                      <Button className="options btn-none btn-default">
                        Fitness and Exercise
                      </Button>
                      <Button className="options btn-none btn-default">
                        Physical Fitness
                      </Button>
                      <Button className="options btn-none btn-default">
                        Immune System
                      </Button>
                      <Button className="options btn-none btn-default">
                        Hydration Calculator
                      </Button>
                      <Button className="options btn-none btn-default">
                        Weight Loss
                      </Button>
                      <Button className="options btn-none btn-default">
                        Weight Gain
                      </Button>
                      <Button className="options btn-none btn-default">
                        Fitness and Exercise
                      </Button>
                      <Button className="options btn-none btn-default">
                        Physical Fitness
                      </Button>
                      <Button className="options btn-none btn-default">
                        Immune System
                      </Button>
                      <Button className="options btn-none btn-default">
                        Hydration Calculator
                      </Button>
                      <Button className="options btn-none btn-default">
                        Hydration Calculator
                      </Button>
                      <Button className="options btn-none btn-default">
                        Hydration Calculator
                      </Button>
                      <Button className="options btn-none btn-default">
                        Hydration Calculator
                      </Button>
                      <Button className="options btn-none btn-default">
                        Hydration Calculator
                      </Button>
                      <Button className="options btn-none btn-default">
                        Hydration Calculator
                      </Button>
                      <Button className="options btn-none btn-default">
                        Hydration Calculator
                      </Button>
                      <Button className="options btn-none btn-default">
                        Hydration Calculator
                      </Button>
                      <Button className="options btn-none btn-default">
                        Hydration Calculator
                      </Button>
                    </div>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <div className="suggestion-search">
              <h5 className="text-white weight-500">Suggested Search</h5>
              <div className="suggestion-result">
                <ul>
                  <li>
                    <span className="text-white">
                      <img src={Search} /> Panipuri
                    </span>
                    <a href="#">
                      <img src={Plus} />
                    </a>
                  </li>
                  <li>
                    <span className="text-white">
                      <img src={Search} /> Proteins
                    </span>
                    <a href="#">
                      <img src={Plus} />
                    </a>
                  </li>
                  <li>
                    <span className="text-white">
                      <img src={Search} /> Fats
                    </span>
                    <a href="#">
                      <img src={Plus} />
                    </a>
                  </li>
                  <li>
                    <span className="text-white">
                      <img src={Search} /> Vitamins
                    </span>
                    <a href="#">
                      <img src={Plus} />
                    </a>
                  </li>
                  <li>
                    <span className="text-white">
                      <img src={Search} /> Minerals
                    </span>
                    <a href="#">
                      <img src={Plus} />
                    </a>
                  </li>
                  <li>
                    <span className="text-white">
                      <img src={Search} /> Dietary fibre
                    </span>
                    <a href="#">
                      <img src={Plus} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>
      {/* form 4 */}

      <div className="option-page">
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
              <img src={ScanImg} />
              <a href="">
                <img src={Capture} className="scan-icon" />
              </a>
            </div>
            <div className="or-text">
              <span className="text-white">or</span>
            </div>
            <div className="drop-img-section">
              <img src={DropImg} />
              <h5 className="text-white mt-10">Select a file or drag and drop here</h5>
              <h6 className="text-white">JPG or PNG, file size no more than 10MB</h6>
              <button>Select File</button>
            </div>
          </GridItem>
        </GridContainer>
      </div>
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
};
export default SmartBoat1;
