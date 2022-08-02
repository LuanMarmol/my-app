import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import React from 'react';
import Login from './Login';
import LoginPhone from './LoginPhone';
const { TabPane } = Tabs;

const App = () => (
  <Tabs defaultActiveKey="2">
    <TabPane
      tab={
        <span>
          <AppleOutlined />
          <Login/>
        </span>
      }
      key="1"
    >
    </TabPane>
    <TabPane
      tab={
        <span>
          <AndroidOutlined />
          <LoginPhone/>
        </span>
      }
      key="2"
    >
    </TabPane>
  </Tabs>
);

export default App;