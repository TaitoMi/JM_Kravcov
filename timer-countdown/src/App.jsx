import React from 'react';
import 'normalize.css';
import { Tabs, Icon } from 'antd';
import 'antd/dist/antd.css';
import Timer from './components/Timer';
import CountDown from './components/CountDown';
import './styles/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTimer: true,
    };
  }

  toCountdown = () => {
    let x = 12312;
    const { isTimer } = this.state;
    this.setState({ isTimer: !isTimer });
  };

  countDown = () => {
    return <h1>Countdown</h1>;
  };

  render() {
    const { isTimer } = this.state;
    const tabsContent = isTimer ? <Timer /> : <CountDown />;
    return (
      <div className="app">
        <Tabs defaultActiveKey="1" onChange={this.toCountdown}>
          <Tabs.TabPane
            tab={
              <span>
                <Icon type="clock-circle" />
                Timer
              </span>
            }
            key="1"
          >
            {tabsContent}
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <span>
                <Icon type="dashboard" />
                CountDown
              </span>
            }
            key="2"
          >
            {tabsContent}
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
}

export default App;
