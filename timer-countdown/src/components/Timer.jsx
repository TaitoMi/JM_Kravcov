import React from 'react';
import { Icon } from 'antd';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playBtnIsActive: false,
      minutes: '00',
      seconds: '00',
      miliseconds: '000',
    };
  }

  componentWillUnmount() {
    this.clean();
  }

  startTimer = e => {
    e.preventDefault();
    requestAnimationFrame(() => {
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
        if (Number(miliseconds) >= 983) {
          newMs = '000';
          newSec = Number(newSec) < 9 ? `0${Number(newSec) + 1}` : `${Number(newSec) + 1}`;
          if (newSec >= 60) {
            newMins = Number(newMins) < 9 ? `0${Number(newMins) + 1}` : `${Number(newMins) + 1}`;
            newSec = '00';
          }
        } else {
          newMs = this.msConvert(Number(newMs));
        }

        this.setState(() => {
          return {
            miliseconds: newMs.slice(0, 3),
            seconds: newSec,
            minutes: newMins,
          };
        });
      }, 17);
    });
  };

  msConvert = ms => {
    const msResult = ms + 17;
    if (msResult > 9 && msResult < 100) {
      return `0${msResult}`;
    }
    return `${msResult}`;
  };

  clean = () => {
    this.setState({
      playBtnIsActive: false,
      minutes: '00',
      seconds: '00',
      miliseconds: '000',
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
