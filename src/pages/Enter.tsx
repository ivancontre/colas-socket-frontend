import React, { FC, useState } from 'react';
import { Form, Input, Button, InputNumber, Typography, Divider } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { Redirect, useHistory, useLocation } from 'react-router';
import useHideMenu from '../hooks/useHideMenu';
import { getUserLocalStorage } from '../helpers/getUserLocalStorage';
import { User } from '../types/types';

const { Title, Text } = Typography;

const Enter: FC = () => {

    const history = useHistory();

    const { pathname } = useLocation();
    const path = pathname.replace('/', '');

    useHideMenu(false, path);    

    const userLocalStorage: User = getUserLocalStorage();

    const [user] = useState<User>(userLocalStorage);

    if ( user.agent && user.desk) {
        return <Redirect to="/desktop" />
    }
    
    const onFinish = (values: any) => {
        localStorage.setItem('agent', values.agent);
        localStorage.setItem('desk', values.desk);
        history.push('/desktop');
    };
    
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Title level={ 2 }>Ingresar</Title>

            <Text> Ingrese su nombre y número de escritorio</Text>

            <Divider />
            <Form
                name="basic"
                labelCol={{ span: 4  }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
                <Form.Item
                    label="Nombre del agente"
                    name="agent"
                    rules={[{ required: true, message: 'Por favor ingrese su nombre' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Escritorio"
                    name="desk"
                    rules={[{ required: true, message: 'Por favor ingrese su escritorio' }]}
                >
                    <InputNumber min={ 1 } max={ 99 } />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                    <Button 
                        type="primary" 
                        htmlType="submit"
                        shape="round"
                    >
                        <SaveOutlined />
                        Ingresar
                    </Button>
                </Form.Item>
            </Form>
        </>
        
    )
};

export default Enter;