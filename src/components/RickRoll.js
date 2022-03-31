import React from 'react';
import ReactPlayer from "react-player";
import videoRoll from '../assets/rickroll.gif'
export default class Rickroll extends React.Component{
    render(){
        return(
            <div>
               <center><h2>OUCH :))</h2></center>
        <center>
               
               {/* <ReactPlayer
  url={videoRoll}
  playing={true}
  loop = {true}
  width = {400}
  height = {400}
/>        */}
<img src={videoRoll} alt="rickroll..." />
         </center> 
               
                    
            </div>
        );
    }
}