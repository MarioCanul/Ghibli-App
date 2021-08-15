import React, { useState } from "react";

import { Search } from "./Search";

export const GhibliHeader = () => {
 const [film, setFilm] = useState({})
  return (
    <div className="header-main">
      <div className="header-logo">
        <img src="./src/logo.svg"
        alt='ghibli-logo' />
      </div>
      <div className="header-search  mt-1 mb-1">
      <Search />
      </div>
    </div>
  );
};
