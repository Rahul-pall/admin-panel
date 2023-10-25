import React from "react";
import {
  TbSettings2,
  TbDashboard,
  TbBrandProducthunt,
  TbHelpSquare,
} from "react-icons/tb";
import {RiArrowDropDownLine} from 'react-icons/ri'
import {FaChevronRight} from 'react-icons/fa'
import { RiCustomerService2Fill, RiWallet3Line } from "react-icons/ri";
import { CiDiscount1 } from "react-icons/ci";
function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <TbSettings2 />
          <div>Dashboard</div>
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
        <div className="icon-set"><TbDashboard /> <div>Dashboard</div></div>
          <div><FaChevronRight/></div>
        </li>
        <li className="sidebar-list-item">
        <div className="icon-set"><TbBrandProducthunt /> <div>Products</div></div>
        <div><FaChevronRight/></div>
        </li>
        <li className="sidebar-list-item">
        <div className="icon-set"><RiCustomerService2Fill /> <div>Customers</div></div>
        <div><FaChevronRight/></div>
        </li>
        <li className="sidebar-list-item">
        <div className="icon-set"><RiWallet3Line /> <div>Income</div></div>
        <div><FaChevronRight/></div>
        </li>
        <li className="sidebar-list-item">
        <div className="icon-set"><CiDiscount1 /> <div>Promote</div></div>
        <div><FaChevronRight/></div>
        </li>
        <li className="sidebar-list-item">
        <div className="icon-set"><TbHelpSquare /> <div>Help</div></div>
        <div><FaChevronRight/></div>
        </li>
      </ul>

      <div className="third-box manager">
        <div className="img-hading">
          <div className="image">
            <img src="https://picsum.photos/id/233/30/30" alt="" />
          </div>
          <div className="third-hading">
            <p>Abstract 3d</p>
            <p className="light-text">
              project manager
            </p>
          </div>
        </div>
        <div className="select1">
        <RiArrowDropDownLine/>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
