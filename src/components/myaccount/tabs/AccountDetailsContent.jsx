import React from "react";
import { FiUser } from "react-icons/fi";

const AccountDetailsContent = () => {
  return (
    <div className="account-section">
      <div className="account-section-title">
        <FiUser />
        <h3>Account Details</h3>
      </div>

      <form className="account-details-form">
        <div className="form-row">
          <div className="form-group">
            <label>
              First name <span>*</span>
            </label>
            <input type="text" defaultValue="John" />
          </div>

          <div className="form-group">
            <label>
              Last name <span>*</span>
            </label>
            <input type="text" defaultValue="Doe" />
          </div>
        </div>

        <div className="form-group">
          <label>
            Display name <span>*</span>
          </label>
          <input type="text" defaultValue="John Doe" />

          <small>
            This will be how your name will be displayed in the
            account section and in reviews.
          </small>
        </div>

        <div className="form-group">
          <label>
            Email address <span>*</span>
          </label>
          <input
            type="email"
            defaultValue="john@example.com"
          />
        </div>

        <div className="password-section">
          <h4>Password Change</h4>

          <div className="form-group">
            <label>Current Password</label>
            <input
              type="password"
              placeholder="Leave blank to leave unchanged"
            />
          </div>

          <div className="form-group">
            <label>New Password</label>
            <input
              type="password"
              placeholder="Leave blank to leave unchanged"
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
            />
          </div>
        </div>

        <button
          type="submit"
          className="account-save-btn"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default AccountDetailsContent;