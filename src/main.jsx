import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';

import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Review from './Components/Review/Review.jsx';
import PopularWork from './Components/PopularWork/PopularWork.jsx';
import Shortvideo from './Components/ShortVideo/Shortvideo.jsx';
import Bigcreator from './Components/Bigcreator/Bigcreator.jsx';
import HearFromClient from './Components/HearFromClient/HearFromClient.jsx';
import OurWork from './Components/OurWork/OurWork.jsx';
import ClientReview from './Components/ClientReview/ClientReview.jsx';
import ScheduleCall from './Components/ScheduleCall/ScheduleCall.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}/>
      {/* <Route path="review" element={<Review />} />
      <Route path="popularwork" element={<PopularWork />} /> */}
      <Route path="OurWork" element={<OurWork />} />
      <Route path="contact" element={<ClientReview />} />
      <Route path="schedule" element={<ScheduleCall />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
