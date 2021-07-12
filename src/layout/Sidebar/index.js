import React from 'react';
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

const Sidebar = ({ t, showSidebar, setShowSidebar, logo }) => {
  const navigation = [
    {
      _tag: 'CSidebarNavItem',
      name: t('common.device_list'),
      to: '/devices',
      icon: 'cilNotes',
    },
  ];

  return (
    <CSidebar show={showSidebar} onShowChange={(val) => setShowSidebar(val)}>
      <CSidebarBrand className="d-md-down-none" to="/devices">
        <img
          className={[styles.sidebarImgFull, 'c-sidebar-brand-full'].join(' ')}
          src={logo}
          alt="OpenWifi"
        />
        <img
          className={[styles.sidebarImgMinimized, 'c-sidebar-brand-minimized'].join(' ')}
          src={logo}
          alt="OpenWifi"
        />
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle,
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  );
};

Sidebar.propTypes = {
  showSidebar: PropTypes.string.isRequired,
  setShowSidebar: PropTypes.func.isRequired,
  logo: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

export default Sidebar;
