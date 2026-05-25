  import React from "react";
  import { megaMenuData } from "../../../../data/menuData";

  const MegaMenu = () => {
    return (
      <div className="nav-dropdown mega-menu">

        {megaMenuData.map((menu, index) => (
          <div className="mega-column" key={index}>

            <h4>{menu.title}</h4>

            <ul>
              {menu.links.map((link, i) => (
                <li key={i}>

                  {link.name}

                  {link.badge && (
                    <span className={`menu-badge ${link.badge}`}>
                      {link.badge}
                    </span>
                  )}

                </li>
              ))}
            </ul>

          </div>
        ))}

      </div>
    );
  };

  export default MegaMenu;