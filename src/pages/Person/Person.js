import classNames from "classnames/bind";
import styles from "./Person.module.scss";
import InforGeneral from "./InforGeneral";
import InforDetail from "./InforDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "../../api/apiHandle";
import { PERSON_URL } from "../../api/url";
const cx = classNames.bind(styles);
function Person() {
  const [detailPerson, setDetailPerson] = useState({});
  const [creditsMovie, setCreditsMovie] = useState([]);
  const [check, setCheck] = useState(false);
  const params = useParams();
  const idPerson = params.idPerson;
  const queryObj = {
    api_key: "e9e9d8da18ae29fc430845952232787c",
    language: "en-US",
  };
  useEffect(() => {
    getData(`${PERSON_URL}/${idPerson}`, queryObj).then((res) => {
      setDetailPerson(res.data);
      setCheck(true);
    });
    getData(`${PERSON_URL}/${idPerson}/movie_credits`, queryObj).then((res) => {
      setCreditsMovie(res.data.cast.slice(0, 8));
    });
  }, []);
  return (
    <div className={cx("wrapper")}>
      {
        (Object.keys(detailPerson).length===0 && check===false) ? (<h1>Loading....</h1>) : (
          check === true ? (
            <>
              <InforGeneral
                profile_path={detailPerson.profile_path}
                place_of_birth={detailPerson.place_of_birth}
                gender={detailPerson.gender}
                birthday={detailPerson.birthday}
                also_known_as={detailPerson.also_known_as}
                known_for_department={detailPerson.known_for_department}
                popularity={detailPerson.popularity}
                deathday={detailPerson.deathday}
              />
              <InforDetail
                name={detailPerson.name}
                biography={detailPerson.biography}
                creditsMovie={creditsMovie}
              />
            </>
          ) : (<h1>Nhân vật ẩn danh !!!!</h1>)
        )
      }
    </div>
  );
}

export default Person;
