import React, { FC, useContext, useState } from 'react';
import { Button, Col, Divider, Row, Typography } from 'antd';
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import useHideMenu from '../hooks/useHideMenu';
import { getUserLocalStorage } from '../helpers/getUserLocalStorage';
import { Ticket, User } from '../types/types';
import { Redirect, useHistory } from 'react-router';
import { SocketContext } from '../context/SocketContext';

const { Title, Text } = Typography;

const Desktop: FC = () => {

    useHideMenu(false, 'enter');

    const { socket } = useContext(SocketContext);

    const history = useHistory();

    const userLocalStorage: User = getUserLocalStorage() as User;

    const [user] = useState<User>(userLocalStorage);

    const [ticket, setTicket] = useState<Ticket>(null);    

    if ( !user.agent || !user.desk ) {
        return <Redirect to="/enter" />
    }   

    const exit = () => {
        localStorage.clear();
        history.replace('enter');
    };

    const nextTicket = () => {
        socket?.emit('attend-ticket', user, (ticket: Ticket) => {
            console.log(ticket)
            setTicket(ticket);
        });
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

            {
                ticket ? (
                    <Row>
                        <Col>
                            <Text>Está atendiendo el ticket número: </Text>
                            <Text style={{fontSize: 30}} type="danger">{ ticket?.number }</Text>
                        </Col>
                    </Row>

                ) : (
                    <Row>
                        <Col>
                            <Text>No quedan tickets para atender</Text>
                        </Col>
                    </Row>
                )
            }

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