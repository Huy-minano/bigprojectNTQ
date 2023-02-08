import React from "react";
import { Link } from "react-router-dom";
import { IMG_URL } from "../../../../api/url";
const               ActorCard = (props) => {
  return (
      <div style={{minWidth:"138px",maxHeight:"300px",margin:"10px",borderRadius:"10px",boxShadow:"1px 1px 12px 1px gray",display:"flex",flexDirection:"column"}} key={props.id}>
        <Link to={`${props.link}/${props.id}`} style={{width:"100%",height:"70%",marginBottom:"5px"}}>
        <img
          style={{height:"100%",width:"100%",borderRadius:"10px 10px 0px 0px"}}
          src={props.profile_path===null ? "https://www.cabinetstudioinc.com/wp-content/uploads/2016/04/blank-avatar1.png" : `${IMG_URL}${props.profile_path}`}
          alt=""
        />
        </Link>
        <span style={{padding:"0px 10px",fontWeight:`${props.css}`,fontSize:`${props.fontSize}`}}>{props.original_name}</span>
        <span style={{padding:"0px 10px",fontSize:"13px",marginBottom:"10px"}}>{props.character}</span>
      </div>  
  );
};

export default ActorCard;
