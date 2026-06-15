import React from "react";
import { accountMenuData } from "../../../data/accountMenuData";

const DashboardContent = ({ setActiveTab }) => {
  return (
    <div className="account-dashboard">
      <p className="account-welcome">
        Hello <span>John Doe</span>
        {" "}(
        not <span>John Doe</span>?
        {" "}
        <button
          className="account-link-btn"
          onClick={() => console.log("logout")}
        >
          Log out
        </button>
        )
      </p>

      <p className="account-text">
        From your account dashboard you can view your{" "}
        <button
          className="account-link-btn"
          onClick={() => setActiveTab(1)}
        >
          recent orders
        </button>
        , manage{" "}
        <button
          className="account-link-btn"
          onClick={() => setActiveTab(3)}
        >
          shipping and billing addresses
        </button>
        , and{" "}
        <button
          className="account-link-btn"
          onClick={() => setActiveTab(4)}
        >
          edit your password and account details
        </button>
        .
      </p>

      <div className="account-cards">
        {accountMenuData.slice(1).map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="account-card"
              onClick={() => setActiveTab(item.id)}
            >
              <div className="account-card-icon">
                <Icon />
              </div>

              <h5>{item.label}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardContent;