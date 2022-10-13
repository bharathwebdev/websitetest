<<<<<<< HEAD
import React from 'react'
import InnerApp from './InnerApp'
import { Routes ,Route} from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import RequirdAuth from './RequirdAuth'
import SignIn from './Admin/AdminSign'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from './Admin/AdminContext'
import AdminMain from './Admin/components/AdminMain'
import PrivateRoute from './RequirdAuth'
import Form from './component/RegistertFrom'
function App() {
  return (
    <div>
    
        <UserProvider>
        <Routes>
            <Route path='/'element={<InnerApp/>}/>

            <Route path='/Admin' element={<PrivateRoute/>}>
            <Route path='/Admin'element={<AdminMain/>}/> 
            </Route>
            <Route path='/register-form' element={<Form/>}/>
            <Route path='/Admin/login' element={<SignIn/>}/>
            <Route path='*' element={<h1>page not found</h1>}/>
        </Routes>
        <ToastContainer/>
       </UserProvider>
=======
import React, { useRef } from "react";
import "./App.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ImageGallery from "./component/Gallery";
import Nav from "../src/component/Nav";
import Main from "../src/component/Main";
import { useCallback } from "react";
import { Particle } from "./configsFiles/partical.config";
import "./styles/astroid.css";
import styled from "styled-components";
import Departments from "./component/Departments";
import About from "./component/About";
import { motion, useScroll, useTransform } from "framer-motion";
import Guest from "./component/Guest";
import Footer from "./component/Footer";
import Slider from "./component/slider";

const DepartmentDiv = styled.div`
position: sticky;
`;

const App = () => {
  const scroll = useRef(null);
  const { scrollY } = useScroll();
  const MValue = useTransform(scrollY, [0, 1000], [0, -200]);
  const DValue = useTransform(scrollY, [0, 1000], [0, -500]);
  const { scrollYProgress } = useScroll();
  const DeviceSize = window.innerWidth;
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <div ref={scroll}>
      <motion.div
        className="scrollprogress"
        style={{ scaleX: scrollYProgress }}
      />
      {/* <Particles
        className="particles"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={Particle}
      /> */}
      <Nav />
      <Main />
      <motion.div
        className="img"
        style={{ y: DeviceSize < 800 ? MValue : DValue, zIndex: -1 }}
      ></motion.div>
      <DepartmentDiv id="Departments">
        <Departments />
      </DepartmentDiv>
      <div id="Gallery">
        <ImageGallery />
      </div>
      <div id="About">
        <About />
      </div>
      <div id="Guest">
        <Guest />
      </div>
      <div id="Footer">
        <Footer />
      </div>

      <Slider />
>>>>>>> 67405dc5ae3eed6701c9778d1907b0aba6282c67
    </div>
  )
}

export default App