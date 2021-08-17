import React, { useState, useContext } from "react";
import Autocomplete from "react-autocomplete";
import { useHistory } from "react-router-dom";
import { GhibliContext } from "../reducer/GhibliContext";
const style = {
  Menu: {
    borderRadius: "3px",
    boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
    background: "rgba(255, 255, 255, 0.9)",
    padding: "2px 0",
    fontSize: "90%",
    position: "fixed",
    overflow: "auto",
    maxHeight: "100%",
  },
  input: {
    className: "text-search",
  },
};
export const Search = () => {
  const history = useHistory();
  const { films, dispatch } = useContext(GhibliContext);
  const { movies, especies, locations, error, loading, personas, vehiculos } =
    films;
  const [search, setSearch] = useState("");
  const handleItem = (e) => {
    e.preventDefault();
    const FilmSelected = movies.filter((m) => m.title === search);
    if (FilmSelected.length!==0) {
      dispatch({
        type: "Search",
        payload: {
          movies,
          especies,
          personas,
          vehiculos,
          locations,
          loading,
          movieSelected:FilmSelected,
          error,
        },
      });
      setSearch("");
      history.push('/');
    }
  };
  return (
    <>
      <form className="form-search" onSubmit={handleItem}>
        <Autocomplete
          wrapperStyle={style.root}
          inputProps={style.input}
          menuStyle={style.Menu}
          getItemValue={(item) => item.title}
          items={movies}
          renderItem={(item, isHighlighted) => {
            return (
              <div
                key={item.id}
                style={{ background: isHighlighted ? "lightgray" : "white" }}
              >
                {item.title}
              </div>
            );
          }}
          shouldItemRender={(item, value) =>
            item.title.toLowerCase().indexOf(value.toLowerCase()) > -1
          }
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onSelect={(val) => setSearch(val)}
        />
        <button className="btn btn-primary" type="sumbit">
          Buscar
        </button>
      </form>
    </>
  );
};
