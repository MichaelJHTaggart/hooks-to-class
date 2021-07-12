import React from "react";

// class Card extends React.Component {
function Card(props) {

 return (
  <div className="github-profile">
   <img src={props.avatar_url} alt="Profile" />
   <div className="info">
    <div className="name">{props.name}</div>
    <div className="company">{props.company}</div>
   </div>
  </div>
 );
}

export default Card