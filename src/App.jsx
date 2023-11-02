/* eslint-disable no-unused-vars */
import React from 'react'
import { Routes, Route } from "react-router-dom";
import MyNavbar from './Components/myNavbar';
import MyContextState from './Context/MyContextState';
import { useContext } from 'react';
import MyContext from './Context/MyContext';
import { useEffect } from 'react';

const App = () => {
  return (
    <div>
      <MyContextState>
        <MyNavbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </MyContextState>
    </div>
  )
}

const Home = () => {
  const a = useContext(MyContext)
  // useEffect(() => {
  //   a.myUpdate()
  // }, [])

  return (
    <>
      <h1>home</h1>

      <p>Hi, this is me {a.state.name} </p>
      <h6>I am a {a.state.group}</h6></>
  )
}

const Blogs = () => {
  return (
    <h1>Blogs</h1>
  )
}

const Contact = () => {
  return (
    <h1>Contact</h1>
  )
}
const NoPage = () => {
  return (
    <h1>NoPage here</h1>
  )
}




export default App

