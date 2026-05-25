import React from "react";
import { pagesMenu } from "../../../../data/menuData";

const PagesMenu = () => {
  return (
    <div className="nav-dropdown simple-dropdown">

      <ul>

        {pagesMenu.map((item, index) => (
          <li key={index}>

            <div className="menu-title">
              {item.title}
            </div>

          </li>
        ))}

      </ul>

    </div>
  );
};

export default PagesMenu;