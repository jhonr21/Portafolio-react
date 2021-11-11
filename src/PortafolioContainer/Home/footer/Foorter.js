import React from "react";
import '../footer/Footer.css'


export default function foorter() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <div class="d-flex flex-column">
          <footer class="footer">
            <div>
              <a href="https://coreui.io">CoreUI</a>
              <span>&copy; 2020 creativeLabs.</span>
            </div>
            <div class="ml-auto">
              <span>Powered by</span>
              <a href="https://coreui.io">CoreUI</a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
