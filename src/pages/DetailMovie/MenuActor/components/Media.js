import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IMG_BIG_URL, IMG_URL } from '../../../../api/url'
import classNames from "classnames/bind";
import styles from "./MeSo.module.scss";
const cx = classNames.bind(styles);

const Media = (props) => {
  const [checkActive, setCheckActive] = useState(1)
  const itemActive=['Most Popular','Videos','Backdrops','Posters']
  const detailMovie=props.detailMovie
  const similar=props.similar
  const onCheckActive = (e) => {
    itemActive.forEach((item,index)=>{
      if(index+1===Number(e.target.id))setCheckActive(Number(e.target.id))
    })
  }
  return (
    <div style={{height:"35%",marginTop:"20px"}}>
        <h4 style={{height:"40px",borderBottom:"1px solid rgb(219, 215, 215)"}}>Go to Discussions</h4>
        <div style={{display:"flex",alignItems:"center",gap:"30px",marginTop:"32px"}}>
            <h2>Media</h2>
            {
              itemActive.map((item,index)=>{
            return <h4 className={checkActive===index+1 ? cx('active') : ''} id={index+1} key={index} onClick={(id)=> onCheckActive(id)}>{item} <label style={{color:"gray"}}>0</label></h4>
              })
            }
        </div>
        <div style={{height:"50%",marginTop:"12px",paddingBottom:"30px"}}>
          <img alt='' src={`${IMG_BIG_URL}${detailMovie.backdrop_path}`} style={{width:"40%",height:"auto"}}/>
          <img alt='' src={`${IMG_URL}${detailMovie.poster_path}`} style={{width:"15%",height:"auto"}}/>
        </div>
        <div style={{height:"60%",paddingTop:"30px",marginTop:"10px"}}>
          <h4>Recommendations</h4>
          <div style={{display:"flex",flexDirection:"row",overflowX:"auto",height:"90%"}}>
          {
             similar.map((item)=>{
              return (
                <div style={{height:"55%",margin:"10px",borderRadius:"10px",boxShadow:"0 2px 8px rgb(0 0 0 / 10%)",display:"flex",flexDirection:"column",boxShadow:"1px 1px 12px 1px gray"}} key={item.id}>
                  <Link to={`/detailMovie/${item.id}`} style={{height:"100%",borderRadius:"10px",marginBottom:"10px"}}>
                  <img
                    style={{height:"100%",width:"auto"}}
                    src= {item.backdrop_path===null ? "https://www.namepros.com/attachments/empty-png.89209/" : `${IMG_BIG_URL}${item.backdrop_path}`}
                    alt=""
                  />
                  </Link>
                  <div style={{display:"flex",justifyContent:"space-between"}}>
                    <span style={{padding:"0px 10px",fontSize:"14px"}}>{item.title}</span>
                    <span style={{padding:"0px 10px",fontSize:"14px"}}>{`${Math.floor(item.vote_average*10)}%`}</span>
                  </div>
                </div>
                    )
                  })
            }
            </div>
        </div>
    </div>
  )
}

export default Media