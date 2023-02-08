import React, { useState } from 'react'
import classNames from "classnames/bind";
import styles from "./MeSo.module.scss";
const cx = classNames.bind(styles);

const Social = () => {
    const [checkActive, setCheckActive] = useState(false)
  return (
    <div style={{height:"22%",marginTop:"20px"}}>
        <h4 style={{height:"40px",borderBottom:"1px solid rgb(219, 215, 215)"}}>Full Cast & Crew</h4>
        <div style={{display:"flex",alignItems:"center",gap:"30px",marginTop:"32px"}}>
            <h2>Social</h2>
            <h4 className={!checkActive && cx('active')} onClick={()=>{setCheckActive(false)}}>Reviews <label style={{color:"gray"}}>3</label></h4>
            <h4 className={checkActive && cx('active')} onClick={()=>{setCheckActive(true)}}> Discussions <label style={{color:"gray"}}>16</label></h4>
        </div>
        <div style={{paddingLeft:"10px",marginTop:"10px",height:"18%",display:"flex",justifyContent:"space-between",alignItems:"center",borderRadius:"5px",boxShadow:"1px 1px 12px 1px rgb(227 217 217)"}}>
            <div style={{ background:"yellow",height:"70%",width:"4%",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",borderRadius:"50%"}}>T</div>
            <p style={{width:"50%",fontSize:"14px"}}>The Prison Warden was worried Andy would reveal his dirty dealings</p>
            <p style={{fontSize:"13px"}}>Open</p>
            <p style={{fontSize:"13px"}}>9</p>
            <div style={{width:"18%"}}>
                <p style={{fontSize:"13px"}}>Jun 07, 2021 at 8:32 AM</p>
                <p style={{fontSize:"13px"}}>by SueDNim</p>
            </div>
        </div>
        <div style={{paddingLeft:"10px",height:"18%",display:"flex",justifyContent:"space-between",alignItems:"center",borderRadius:"5px",boxShadow:"1px 1px 12px 1px rgb(227 217 217)"}}>
            <div style={{background:"green",height:"70%",width:"4%",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",borderRadius:"50%"}}>A</div>
            <p style={{width:"50%",fontSize:"14px"}}>Deserved Best Picture that year over Forest Gump</p>
            <p style={{fontSize:"13px"}}>Open</p>
            <p style={{fontSize:"13px"}}>7</p>
            <div style={{width:"18%"}}>
                <p style={{fontSize:"13px"}}>Oct 01, 2018 at 3:28 PM</p>
                <p style={{fontSize:"13px"}}>by A-Dubya</p>
            </div>
        </div>
        <div style={{paddingLeft:"10px",height:"18%",display:"flex",justifyContent:"space-between",alignItems:"center",borderRadius:"5px",boxShadow:"1px 1px 12px 1px rgb(227 217 217)"}}>
            <div style={{background:"blue",height:"70%",width:"4%",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",borderRadius:"50%"}}>M</div>
            <p style={{width:"50%",fontSize:"14px"}}>Morgan Freeman</p>
            <p style={{fontSize:"13px"}}>Open</p>
            <p style={{fontSize:"13px"}}>0</p>
            <div style={{width:"18%"}}>
                <p style={{fontSize:"13px"}}>Aug 30, 2017 at 12:29 AM</p>
                <p style={{fontSize:"13px"}}>by Moonglum9</p>
            </div>
        </div>
    </div>
  )
}

export default Social