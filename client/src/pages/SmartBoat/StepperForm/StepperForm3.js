import React from "react";

// core components
import CustomInput from "../../../components/CustomInput/CustomInput.js";
import Button from "../../../components/CustomButtons/Button.js";
import GridItem from "../../../components/Grid/GridItem.js";
import GridContainer from "../../../components/Grid/GridContainer.js";

// Images
import Mic from "../../../assets/img/mic.svg";
import Search from "../../../assets/img/Search.svg";
import Plus from "../../../assets/img/Plus.svg";

const StepperForm3 = ({ classes }) => {
  return (
    <div>
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
                <img alt="img" src={Search} className="search-img" />
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
                <img alt="img" src={Mic} className="mic-img" />
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
                      <img alt="img" src={Search} /> Panipuri
                    </span>
                    <a href="/">
                      <img alt="img" src={Plus} />
                    </a>
                  </li>
                  <li>
                    <span className="text-white">
                      <img alt="img" src={Search} /> Proteins
                    </span>
                    <a href="/">
                      <img alt="img" src={Plus} />
                    </a>
                  </li>
                  <li>
                    <span className="text-white">
                      <img alt="img" src={Search} /> Fats
                    </span>
                    <a href="/">
                      <img alt="img" src={Plus} />
                    </a>
                  </li>
                  <li>
                    <span className="text-white">
                      <img alt="img" src={Search} /> Vitamins
                    </span>
                    <a href="/">
                      <img alt="img" src={Plus} />
                    </a>
                  </li>
                  <li>
                    <span className="text-white">
                      <img alt="img" src={Search} /> Minerals
                    </span>
                    <a href="/">
                      <img alt="img" src={Plus} />
                    </a>
                  </li>
                  <li>
                    <span className="text-white">
                      <img alt="img" src={Search} /> Dietary fibre
                    </span>
                    <a href="/">
                      <img alt="img" src={Plus} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

export default StepperForm3;
