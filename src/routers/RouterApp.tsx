import React, { FC, useContext } from 'react'
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import Enter from '../pages/Enter';
import Queue from '../pages/Queue';
import CreateTicket from '../pages/CreateTicket';
import Desktop from '../pages/Desktop';
import { UiContext } from '../context/UiContext';

const { Sider, Content } = Layout;

const RouterApp: FC = () => {

    const { hiddenMenu, selectedOption } = useContext(UiContext);

    console.log(selectedOption);
    
    return (
        <Router>
            <Layout style={{ height: '100vh'}}>
                <Sider collapsedWidth="0" breakpoint="md" hidden={ hiddenMenu }>
                <div className="logo" />
                    <Menu theme="dark" mode="inline" selectedKeys={[ selectedOption ]}>
                        <Menu.Item key="enter" icon={<UserOutlined />}>
                            <Link to="/enter">
                                Ingresar
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="queue" icon={<VideoCameraOutlined />}>
                            <Link to="/queue">
                                Cola de tickets
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="create-ticket" icon={<UploadOutlined />}>
                            <Link to="/create-ticket">
                                Crear ticket
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    
                    <Content
                        className="site-layout-background"
                        style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        }}
                    >
                        <Switch>
                            <Route path="/enter" component={ Enter }/>
                            <Route path="/queue" component={ Queue }/>
                            <Route path="/create-ticket" component={ CreateTicket }/>
                            <Route path="/desktop" component={ Desktop }/>

                            <Redirect to="/enter" />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </Router>
        
    )
};

export default RouterApp;