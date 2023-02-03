import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../api/apiHandle";
import { SEARCH_URL } from "../../api/url";

function Search() {
  const [listFilmSearch, setListFilmSearch] = useState([]);
  const [status, setStatus ] = useState(0);
  const params = useParams();
  const queryOjb = {
    api_key: "e9e9d8da18ae29fc430845952232787c",
    page: 1,
    query: params.searchKey,
  };
  const FilmResult = () => {
    return (
      <>
        {(status===200 && listFilmSearch.length > 0) ? (listFilmSearch?.map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.name}</h3>
            </div>
          )
        })) : (<h4>There are no movies that matched your query.</h4>)}
      </>
    );
  };

  useEffect(() => {
    getData(SEARCH_URL, queryOjb).then((res) => {
      setListFilmSearch(res.data.results);
      setStatus(200)
    })
  }, []);
  return (
    <div>
      <i className="fa-solid fa-magnifying-glass-location"></i>
      <input placeholder="Search for a movie, tv show, person,....."></input>
      <div>
        <FilmResult />
      </div>
    </div>
  );
}

export default Search;
