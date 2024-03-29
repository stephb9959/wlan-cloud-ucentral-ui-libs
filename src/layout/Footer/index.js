import React from 'react';
import { CFooter } from '@coreui/react';
import PropTypes from 'prop-types';

const TheFooter = ({ t, version }) => (
  <CFooter fixed={false}>
    <div>
      {t('footer.version')} {version}
    </div>
    <div className="mfs-auto">
      <span className="mr-1">{t('footer.powered_by')}</span>
      <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
        {t('footer.coreui_for_react')}
      </a>
    </div>
  </CFooter>
);

TheFooter.propTypes = {
  t: PropTypes.func.isRequired,
  version: PropTypes.string.isRequired,
};
export default React.memo(TheFooter);
