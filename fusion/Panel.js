import styled from 'react-emotion';
import React from 'react';
import { withTheme } from 'theming';
import PropTypes from 'prop-types';
import theme from '../theme';

const Panel = ({ className, children }) => (
  <div theme={theme} className={className}>
    {children}
  </div>
);

const styledPanel = styled(Panel)`
  border: ${props => props.theme.panelBorder};
  margin: 10px;
  width: ${props => props.theme.panelWidth};
  background: #${props => props.theme.panelBackground};
  border-radius: ${props => props.theme.panelRadius};
  box-shadow: ${props => props.theme.panelShadow};
  padding: ${props => props.theme.panelPadding};
`;

Panel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};
Panel.defaultProps = {
  children: null,
  className: 'default',
};
export default withTheme(styledPanel);
