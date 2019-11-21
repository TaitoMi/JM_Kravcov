import React from 'react';
import { Icon } from 'antd';
import CountDownInput from './CountDownInput.jsx';

class CountDown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			minsValue: '',
			secsValue: '',
			playBtnIsActive: false,
		};
	}

	inputHandler = type => e => {
		const key = type === 'min' ? 'minsValue' : 'secsValue';
		const newValue = Number(e.target.value) > 60 ? '60' : e.target.value;
		this.setState({ [key]: newValue });
	};

	startCountdown = () => {
		const { playBtnIsActive } = this.state;
		this.setState({ playBtnIsActive: !playBtnIsActive });
	};

	render() {
		const { minsValue, playBtnIsActive, secsValue } = this.state;
		const play = playBtnIsActive ? 'pause-circle' : 'play-circle';
		return (
			<div className="countdown">
				<h1>CountDown</h1>
				<CountDownInput
					minsValue={minsValue}
					secsValue={secsValue}
					inpHandler={this.inputHandler}
				/>
				<div className="countdown__btns">
					<button type="button" className="timer__btn" onClick={this.startCountdown}>
						<Icon type={play} theme="twoTone" />
					</button>
					<button type="button" className="timer__btn">
						<Icon type="close-square" theme="twoTone" />
					</button>
				</div>
			</div>
		);
	}
}

export default CountDown;
