// import { useState } from 'react'
import './App.css'

function App() {
  const item = {
    userImg:"./assets/images/image-avatar.webp",
    illustrationImg:"./assets/images/illustration-article.svg",
    title:"HTML & CSS foundations"
  }
  return(
    <header>
      <img src={item.illustrationImg} alt="" />
      
      <h1>{item.title}</h1>
      <Status />
    </header>
  );  
}

function Status() {
  return(
      <p className='status'>learning</p>
  );
}

export default App
