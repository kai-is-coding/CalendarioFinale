import React from 'react';
import '../css/style.css';
import Hasan from '../photos/SEi35_Hassan_HeadshotBW_022.jpg';
import Ivan from '../photos/SEi35_IvanW_HeadshotBW_027.jpg';
import Kai from '../photos/SEi35_KaiY_HeadshotBW_036.jpg';
class Contact extends React.Component {
  render(){
    return(
      <div className="aboutAndContact">
        <h1>Contact Details</h1>
        <div className="personContainer">
          <div className="person">
            <span className="contactName">Hasan Aliyev:</span><br/>
            <img src={Hasan} alt="Hasan"/><br/>
            <a href="https://www.linkedin.com/in/aliyevhasan/" target="_blank">Hasan's Linkedin</a>
          </div>
          <div className="person">
            <span className="contactName">Ivan Wong:</span><br/>
            <img src={Ivan} alt="Ivan"/><br/>
            <a href="https://www.linkedin.com/in/ivanwong160519/" target="_blank">Ivan's Linkedin</a>
          </div>
          <div className="person">
            <span className="contactName">Kai Yang:</span><br/>
            <img src={Kai} alt="Kai"/><br/>
            <a href="https://www.linkedin.com/in/kai-yang1/" target="_blank">Kai's Linkedin</a>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
