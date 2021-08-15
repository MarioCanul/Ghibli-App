import React from "react";
import logo from './../assets/img/logo.svg'
import { Search } from "./Search";

export const GhibliHeader = () => {
  return (
    <>
    <div className="header-main">
      <div className="header-logo">
        <img src={logo}
        alt='ghibli-logo' />
      </div>
    </div>
    <div className="header-search  mt-1 mb-1">
      <Search />
      </div>
    </>
  );
};
