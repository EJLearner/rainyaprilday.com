import React from 'react';

class SquareLoading extends React.Component {
  state = {dotCount: 3, showTimeout: false};

  componentDidMount() {
    this.dotChangeInterval = setInterval(() => {
      const {dotCount} = this.state;
      const newDotCOunt = dotCount < 3 ? dotCount + 1 : 0;

      this.setState({dotCount: newDotCOunt});
    }, 500);

    this.timeOutMessageSet = setTimeout(() => {
      clearInterval(this.dotChangeInterval);
      this.setState({showTimeout: true});
    }, 10000);
  }

  render(): object {
    const {dotCount, showTimeout} = this.state;
    const style = {'text-align': 'center'};

    return (
      <div style={style}>
        {showTimeout
          ? 'An error has occured please return to the site and try again'
          : `Loading${'...'.substr(0, dotCount)}`}
      </div>
    );
  }
}

export default SquareLoading;
