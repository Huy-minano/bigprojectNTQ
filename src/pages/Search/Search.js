import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../api/apiHandle";
import { SEARCH_URL } from "../../api/url";
import FilmSearch from "../../components/FilmSearch/FilmSearch";
import MenuQuantity from "../../components/Menuquantity/MenuQuantity";
import PersonSearch from "./PersonSearch/PersonSearch";
import ReactPaginate from "react-paginate";
import styles from "./Search.module.scss";
const cx = classNames.bind(styles);

function Search() {
  const [listFilmSearch, setListFilmSearch] = useState([]);
  const params = useParams();
  const searchKey = params.searchKey;
  const [pageSearch, setPageSearch] = useState(1);
  const [check, setCheck] = useState(false);
  const [checkP, setCheckP] = useState(false);
  const [totalResult, setTotalResult] = useState(0);
  const [totalPerson, setTotalPerson] = useState(0);
  const [totalCollection, setTotalCollection] = useState(0);
  const [totalKeyword, setTotalKeyword] = useState(0);
  const [totalCompany, setTotalCompany] = useState(0);
  const [totalTv, setTotalTv] = useState(0);
  const [listPersonSearch, setListPersonSearch] = useState([]);
  const [checkPM, setCheckPM] = useState(true);
  const [pageCountMovie, setPageCountMovie] = useState(0);
  const [pageCountPerson, setPageCountPerson] = useState(0);
  const queryObj = {
    api_key: "e9e9d8da18ae29fc430845952232787c",
    language: "vi",
    query: searchKey,
    page: pageSearch,
    include_adult: "false",
  };
  useEffect(() => {
    Promise.all([
      getData(`${SEARCH_URL}/movie`, queryObj),
      getData(`${SEARCH_URL}/person`, queryObj),
      getData(`${SEARCH_URL}/tv`, queryObj),
      getData(`${SEARCH_URL}/collection`, queryObj),
      getData(`${SEARCH_URL}/company`, queryObj),
      getData(`${SEARCH_URL}/keyword`, queryObj),
    ]).then((res) => {
      setTotalResult(res[0].data.total_results);
      setListFilmSearch(res[0].data.results);
      setCheck(true);
      setPageCountMovie(res[0].data.total_pages);
      setListPersonSearch(res[1].data.results);
      setTotalPerson(res[1].data.total_results);
      setCheckP(true);
      setPageCountPerson(res[1].data.total_pages);
      setTotalTv(res[2].data.total_results)
      setTotalCollection(res[3].data.total_results)
      setTotalCompany(res[4].data.total_results)
      setTotalKeyword(res[5].data.total_results)
    });
  }, [pageSearch]);
  const handlePeople = () => {
    setCheckPM(false);
  };
  const handleMovie = () => {
    setCheckPM(true);
  };
  return (
    <div className={cx("wrapper")}>
      <MenuQuantity
        checkPM={checkPM}
        movie={totalResult}
        id={listFilmSearch.id}
        person={totalPerson}
        onPeople={handlePeople}
        onMovie={handleMovie}
        tv={totalTv}
        coll={totalCollection}
        company={totalCompany}
        keyword={totalKeyword}
      />

      <div className={cx("listFilmSearch")}>
        {params.searchKey === undefined ? (
          <p>There are no movies that matched your query.</p>
        ) : checkPM ? (
          listFilmSearch?.length > 0 ? (
            listFilmSearch.map((item) => {
              return (
                <FilmSearch
                  listPersonSearch={listPersonSearch}
                  key={item.id}
                  name={item.title.toUpperCase()}
                  id={item.id}
                  date={item.release_date}
                  overview={item.overview}
                  poster_path={item.poster_path}
                />
              );
            })
          ) : check === true && listFilmSearch.length === 0 ? (
            <p>There are no movies that matched your query.</p>
          ) : (
            <p>Loading....</p>
          )
        ) : listPersonSearch?.length > 0 ? (
          listPersonSearch.map((item) => {
            return (
              <PersonSearch
                id={item.id}
                key={item.id}
                known_for_department={item.known_for_department}
                name={item.name}
                profile_path={item.profile_path}
                known_for={item.known_for}
              />
            );
          })
        ) : checkP === true && listPersonSearch.length === 0 ? (
          <p>There are no persons that matched your query.</p>
        ) : (
          <p>Loading....</p>
        )}

        {listFilmSearch.length === 0 && listPersonSearch.length === 0 ? (
          ""
        ) : checkPM ? (
          <div className={cx("search-pagination")}>
            <ReactPaginate
              breakLabel={"..."}
              nextLabel="Next >"
              previousLabel="< Previous"
              onPageChange={(e) => {
                setPageSearch(e.selected + 1);
              }}
              pageRangeDisplayed={3}
              pageCount={pageCountMovie}
              marginPagesDisplayed={3}
              activeClassName={cx("active")}
            />
          </div>
        ) : (
          <div className={cx("search-pagination")}>
            <ReactPaginate
              breakLabel={"..."}
              nextLabel="Next >"
              previousLabel="< Previous"
              onPageChange={(e) => {
                setPageSearch(e.selected + 1);
              }}
              pageRangeDisplayed={3}
              pageCount={pageCountPerson}
              marginPagesDisplayed={3}
              activeClassName={cx("active")}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
