// import logo from './logo.svg';
import './App.css';

// import React, { Suspense } from "react";
// import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";

import "./assets/css/material-dashboard-react.css?v=1.10.0";

import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./containers/Layout/Layout";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import VerifyEmail from "./pages/Auth/Verify/VerifyEmail";
import DashboardPage from "./pages/Dashboard/Dashboard";
import UserProfile from "./pages/UserProfile/UserProfile";
import SqlGenerator from "./pages/SqlGenerator/SqlGenerator";
import CodeGenerator from "./pages/CodeGenerator/CodeGenerator";
import GrammarCheck from './pages/GrammarCheck/GrammarCheck';
import ReviewGenerator from './pages/restaurantReview/reviewGenerator';
import InterviewQuestion from './pages/InterviewQuestion/InterviewQuestion';
import AdProduct from './pages/AdProduct/AdProduct'
import ImageGenerator from './pages/imageGenerator/ImageGenerator';
import FriendChat from './pages/FriendChat/FriendChat';
import SmartBoatPage from './pages/SmartBoat/SmartBoat';
import WebcamTest from './pages/WebCam/WebCam';
import SmartBoatPage1 from './pages/SmartBoat1/SmartBoat';
import SmartBoatPage2 from './pages/SmartBoat2/SmartBoat';
import History from './pages/History/History';
function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/smartboat" element={
            <ProtectedRoute>
              <Layout>
                <SmartBoatPage />
              </Layout>
            </ProtectedRoute>
        } />
        <Route path="/history" element={
            <ProtectedRoute>
              <Layout>
                <History />
              </Layout>
            </ProtectedRoute>
        } />
        <Route path="/smartboat1" element={
            <ProtectedRoute>
              <Layout>
                <SmartBoatPage1 />
              </Layout>
            </ProtectedRoute>
        } />
        <Route path="/smartboat2" element={
            <ProtectedRoute>
              <Layout>
                <SmartBoatPage2 />
              </Layout>
            </ProtectedRoute>
        } />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Layout>
              <DashboardPage />
            </Layout>
          </ProtectedRoute>
        } />
        <Route path="/user" element={
          <ProtectedRoute>
            <Layout>
              <UserProfile />
            </Layout>
          </ProtectedRoute>
        } />
        <Route path="/sqlgenerator" element={
          <ProtectedRoute>
            <Layout>
              <SqlGenerator />
            </Layout>
          </ProtectedRoute>
        } />
        <Route path="/codeGenerator" element={
          <ProtectedRoute>
            <Layout>
              <CodeGenerator />
            </Layout>
          </ProtectedRoute>
        } />
        <Route path="/imageGenerator" element={
          <ProtectedRoute>
            <Layout>
              <ImageGenerator />
            </Layout>
          </ProtectedRoute>
        } />
        <Route path="/grammarcheck" element={
          <ProtectedRoute>
            <Layout>
              <GrammarCheck />
            </Layout>
          </ProtectedRoute>
        } />
        <Route path="/reviewGenerator" element={
          <ProtectedRoute>
            <Layout>
              <ReviewGenerator />
            </Layout></ProtectedRoute>
        } />
        <Route path="/interviewquestion" element={
          <ProtectedRoute>
            <Layout>
              <InterviewQuestion />
            </Layout>
          </ProtectedRoute>
        } />
         <Route path="/adproduct" element={
          <ProtectedRoute>
            <Layout>
              <AdProduct />
              </Layout>
          </ProtectedRoute>
        } />
         <Route path="/friend" element={
          <ProtectedRoute>
            <Layout>
              <FriendChat />
            </Layout>
          </ProtectedRoute>
        } />
        <Route path="/webcam" element={
            <ProtectedRoute>
              <Layout>
                <WebcamTest />
              </Layout>
            </ProtectedRoute>
        } />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/verify-email" exact element={<VerifyEmail />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
