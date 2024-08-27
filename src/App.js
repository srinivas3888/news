import './App.css';
import { OffcanvasExample } from './OffcanvasExample';
import {Footer} from './Footer';
import Load from './Load';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy, useEffect, useState } from 'react';
import Ai from './Ai';
const Home = lazy(()=>import("./Home"));
const Technology = lazy(()=>import("./Technology"));
const Subscribe = lazy(()=>import("./Subscribe"));
const Entertainment = lazy(()=>import("./Entertainment"));
const Business = lazy(()=>import("./Business"));
const Health = lazy(()=>import("./Health"));
const Sports = lazy(()=>import("./Sports"));
const Verify = lazy(()=>import("./Verify"));


const loading = (Component)=>{
  const Loader = ()=>{
    let [isload, setIsload]=useState(true);
  useEffect(()=>{
    
    setTimeout(()=>{ setIsload(false) }, 2000);
  }, []);
  return isload ? <Load/> : <Component/>;
  };
  return Loader;
};

function App() {

  return (
    <div className="App" id='App' style={{backgroundColor:'black'}}>
      <Router basename="/news" >
        <div>
          <OffcanvasExample />
          {/* Define Routes */}
          <Suspense fallback={<Load/>}>
          <Routes>
            <Route index Component={loading(Home)} />
            <Route exact path='/' Component={loading(Home)} />
            <Route exact path='/subscribe' Component={loading(Subscribe)} />
            <Route exact path='/technology' Component={loading(Technology)} />
            <Route exact path='/sports' Component={loading(Sports)} />
            <Route exact path='/health' Component={loading(Health)} />
            <Route exact path='/entertainment' Component={loading(Entertainment)} />
            <Route exact path='/business' Component={loading(Business)} />
            <Route exact path='/ai-news' Component={loading(Ai)} />
            <Route exact path='/subscribe/verify' Component={loading(Verify)} />
          </Routes>
          </Suspense>
          <br /><br />
          <Footer />
          </div>
      </Router>
    </div>
  );
}

export default App;
