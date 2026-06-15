import React from "react";

import DashboardContent from "./tabs/DashboardContent";
import OrdersContent from "./tabs/OrdersContent";
import DownloadsContent from "./tabs/DownloadsContent";
import AddressesContent from "./tabs/AddressesContent";
import AccountDetailsContent from "./tabs/AccountDetailsContent";


const AccountDashboard = ({
  activeTab,
  setActiveTab,
}) => {
  switch (activeTab) {
    case 1:
      return <OrdersContent />;

    case 2:
      return <DownloadsContent />;

    case 3:
      return <AddressesContent />;

    case 4:
      return <AccountDetailsContent />;

    case 5:
      return <WishlistContent />;

    default:
      return (
        <DashboardContent
          setActiveTab={setActiveTab}
        />
      );
  }
};

export default AccountDashboard;