import React from 'react'
import './style.css'
// import Button from '@mui/material/Button';
import Pdf from './dhruv_bhanderi_resume.pdf';
import ArticleIcon from '@mui/icons-material/Article';

export const Homepage = () => {
  return (
    <>
      <div className='mainHomePage'>
        <h1>Hi, I am <span className='name'>Dhruv Bhanderi</span></h1>
        <h2>Learning ReactJs from Vnurture Technology.</h2>
        <br />
        <p className='desc'>I am from Silver Oak College Of Engineering & Technology <br />
          Right now i am doing summer internship in Vnurture Technology <br />
          I am studying degree Bachelor Of Engineering in Computer <br />
          This is my self made Portfolio Website as a Project <br />
        </p>
        <div className='resubutton'>
        <button className='resume'>
          <a href={Pdf} target="_blank">
            <ArticleIcon />&nbsp;Resume</a>
        </button>
        </div>
        <div className='links'>
          <span>
            <a href="https://github.com/dgb28" target="_blank">
              <img className='icon' src="https://cdn-icons-png.flaticon.com/128/733/733609.png"></img>
            </a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/dhruv-bhanderi-979181220/" >
              <img className='icon' src='https://cdn-icons-png.flaticon.com/128/2111/2111532.png'></img>
            </a>
          </span>
        </div>
        <footer className='footer'>
          Copyright &copy; Dhruv_Bhanderi
        </footer>
      </div>
    </>
  )
}