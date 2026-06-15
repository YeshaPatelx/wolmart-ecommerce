import React from "react";
import { accountMenuData } from "../../data/accountMenuData";

const AccountSidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="account-sidebar">
   

      {accountMenuData.map((item) => (
        <button
          key={item.id}
          className={`account-menu-item ${
            activeTab === item.id ? "active" : ""
          }`}
          onClick={() => setActiveTab(item.id)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default AccountSidebar;