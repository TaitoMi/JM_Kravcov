import React from 'react';
import { Slider } from 'antd';

class CountDownInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: true,
    };
  }

  render() {
    const { secsValue, minsValue, inpHandler } = this.props;
    return (
      <div className="countdown__changers">
        <h1>Введите время:</h1>
        <div className="countdown__inputs">
          <input
            className="countdown__time"
            type="number"
            min="0"
            max="60"
            value={minsValue}
            onChange={inpHandler('min')}
          />
          :
          <input
            className="countdown__time"
            type="number"
            min="0"
            max="60"
            value={secsValue}
            onChange={inpHandler('sec')}
          />
        </div>
        <Slider className="countdown__slider" step={15} min={0} max={60} />
      </div>
    );
  }
}

export default CountDownInput;
