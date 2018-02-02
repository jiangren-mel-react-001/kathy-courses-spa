/**
 * Created by Kathy on 1/02/2018.
 */
import React from 'react';
import {Image,Grid,Col,Row} from 'react-bootstrap';
import './spaFrame.css';
export default class Teachers extends React.Component{
     constructor(){
         super();
         this.state = {
             TeacherList:[{tName:'Jeremy',tPic:''},{}],
         };
     }
     render(){
         return(
             <div className="teacher_container" >
                 <div class="card" style={{width:400+'px'}}>
                     <img class="card-img-top" src={"https://www.w3schools.com/bootstrap4/img_avatar1.png"} alt="Card image"/>
                         <div class="card-body">
                             <h4 class="card-title">John Doe</h4>
                             <p class="card-text">Some example text.</p>
                             <a href="#" class="btn btn-primary">See Profile</a>
                         </div>
                 </div>
                 {/*<Image  className="img-responsive" src={"https://www.w3schools.com/bootstrap4/img_avatar1.png"}   />*/}




             </div>
         )
     }
}