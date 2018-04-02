import React from 'react';
import PropTypes from 'prop-types';
import { _ } from '../../core/i18n';

const ComponentTypeIcons = props => {
  let icon = '';
  let type = '';
  let indicator = '';
  const context = props.compDetails ? 'pf-icon-small' : 'list-pf-icon list-pf-icon-small';
  switch (props.componentType) {
    case 'Module':
      type = `${_('Type')}&nbsp;<strong>${_('Module')}</strong>`;
      icon = 'pficon pficon-bundle';
      break;
    case 'RPM':
      type = `${_('Type')}&nbsp;<strong>${_('RPM')}</strong>`;
      icon = 'pficon pficon-bundle';
      break;
    default:
      type = `${_('Type')}&nbsp;<strong>${_('RPM')}</strong>`;
      icon = 'pficon pficon-bundle';
  }
  if (props.componentInBlueprint === true) {
    indicator = 'list-pf-icon-bordered';
    // TODO - Identify icon as belonging to dependency in the blueprint
    // if (props.isDependency) {
    //   indicator += ' list-pf-icon-bordered-dotted';
    // }
  }

  return (
    <span>
      <span
        className={`${icon} ${indicator} ${context}`}
        data-html="true"
        data-toggle="tooltip"
        title=""
        data-original-title={type}
      />
    </span>
  );
};

ComponentTypeIcons.propTypes = {
  componentType: PropTypes.string,
  compDetails: PropTypes.bool,
  componentInBlueprint: PropTypes.bool,
};

export default ComponentTypeIcons;
