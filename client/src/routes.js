// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
// import Person from "@material-ui/icons/Person";

// core components/views for Admin layout
import DashboardPage from "./pages/Dashboard/Dashboard";
// import UserProfile from "./pages/UserProfile/UserProfile";
import SqlGenerator from "./pages/SqlGenerator/SqlGenerator";
import CodeGenerator from "./pages/CodeGenerator/CodeGenerator";
import ImageGenerator from "./pages/imageGenerator/ImageGenerator";
import GrammarCheck from "./pages/GrammarCheck/GrammarCheck";
import ReviewGenerator from "./pages/restaurantReview/reviewGenerator";
import InterviewQuestion from "./pages/InterviewQuestion/InterviewQuestion";
import AdProduct from "./pages/AdProduct/AdProduct";
import FriendChat from "./pages/FriendChat/FriendChat";
import SmartBoat from "./pages/SmartBoat/SmartBoat";
import HistoryPage from "./pages/History/History";
import WebcamTest from "./pages/WebCam/WebCam";
import BotIcon from "../../client/src/assets/img/bot_s.svg";
import History from "../../client/src/assets/img/history.svg";
import Code from "../../client/src/assets/img/code-g.svg";
import ImageG from "../../client/src/assets/img/image-g.svg";
import Grammer from "../../client/src/assets/img/grammer-c.svg";
import Review from "../../client/src/assets/img/review-g.svg";
import Interview from "../../client/src/assets/img/interview-q.svg";
import AddProduct from "../../client/src/assets/img/ad-p.svg";
import Friend from "../../client/src/assets/img/friend-c.svg";

const dashboardRoutes = [
  {
    path: "/smartboat",
    name: "Smart Boat",
    img: BotIcon,
    component: SmartBoat,
  },
  {
    path: "/history",
    name: "History",
    icon: Dashboard,
    img: History,
    component: HistoryPage,
  },
  {
    path: "/dashboard",
    name: "Chat Boat",
    img: History,
    component: DashboardPage,
  },
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   icon: Person,
  //   component: UserProfile,
  // },
  // {
  //   path: "/sqlgenerator",
  //   name: "Sql Generator",
  //   icon: Dashboard,
  //   img: Code,
  //   component: SqlGenerator,
  // },
  {
    path: "/codeGenerator",
    name: "Code Generator",
    icon: Dashboard,
    img: Code,
    component: CodeGenerator,
  },
  {
    path: "/imageGenerator",
    name: "Image Generator",
    icon: Dashboard,
    img: ImageG,
    component: ImageGenerator,
  }, {
    path: "/grammarcheck",
    name: "Grammar Check",
    icon: Dashboard,
    img: Grammer,
    component: GrammarCheck,
  },
  {
    path: "/reviewGenerator",
    name: "Review Generator",
    icon: Dashboard,
    img: Review,
    component: ReviewGenerator,
  }, {
    path: "/interviewquestion",
    name: "Interview Question",
    icon: Dashboard,
    img: Interview,
    component: InterviewQuestion,
  },
  {
    path: "/adproduct",
    name: "Ad Product",
    icon: Dashboard,
    img: AddProduct,
    component: AdProduct,
  },
  {
    path: "/friend",
    name: "Friend Chat",
    icon: Dashboard,
    img: Friend,
    component: FriendChat,
  },
];

export default dashboardRoutes;