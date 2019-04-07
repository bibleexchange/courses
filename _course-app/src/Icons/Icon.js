import React from 'react';
import Logo from './Logo';

const Icon = props => {
  switch(props.name) {
    case "logo":
      return <Logo {...props} />;
    default:
      return <div />;
  }
}
export default Icon;