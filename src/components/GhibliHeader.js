import React from "react";

import { Search } from "./Search";

export const GhibliHeader = () => {
 
  return (
    <div className="header-main">
      <div className="header-logo">
        <img src="./src/logo.svg"
        alt='ghibli-logo' />
      </div>
      <Search/>
        
     
    </div>
  );
};
