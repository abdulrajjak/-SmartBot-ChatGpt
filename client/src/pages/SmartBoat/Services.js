import React from "react";
// core component
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Button from "../../components/CustomButtons/Button.js";
// Image
import PinkHeart from "../../assets/img/pink-heart.svg";
import OrangeHeart from "../../assets/img/orange-heart.svg";
import PurpleHeart from "../../assets/img/purple-heart.svg";
import GreenHeart from "../../assets/img/green-heart.svg";

const Services = ({ setIsVisible }) => {
  const handleService = () => {
    setIsVisible(true);
  };
  return (
    <>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <div className="content-heading">
            <h3 className="text-white">Select Services</h3>
          </div>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Button className="btn-unset" onClick={handleService}>
            <div className="service-box">
              <div className="service-inner">
                <img alt="pinkHeart" src={PinkHeart} />
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
          <Button className="btn-unset" onClick={handleService}>
            <div className="service-box">
              <div className="service-inner">
                <img alt="pinkHeart" src={PinkHeart} />
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
          <Button className="btn-unset" onClick={handleService}>
            <div className="service-box">
              <div className="service-inner">
                <img alt="img" src={OrangeHeart} />
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
          <Button className="btn-unset" onClick={handleService}>
            <div className="service-box">
              <div className="service-inner">
                <img alt="img" src={PurpleHeart} />
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
          <Button className="btn-unset" onClick={handleService}>
            <div className="service-box">
              <div className="service-inner">
                <img alt="img" src={GreenHeart} />
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
          <Button className="btn-unset" onClick={handleService}>
            <div className="service-box">
              <div className="service-inner">
                <img alt="img" src={GreenHeart} />
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
          <Button className="btn-unset" onClick={handleService}>
            <div className="service-box">
              <div className="service-inner">
                <img alt="orangeHeart" src={OrangeHeart} />
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
      </GridContainer>
    </>
  );
};

export default Services;
