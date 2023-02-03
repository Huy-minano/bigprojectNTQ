import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getData } from "../../api/apiHandle"
import { MOVIE_URL } from "../../api/url"
function DetailMovie() {
  const [detail,setDetail] = useState({})
  const param = useParams()
  const id = param.idMovie
  const queryOjb = {
    api_key : 'e9e9d8da18ae29fc430845952232787c',
    append_to_response : 'videos'
  }
  useEffect(()=>{
    getData(`${MOVIE_URL}/${id}`,queryOjb).then((res)=>setDetail(res.data))
  },[])
  console.log(detail);
  return (
      <h1></h1>
  )
}

export default DetailMovie
