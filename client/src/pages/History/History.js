import React, { useState } from "react";
import moment from "moment";

// core components
import Button from "../../components/CustomButtons/Button.js";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";

// Images
import Time from "../../assets/img/time.svg";
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";
import useHistory from "./useHistory";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

const History = () => {
  const [showTruncate, setShowTruncate] = useState(false);
  const [activeId, setActiveId] = useState();
  const { data } = useHistory();

  const styles = {
    readMoreBtn: {
      color: "#fff",
      backgroundColor: "#9c27b0;",
    },
  };
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const truncate = (input, id) =>
    input.length > 60 && activeId === id
      ? input
      : `${input.substring(0, 60)}...`;
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <div className="content-heading">
            <h3 className="text-white">History</h3>
          </div>
        </GridItem>
      </GridContainer>
      {data.length > 0 ? (
        <GridContainer>
          {data &&
            data?.map((item) => {
              return (
                <GridItem key={item?._id} xs={12} sm={6} md={3}>
                  <div className="service-box history" key={item.toString()}>
                    <div className="history-inner">
                      <img alt="" src={item?.image} className="food-img" />
                      <div className="history-content">
                        <div className="history-heading">
                          <h4 className="text-white mb-0">
                            {item?.title ? `${item?.title.substring(0, 6)}...` : "Health"}
                          </h4>
                          <span>
                            <img alt="time" src={Time} />
                            <span className="font-Alegreya text-white">
                              {moment(item?.createdAt).format("hh:mm A")}
                            </span>
                          </span>
                        </div>
                        <p className="text-white mt-10">
                          {showTruncate && activeId === item._id
                            ? item?.response
                            : `${item?.response.substring(0, 60)}...`}
                          <Button
                            type="button"
                            className="btn-read btn-unset"
                            onClick={() => {
                              setActiveId(item?._id);
                              setShowTruncate(!showTruncate);
                              truncate(item?.response, item?._id);
                            }}
                          >
                            {showTruncate && activeId === item._id
                              ? "read less"
                              : "read more"}
                          </Button>
                        </p>
                      </div>
                    </div>
                  </div>
                </GridItem>
              );
            })}
        </GridContainer>
      ) : (
        <GridItem xs={12} sm={6} md={3}>
          <p>No data Found</p>
        </GridItem>
      )}
    </div>
  );
};

export default History;
