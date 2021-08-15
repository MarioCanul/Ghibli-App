import React, { useState, useEffect, useRef, useLayoutEffect, useContext } from 'react';
import { GhibliContext } from '../reducer/GhibliContext';

export const Search = () => {
    const { films} = useContext(GhibliContext);
    const {movies} = films;
    const [display, setDisplay] = useState(false);
    const [options, setOptions] = useState(movies);
    const [search, setSearch] = useState("");
    const wrapperRef = useRef(null)
    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);
        return () => {
          window.removeEventListener("mousedown", handleClickOutside);
        };
      });
      const handleClickOutside = event => {
        const { current: wrap } = wrapperRef;
        if (wrap && !wrap.contains(event.target)) {
          setDisplay(false);
        }
      };
      const updatePokeDex = poke => {
        setSearch(poke);
        setDisplay(false);
      };
    return (
        <div ref={wrapperRef} className="header-search  mt-1 mb-1">
       
        <input type="text"
        placeholder='Buscar Titulo'
        className='text-search' 
        onClick={() => setDisplay(!display)}
        onChange={event => setSearch(event.target.value)}
        value={search}
        
            />
              {display && (
        <div className="autoContainer">
          {options
            .filter(({ title }) => title.indexOf(search.toLowerCase()) > -1)
            .map((value, i) => {
              return (
                <div
                  onClick={() => updatePokeDex(value.title)}
                  className="option"
                  key={i}
                  tabIndex="0"
                >
                  <span>{value.title}</span>
                  
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

