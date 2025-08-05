// import { useState } from 'react'
import './App.css'


const item = {
    illustrationImg:"./assets/images/illustration-article.svg",
    title:"HTML & CSS foundations",
    published:"21 Dec 2023",
    description:"These languages are backbone of every website, defining structure, content, and presentation",
    username:"Greg Hooper",
    userImg:"./assets/images/image-avatar.webp"
}

function App() {
  return(
    <header>
      <img src={item.illustrationImg} alt={item.title} />
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
      <img src={item.userImg} alt={item.username} />
      <p className='username'>{item.username}</p>
    </div>
  )
}
export default App
