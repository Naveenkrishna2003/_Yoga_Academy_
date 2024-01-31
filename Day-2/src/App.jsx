import React from "react";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import PersonalTrainingPage from "./pages/PersonalTrainingPage";
import PricingPage from "./pages/PricingPage";
import BlogPage from "./pages/BlogPage";
import SelectedBlogPage from "./pages/SelectedBlogPage";
import BlogContextProvider from "./context/BlogContext";
import ContactPage from "./pages/ContactPage";
import Signup1 from "./components/Signup1";
import Login from "./pages/Login";
import Profile from "./components/Profile";
import Admin from "./pages/Admin";
import App1 from "./components/admin/App1";
// import AdminDashboard from "./components/Admindashboard";
export default function App() {
  return (
    <BlogContextProvider>
      <div className="font-roboto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/personal-training" element={<PersonalTrainingPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<SelectedBlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
           <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup1/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/admindash" element={<App1/>}/>
          {/* <Route path='/dashboard' element={<AdminDashboard/>}/> */}
        </Routes>
      </div>
    </BlogContextProvider>
  );
}
