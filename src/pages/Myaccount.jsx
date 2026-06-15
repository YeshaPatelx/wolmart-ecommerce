import React, { useState } from "react";
import PageBanner from "../components/common/PageBanner/PageBanner";
import Breadcrumb from "../components/common/Breadcrumb/Breadcrumb";

import AccountSidebar from "../components/myaccount/AccountSidebar";
import AccountDashboard from "../components/myaccount/AccountDashboard";

import "../components/myaccount/styles/myaccount.css";

const Myaccount = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <PageBanner title="My Account" />

            <div className="container">
                <Breadcrumb items={[{ label: "My Account" }]} />

                <div className="myaccount-layout">
                    <AccountSidebar
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />

                    <AccountDashboard
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                </div>
            </div>
        </>
    );
};

export default Myaccount;