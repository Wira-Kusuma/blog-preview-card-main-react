// import { useState } from 'react'
import './App.css'
import illustrationImg from './images/illustration-article.svg';
import userImg from './images/image-avatar.webp';




const item = {
    title:"HTML & CSS foundations",
    published:"21 Dec 2023",
    description:"These languages are backbone of every website, defining structure, content, and presentation",
    username:"Greg Hooper",
}

function App() {
  return(
    <header>
      <img src={illustrationImg} alt={item.title} />
      <Status />
      <Date />
      <h1>{item.title}</h1>
      <Description/>
      <User/>
    </header>
  );  
}

function Status() {
  return(
      <p className='status'>learning</p>
  );
}

function Date() {
  return(
    <p className='date'>Published {item.published}</p>
  );
}

function Description() {
  return(
    <p className='desc'>{item.description}</p>
  );
}

function User() {
  return(
    <div className="user">
      <img src={userImg} alt={item.username} />
      <p className='username'>{item.username}</p>
    </div>
  )
}
export default App
