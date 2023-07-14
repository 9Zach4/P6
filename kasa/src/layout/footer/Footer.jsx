import React from "react";
import "./Footer.scss";
import logoFooter from "../../assets/logo_footer.png";
function Footer() {
  return (
    <div className="footer">
      <div>
        <img src= {logoFooter} alt="logo" width="100" />
      </div>
      <div>© 2020 Kasa. All rights reserved</div>
    </div>
  );
}

export default Footer;