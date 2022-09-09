import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <h3 className="not-found">Page Not Found</h3>
      <div className="animation-link">
        <Link className="link-return" to={"/"}>
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
