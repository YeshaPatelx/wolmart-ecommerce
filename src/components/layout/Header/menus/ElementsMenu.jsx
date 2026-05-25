import React from 'react'
import { elementsMenu } from "../../../../data/menuData";

const ElementsMenu = () => {
    return (
        <div className="nav-dropdown simple-dropdown">

            <ul>

                {elementsMenu.map((item, index) => (
                    <li key={index}>

                        <div className="menu-title">
                            {item.title}
                        </div>

                    </li>
                ))}

            </ul>

        </div>
    )
}

export default ElementsMenu
