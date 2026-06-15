
import React from "react";
import { FiClipboard } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
const OrdersContent = () => {
    return (
        <div className="account-section">
            <div className="account-section-title">
                <FiClipboard />
                <h3>Orders</h3>
            </div>

            <div className="table-responsive">

                <table className="account-table">
                    <thead>
                        <tr>
                            <th>Order</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>#2321</td>
                            <td>August 20, 2021</td>
                            <td>
                                <span className="order-status">
                                    Processing
                                </span>
                            </td>
                            <td>$121.00</td>
                            <td>
                                <button className="order-view-btn">
                                    View
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>#2321</td>
                            <td>August 20, 2021</td>
                            <td>
                                <span className="order-status">
                                    Processing
                                </span>
                            </td>
                            <td>$121.00</td>
                            <td>
                                <button className="order-view-btn">
                                    View
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="orders-footer">
                <Link to="/shop" className="go-shop-btn">
                    Go Shop
                    <FiArrowRight />
                </Link>
            </div>
        </div>
    );
};

export default OrdersContent;