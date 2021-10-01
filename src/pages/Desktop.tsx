import React, { FC, useState } from 'react';
import { Button, Col, Divider, Row, Typography } from 'antd';
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import useHideMenu from '../hooks/useHideMenu';
import { getUserLocalStorage } from '../helpers/getUserLocalStorage';
import { User } from '../types/types';
import { Redirect, useHistory } from 'react-router';

const { Title, Text } = Typography;

const Desktop: FC = () => {

    useHideMenu(false, 'enter');

    const history = useHistory();

    const userLocalStorage: User = getUserLocalStorage() as User;

    const [user] = useState<User>(userLocalStorage);

    if ( !user.agent || !user.desk ) {
        return <Redirect to="/enter" />
    }   

    const exit = () => {
        localStorage.clear();
        history.replace('enter');
    };

    const nextTicket = () => {

    };

    return (
        <>
            <Row>
                <Col span={ 20 }>
                    <Title level={ 2 }>{ user.agent }</Title>
                    <Text>Usted está trabajando en el escritorio: </Text>
                    <Text type="success">{ user.desk }</Text>
                </Col>

                <Col span={ 4 }>
                    <Button 
                        style={{float: 'right'}}
                        shape="round"
                        type="ghost"
                        onClick={ exit }
                        icon={<CloseCircleOutlined />}
                    >
                        
                        Salir
                    </Button>
                </Col>
            </Row>

            <Divider />

            <Row>
                <Col>
                    <Text>Está atendiendo el ticket número: </Text>
                    <Text style={{fontSize: 30}} type="danger">4</Text>
                </Col>
            </Row>

            <Row>
                <Col offset={ 18 } span={ 6 } >
                    <Button
                        style={{float: 'right'}}
                        onClick={ nextTicket }
                        shape="round"
                        type="primary"
                        icon={ <RightOutlined /> }
                    >
                        
                        Siguiente

                    </Button>
                </Col>
            </Row>

        </>
    )
}

export default Desktop;