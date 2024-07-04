import { BusinessData } from '@/types/business';
import React, { FC } from 'react';
interface INavBarProps {
  businessData: BusinessData;
}

export const NavBar: FC<INavBarProps> = (props) => {
  return (
    // Todo: add fixed-top to navbar
    <nav className="navbar navbar-expand-lg navbar-light py-3 bg-[#6F4E37]">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#page-top">
          {props.businessData.shopName}
        </a>
        {/* <img src="coffee-shop-logo.png" alt="" srcset="" width="42" height="42"> */}
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto my-2 my-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                เกี่ยวกับเรา
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#reviewer">
                รีวิว
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                รูปภาพ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                ติดต่อเรา
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
