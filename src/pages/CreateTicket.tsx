import React, { FC } from 'react'
import { Button, Col, Row, Typography } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import useHideMenu from '../hooks/useHideMenu';
import { useLocation } from 'react-router';

const { Title, Text } = Typography;

const CreateTicket: FC = () => {    

    const { pathname } = useLocation();
    const path = pathname.replace('/', '');
    
    useHideMenu(true, path);

    const newTicket = () => {

    }

    return (
        <>
            <Row>
                <Col span={ 24 } style={{ textAlign: "center", alignItems: "center", justifyContent: "center" }}>
                    <Title level={ 3 }>Presione el botón para un nuevo ticket</Title>
                    <Button
                        type="primary"
                        shape="round"
                        icon={ <DownloadOutlined /> }
                        size="large"
                        onClick={ newTicket }
                    >
                        Nuevo ticket
                    </Button>
                </Col>
            </Row>

            <Row style={{ marginTop: 100 }}>
                <Col span={ 24 } style={{ textAlign: "center", alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ display: 'block'}}> Su número</Text>
                    <Text type="success" style={{ fontSize: 55}}>11</Text>
                </Col>
            </Row>
        
        </>
    )
};

export default CreateTicket;