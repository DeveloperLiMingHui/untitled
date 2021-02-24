import React, {Component} from 'react';
import {Button, DatePicker, Space} from 'antd';
import 'antd/dist/antd.css'
import {WechatOutlined} from '@ant-design/icons'

const {RangePicker} = DatePicker

class App extends Component {
    render() {
        return (
            <div>
                App.....
                <br/>
                <Button type="primary">Primary Button</Button>
                <Button>Primary Button</Button>
                <Button type="link">Primary Button</Button>
                <WechatOutlined/>
                <DatePicker/>
                <RangePicker/>
            </div>
        );
    }
}

export default App;