import React from 'react';

import PropTypes from 'prop-types';

import { Loading } from './styles';

export function Button({ isLoading, children, Icon, ...rest }) {
  return (
    <button type="button" {...rest}>
      <Content Icon={Icon} isLoading={isLoading}>
        {children}
      </Content>
    </button>
  );
}

export function Submit({ isLoading, children, Icon, ...rest }) {
  return (
    <button type="submit" {...rest}>
      <Content Icon={Icon} isLoading={isLoading}>
        {children}
      </Content>
    </button>
  );
}

function Content({ isLoading, children, Icon }) {
  if (Icon) {
    return (
      <>
        {isLoading ? <Loading /> : <Icon />}

        {children}
      </>
    );
  }
  return <>{isLoading ? <Loading /> : children}</>;
}

Content.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.string,
  ]).isRequired,
  Icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};

Content.defaultProps = {
  isLoading: false,
  Icon: null,
};

Button.propTypes = Content.propTypes;
Submit.propTypes = Content.propTypes;
Submit.defaultProps = Button.defaultProps;
