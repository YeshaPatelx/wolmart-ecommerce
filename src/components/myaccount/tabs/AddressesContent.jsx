import React from "react";
import { FiMapPin, FiArrowRight } from "react-icons/fi";

const AddressesContent = () => {
  return (
    <div className="account-section">
      <div className="account-section-title">
        <FiMapPin />
        <h3>Addresses</h3>
      </div>

      <p className="address-desc">
        The following addresses will be used on the checkout page by default.
      </p>

      <div className="address-grid">

        {/* Billing Address */}
        <div className="address-box">
          <h4>Billing Address</h4>

          <table className="address-table">
            <tbody>
              <tr>
                <th scope="row">Name:</th>
                <td>John Doe</td>
              </tr>

              <tr>
                <th scope="row">Company:</th>
                <td>Conia</td>
              </tr>

              <tr>
                <th scope="row">Address:</th>
                <td>Wall Street</td>
              </tr>

              <tr>
                <th scope="row">City:</th>
                <td>California</td>
              </tr>

              <tr>
                <th scope="row">Country:</th>
                <td>United States (US)</td>
              </tr>

              <tr>
                <th scope="row">Postcode:</th>
                <td>92020</td>
              </tr>

              <tr>
                <th scope="row">Phone:</th>
                <td>1112223334</td>
              </tr>
            </tbody>
          </table>

          <button className="address-edit-btn">
            EDIT YOUR BILLING ADDRESS
            <FiArrowRight />
          </button>
        </div>

        {/* Shipping Address */}
        <div className="address-box">
          <h4>Shipping Address</h4>

          <table className="address-table">
            <tbody>
              <tr>
                <th scope="row">Name:</th>
                <td>John Doe</td>
              </tr>

              <tr>
                <th scope="row">Company:</th>
                <td>Conia</td>
              </tr>

              <tr>
                <th scope="row">Address:</th>
                <td>Wall Street</td>
              </tr>

              <tr>
                <th scope="row">City:</th>
                <td>California</td>
              </tr>

              <tr>
                <th scope="row">Country:</th>
                <td>United States (US)</td>
              </tr>

              <tr>
                <th scope="row">Postcode:</th>
                <td>92020</td>
              </tr>

              <tr>
                <th scope="row">Phone:</th>
                <td>1112223334</td>
              </tr>
            </tbody>
          </table>

          <button className="address-edit-btn">
            EDIT YOUR SHIPPING ADDRESS
            <FiArrowRight />
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddressesContent;