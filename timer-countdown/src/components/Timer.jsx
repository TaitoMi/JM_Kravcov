import React from 'react';
import { Icon } from 'antd';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playBtnIsActive: false,
      minutes: 0,
      seconds: 0,
      miliseconds: 0,
    };
  }

  componentWillUnmount() {
    this.clean();
  }

  startTimer = e => {
    e.preventDefault();
    const { playBtnIsActive } = this.state;
    if (playBtnIsActive) {
      this.setState({ playBtnIsActive: !playBtnIsActive });
      clearInterval(this.timerId);
      return;
    }
    this.setState({ playBtnIsActive: !playBtnIsActive });

    this.timerId = setInterval(() => {
      const { minutes, seconds, miliseconds } = this.state;
      let newSec = seconds;
      let newMs = miliseconds;
      let newMins = minutes;
      if (miliseconds >= 1000) {
        newMs = 0;
        newSec += 1;
        if (newSec >= 60) {
          newMins += 1;
          newSec = 0;
        }
      } else {
        newMs += 17;
      }

      this.setState(state => {
        return {
          miliseconds: newMs,
          seconds: newSec,
          minutes: newMins,
        };
      });
    }, 17);
  };

  clean = () => {
    this.setState({
      playBtnIsActive: false,
      minutes: 0,
      seconds: 0,
      miliseconds: 0,
    });
    clearInterval(this.timerId);
  };

  stopTimer = e => {
    e.preventDefault();
    this.clean();
  };

  render() {
    const { minutes, seconds, miliseconds, playBtnIsActive } = this.state;

    const play = playBtnIsActive ? 'pause-circle' : 'play-circle';
    return (
      <div className="app__timer timer">
        <span className="timer__count">
          {minutes}:{seconds}:{miliseconds}
        </span>
        <div className="timer__btns">
          <button type="button" className="timer__btn" onClick={this.startTimer}>
            <Icon type={play} theme="twoTone" />
          </button>
          <button type="button" className="timer__btn" onClick={this.stopTimer}>
            <Icon type="close-square" theme="twoTone" />
          </button>
        </div>
      </div>
    );
  }
}
export default Timer;
