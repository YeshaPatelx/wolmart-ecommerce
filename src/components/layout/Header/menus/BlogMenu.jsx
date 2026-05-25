import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { blogMenu } from "../../../../data/menuData";

const BlogMenu = () => {
  return (
    <div className="nav-dropdown simple-dropdown">

      <ul>

        {blogMenu.map((item, index) => (

          <li
            key={index}
            className={item.submenu ? "has-submenu" : ""}
          >

            <div className="menu-title">

              {item.title}

              {item.submenu && <FaChevronRight />}

            </div>

            {/* SUBMENU */}
            {item.submenu && (

              <div className="submenu">

                <ul>

                  {item.submenu.map((subItem, i) => (
                    <li key={i}>{subItem}</li>
                  ))}

                </ul>

              </div>

            )}

          </li>

        ))}

      </ul>

    </div>
  );
};

export default BlogMenu;