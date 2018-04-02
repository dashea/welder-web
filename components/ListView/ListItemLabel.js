import React from 'react';
import PropTypes from 'prop-types';
import { _ } from '../../core/i18n';

const ListItemLabel = (props) => {
  let dependency = null;
  if (props.isdependency === true) {
    dependency = (<div
      className="list-view-pf-additional-info-item list-view-pf-additional-info-item-stacked"
    >
      <span className="label label-default">{_("Dependency")}</span>
    </div>);
  }

  return (
    <span>
      {dependency}
    </span>
  );
};

ListItemLabel.propTypes = {
  isdependency: PropTypes.bool,
};

export default ListItemLabel;
