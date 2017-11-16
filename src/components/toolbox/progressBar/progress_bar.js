import React from 'react';
import { themr } from 'react-css-themr';
import ToolBoxProgressBar from 'react-toolbox/lib/progress_bar';
import progressBarTheme from './progressBar.css';

class ProgressBar extends React.Component {
  render() {
    return <ToolBoxProgressBar {...this.props} theme={this.props.theme} />;
  }
}

export default themr('progressBar', progressBarTheme)(ProgressBar);
