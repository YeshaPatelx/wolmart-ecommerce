import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { vendorMenu } from "../../../../data/menuData";

const VendorMenu = () => {
  return (
    <div className="nav-dropdown simple-dropdown">

      <ul>

        {vendorMenu.map((item, index) => (
          <li className="vendor-item has-submenu" key={index}>

            <div className="menu-title">
              {item.title}
              <FaChevronRight />
            </div>

            {/* Submenu */}
            <div className="submenu">

              <ul>
                {item.submenu.map((sub, i) => (
                  <li key={i}>{sub}</li>
                ))}
              </ul>

            </div>

          </li>
        ))}

      </ul>

    </div>
  );
};

export default VendorMenu;