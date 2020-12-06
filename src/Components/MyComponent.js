import React from 'react';

class MyComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    let val = this.state.count + 1;
    this.setState({ count: val });
  }

  switchFontColorBack = () => {
    document.getElementById("counter").style.color = "white";
  }

  componentDidUpdate() {
    document.getElementById("counter").style.color = "#61dafb";
    setTimeout( this.switchFontColorBack, 100);
  }

  render() {

    if(this.state.count > 10) {
      this.setState({ count: 0 });
    }

    return (
        <>
            <h1 id="counter">{this.state.count}</h1>
            <button type="button" onClick={this.incrementCount}>
              <span className="my-label">
                Click Me
              </span>
            </button>
        </>
    );
  }
}
export default MyComponent;