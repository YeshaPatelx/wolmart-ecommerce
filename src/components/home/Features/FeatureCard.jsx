import React from "react";

const FeatureCard = ({ item }) => {
    const Icon = item.icon;

    return (
        

            <div className="feature-card">

                <div className="feature-icon">
                    <Icon />
                </div>

                <div className="feature-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                </div>

            </div>
      
    );
};

export default FeatureCard;