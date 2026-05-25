import React from "react";

const ClientCard = ({ item }) => {
  return (
    <div className="client-card">

      <img
        src={item.image}
        alt="client-logo"
        className="client-logo"
      />

    </div>
  );
};

export default ClientCard;