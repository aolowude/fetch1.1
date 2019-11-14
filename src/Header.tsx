import * as React from "react";
import { Avatar } from "react-lorem-ipsum";
import { SearchDropdown } from "./components/SearchDropdown";

export const Header = () => (
  <header>
    <span className="date">{new Date().toDateString()}</span>
    <h1>Today</h1>
    <div className="avatar">
      <SearchDropdown />
    </div>
  </header>
);
