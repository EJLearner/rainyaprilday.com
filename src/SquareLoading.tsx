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
    const style = {'font-size': '120%', 'margin-top': '75px', 'text-align': 'center'};

    let child = `Loading${'...'.substr(0, dotCount)}`;

    if (showTimeout) {
      child = (
        <>
          An error has occured please return to the <a href="donate">donate page</a> and try again.
        </>
      );
    }

    return <div style={style}>{child}</div>;
  }
}

export default SquareLoading;
