import React, { useState } from 'react';
import classNames from 'classnames';
import types from 'prop-types';

// Styles

import './styles.scss';

// ----------------

export const Tabs = ({
  contentBackground,
  tabLinksWidth,
  defaultTab,
  tabContent,
  tabLinks,
  callback,
}) => {
  // State

  const [activeTab, toggleTab] = useState(defaultTab || tabLinks[0].name);

  // Preparation

  const tab = tabContent.find(tab => tab.name === activeTab);

  // Modify styles

  const modifyLink = name =>
    classNames({
      [` tabs__tab-link--width-${tabLinksWidth}`]: tabLinksWidth,
      ' tabs__tab-link--active': name === activeTab,
    });

  // Render

  return (
    <div className="tabs">
      <ul className="tabs__link-row">
        {tabLinks.map(({ name, label }) => (
          <li
            className={`text-small tabs__tab-link${modifyLink(name)}`}
            onClick={() => {
              toggleTab(name);
            }}
            key={name}
          >
            {label}
          </li>
        ))}
      </ul>
      <div className="tabs__content" style={contentBackground}>
        <tab.content />
      </div>
    </div>
  );
};

// ----------------

// Type of props

Tabs.propTypes = {
  contentBackground: types.object,
  tabLinksWidth: types.oneOf(['flex', 'initial']),
  tabContent: types.array.isRequired,
  defaultTab: types.string,
  tabLinks: types.array.isRequired,
};

// Default props

Tabs.defaultProps = {
  tabLinksWidth: 'initial',
};
