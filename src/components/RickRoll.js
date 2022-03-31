import React from 'react';
import ReactPlayer from "react-player";
export default class Rickroll extends React.Component{
    render(){
        return(
            <div>
               <center><h2>OUCH :))</h2></center>
        <center>
               
               <ReactPlayer
  url='https://shattereddisk.github.io/rickroll/rickroll.mp4'
  playing={true}
  loop = {true}
  width = {400}
  height = {400}
/>       
         </center> 
               
                    
            </div>
        );
    }
}