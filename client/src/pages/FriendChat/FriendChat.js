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

import useFriendChat from "./useFriendChat";

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
  chatContainer:{
    padding:"10px",
    fontSize:"1rem",
    width: "100%",
    height: "auto",
    padding: "12px 20px",
    boxSizing: "border-box",
    border: "2px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "#f8f8f8",
    fontSize: "16px",
    resize: "none",
   
  }
};

const useStyles = makeStyles(styles);

const FriendChat = () => {
  const classes = useStyles();
  const { handleInputChange, handleSubmit, isLoading, data } = useFriendChat();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Friend Chat</h4>
              <p className={classes.cardCategoryWhite}>Chat with your friend SmartBot</p>
            </CardHeader>
            <CardBody>
              <textarea autoFocus rows={22} cols={110}  className={classes.chatContainer} name={"chat"} value={data} onChange={handleInputChange} ref={ref => ref && ref.focus()} onFocus={(e)=>e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}>
              </textarea>
              
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
export default FriendChat;