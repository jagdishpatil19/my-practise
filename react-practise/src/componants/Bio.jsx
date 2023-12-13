import '../styles/Bio.css'
import React from 'react'

const Bio = () => {
  return (
    <div className='bioPage'>
      <img src="https://images.pexels.com/photos/12003795/pexels-photo-12003795.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" height={500} width={500} alt="bio image" />
      
      <div className="bioData">
        <h1>MY BIO</h1>
        <br /> 
        <p>As far as history goes, we’re living in charmed times — but Shakespeare never had to write an Instagram bio (and let’s face it, the man wasn’t known for being concise). Typing those fateful words into your profile is stressful, and for good reason: your Instagram bio is often the first place other users will look when they’re deciding whether or not to follow you.

Here’s everything you need to know about Instagram bios, and how to write one worthy of a three-act play. Wherefore art thou bio?</p>
 
 <br /> 
 <ul>
  <li>What is an Instagram bio?</li>
  <li>What makes a good bio for Instagram?</li>
  <li> Instagram bio ideas generator</li>
  <li> 13 Instagram bio tricks you may not know about</li>
  <li>Instagram bio templates</li>
 </ul>
 <div className="range">
 <input type="range" name="" id="" /><br />
 <input type="range" name="" id="" /><br />
 <input type="range" name="" id="" /><br />
 <input type="range" name="" id="" />
 </div>
      </div>
    </div>
  )
}

export default Bio
