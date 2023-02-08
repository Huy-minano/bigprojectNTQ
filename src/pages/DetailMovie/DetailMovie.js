import classNames from "classnames/bind";
import styles from "./DetailMovie.module.scss";
import MenuActor from "./MenuActor";
import { useEffect, useState } from "react";
import TitleMovie from "./TitleMovie";
import { getData } from "../../api/apiHandle";
import { useParams } from "react-router-dom";
import { MOVIE_URL } from "../../api/url";
import axios from "axios";
import Statistics from "./Statistics";
const cx = classNames.bind(styles);
function DetailMovie() {
  const [detailMovie, setDetailMovie] = useState({});
  const [casts, setCasts] = useState([]);
  const [status, setStatus] = useState(0);
  const [similar,setSimilar] = useState([])
  const [keyTrailer, setKeyTrailer] = useState("")
  const [siteTrailer, setSiteTrailer] = useState("")
  const param = useParams();
  const idMovie = param.idMovie;
  const objquery = {
    api_key: "e9e9d8da18ae29fc430845952232787c",
    append_to_response: "videos",
    language: "vi",
  };
  useEffect(() => {
    getData(`${MOVIE_URL}/${idMovie}`, objquery).then((res) =>
    {
      setDetailMovie(res.data)
    }
    
    );
    axios(`${MOVIE_URL}/${idMovie}/similar?api_key=${objquery.api_key}&language=vi&page=1`
    )
    .then(res=>{setSimilar(res.data.results)})
    axios(
      `${MOVIE_URL}/${idMovie}/casts?api_key=${objquery.api_key}`
    )
      .then((res) => {
        setCasts(res.data.cast);
        setStatus(res.status);
      })
      .catch((e) => {
        setStatus(404);
      });
    axios(`${MOVIE_URL}/${idMovie}/videos?api_key=${objquery.api_key}&append_to_response=videos`).then((res)=>{
      setKeyTrailer(res.data.results[0].key);
      setSiteTrailer(res.data.results[0].site);
    })
  }, [idMovie]);
  return status === 404 ? (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <b style={{ fontSize: "50px" }}>Phim đã ngừng chiếu....</b>
    </div>
  ) : status === 200 ? (
    <div className={cx("wrapper")}>
      <TitleMovie detailMovie={detailMovie} keyTrailer={keyTrailer} siteTrailer={siteTrailer}/>
        <div className={cx("content")}>
          <MenuActor casts={casts} detailMovie={detailMovie} similar={similar}/>
          <Statistics detailMovie={detailMovie} />
        </div>
      </div>
  ) : (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <b style={{ fontSize: "50px" }}>Loading....</b>
    </div>
  );
}
export default DetailMovie;

