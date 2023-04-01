import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import "./../Pages/Homes";
import "../Pages/BusDetails";
import "./../Pages/Login";
import "./../Pages/Register";
import "./../Pages/SearchResult";
import "./../Pages/Timetable";
import Homes from './../Pages/Homes';
import Bustimetable from '../Pages/BusDetails';
import Login from './../Pages/Login';
import Register from './../Pages/Register';
import SearchResult from './../Pages/SearchResult';
import Timetable from './../Pages/Timetable';
import ThankYou from '../Pages/ThankYou';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element = {<Navigate to='/home'/>}/>
      <Route path='/home' element={<Homes/>}/>
      <Route path='/timetable' element={<Timetable/>}/>
      <Route path='/timetable/:id' element={<Bustimetable/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/thank-you' element={<ThankYou/>}/>
      <Route path='/timetable/search' element={<SearchResult/>}/>
      
    </Routes>
  
  )  
}

export default Routers