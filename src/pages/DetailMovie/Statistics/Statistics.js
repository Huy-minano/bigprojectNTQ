import React from "react";
import classNames from "classnames/bind";
import styles from "./Statistics.module.scss";

const cx = classNames.bind(styles);

const Statistics = (props) => {
  const detailMovie=props.detailMovie
  const spokenLanguages=detailMovie.spoken_languages
  const originalLanguage= detailMovie.original_language
  const changeLang = (str) =>{
    let language=''
    spokenLanguages?.forEach((item) => {
      if(str === item.iso_639_1){language = item.english_name}
    });
    return language
  }
  return (
    <div className={cx("wrapper")}>
      <div style={{height:"5.2%",display:"flex",alignItems:'flex-end',gap:"15px",marginBottom:"10px"}}>
        <i style={{fontSize:"25px"}} className="fa-brands fa-square-facebook"></i>
        <i style={{fontSize:"25px"}} className="fa-brands fa-twitter"></i>
        <i style={{fontSize:"25px"}} className="fa-brands fa-square-instagram"></i>
        <i style={{fontSize:"25px"}} className="fa-solid fa-link"></i>
      </div>
      <div style={{marginBottom:"25px"}}>
        <h4>Status</h4>
        <p style={{fontSize:"15px",marginBottom:"13px"}}>{detailMovie.status}</p>
        <h4>Original Language</h4>
        <p style={{fontSize:"15px",marginBottom:"13px"}}>{changeLang(originalLanguage)}</p>
        <h4>Budget</h4>
        <p style={{fontSize:"15px",marginBottom:"13px"}}>${detailMovie.budget}</p>
        <h4>Revenue</h4>
        <p style={{fontSize:"15px",marginBottom:"13px"}}>${detailMovie.revenue}</p>
      </div>
      <div style={{height:"10%",marginBottom:"25px"}} className={cx('keyword')}>
        <h4 style={{marginBottom:"10px"}}>Key Words</h4>
        <button style={{fontSize:"15px",height:"22%",width:"30%",borderRadius:"5px",marginRight:"2px",background:"rgb(216, 217, 224)"}}>faker</button>
        <button style={{fontSize:"15px",height:"22%",width:"50%",borderRadius:"5px",background:"rgb(216, 217, 224)"}}>the shy bengi</button>
        <button style={{fontSize:"15px",height:"22%",width:"40%",borderRadius:"5px",marginTop:"2px",background:"rgb(216, 217, 224)"}}>sofm hn</button>
      </div>
      <div style={{height:"8.8%"}}>
        <h4>Content Score</h4>
        <div style={{background:"rgba(31.5, 10.5, 10.5, 1)",height:"30%",borderRadius:"10px",color:"white",display:"flex",alignItems:"center",paddingLeft:"8px"}}><b>100</b></div>
        <p style={{fontSize:"13px"}}>Yes! Looking good!</p>
      </div>
      <div style={{height:"18%",marginBottom:"10px"}}>
        <h4>Top Contributors</h4>
        <div style={{display:"flex",marginTop:"10px"}}>
          <div style={{marginRight:"10px",width:"15%",height:"28%",borderRadius:"50%",background:"green",color:"white",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",padding:"5px"}}><p>M</p></div>
          <div>
            <h4>16</h4>
            <p style={{fontSize:"14px"}}>TMDB-Bot</p>
          </div>
        </div>
        <div style={{display:"flex",marginTop:"10px"}}>
          <div style={{marginRight:"10px",width:"15%",height:"28%",borderRadius:"50%",background:"blue",color:"white",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",padding:"5px"}}><p>C</p></div>
          <div>
            <h4>153</h4>
            <p style={{fontSize:"14px"}}>cyrax_36</p>
          </div>
        </div>
        <div style={{display:"flex",marginTop:"10px"}}>
          <div style={{marginRight:"10px",width:"15%",height:"28%",borderRadius:"50%",background:"red",color:"white",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",padding:"5px"}}><p>T</p></div>
          <div>
            <h4>89</h4>
            <p style={{fontSize:"14px"}}>Filipe Manuel Dias Neto</p>
          </div>
        </div>
        <p style={{marginTop:"10px",fontSize:"15px"}}>View Edit History</p>
      </div>
      <div style={{height:"22%",paddingTop:"20px"}}>
        <h4>Popularity Trend</h4>
        <img src="https://banner2.cleanpng.com/20180809/pes/kisspng-computer-icons-electrocardiography-heart-rate-medi-cardiogram-heart-rate-graphic-svg-png-icon-free-do-5b6c3b34058af8.2341671015338197000227.jpg" alt="" style={{height:"30%",width:"80%",margin:"10px 0px"}}/>
        <button style={{background:"rgb(32, 11, 11)",height:"13%",padding:"10px 20px",borderRadius:"20px",marginBottom:"15px"}}>
        <i style={{color:"white",marginRight:"10px"}} className="fa-solid fa-lock"></i>
        <b style={{color:"white"}}>LOGIN TO EDIT</b>
        </button>
        <div style={{display:"flex",gap:"7px",marginBottom:"12px",color:"#a7bbbb",display:"flex",alignItems:"center"}}>
        <i className="fa-solid fa-keyboard"></i>
        <p>Keyboard Shortcuts</p>
        </div>
        <div style={{display:"flex",gap:"7px",display:"flex",alignItems:"center"}}>
        <i className="fa-solid fa-circle-exclamation"></i>
        <p>Login to report an issue</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
