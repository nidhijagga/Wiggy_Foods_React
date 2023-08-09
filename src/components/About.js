import React from 'react'
import { Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h1> About Us Page </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quasi sunt adipisci maiores provident soluta. Mollitia qui ea voluptatum temporibus enim tenetur laudantium quibusdam explicabo quas molestias, itaque quasi ullam!</p>
        <Outlet/>
    </div>
  )
}

export default About
