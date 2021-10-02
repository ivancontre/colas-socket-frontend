import React, { FC, useContext, useEffect, useState } from 'react';
import { Col, Row, Typography, List, Card, Tag, Divider } from 'antd';
import useHideMenu from '../hooks/useHideMenu';
import { useLocation } from 'react-router';
import { SocketContext } from '../context/SocketContext';
import { Ticket } from '../types/types';
import { getLastTickets } from '../helpers/getLastTickets';

const { Title, Text } = Typography;

const Queue: FC = () => {
    
    const { pathname } = useLocation();
    const path = pathname.replace('/', '');
    
    useHideMenu(true, path);
    
    const { socket } = useContext(SocketContext);

    const [tickets, setTickets] = useState<Array<Ticket>>([]);    

    useEffect(() => {
        
        getLastTickets().then(tickets => {
            setTickets(tickets);
        });

    }, []);

    useEffect(() => {
		socket?.on('last-13-numbers', (tickets: Ticket[], callback: any) => {
            setTickets(tickets);
        });

        return () => {
            socket?.off('last-13-numbers');
        }

	}, [socket]);

    return (
        <>
           <Title level={ 1 }>Atendiendo al cliente</Title>
           <Row>
                <Col span={ 12 }>
                    <List 
                        dataSource={ tickets.slice(0, 3) }
                        renderItem={ item => (
                            <List.Item>
                                <Card 
                                    style={{ width:300, marginTop: 16}}
                                    actions={[
                                        <Tag color="volcano">{ item?.agent }</Tag>,
                                        <Tag color="magenta">Escritorio: { item?.desk }</Tag>
                                    ]}
                                >
                                    <Title>No. { item?.number }</Title>
                                </Card>
                                
                            </List.Item>
                        )}
                    
                    />
                </Col>

                <Col span={ 12 }>
                    <Divider>Historial</Divider>
                    <List 
                        dataSource={ tickets.slice(3) }
                        renderItem={ item => (
                            <List.Item>
                                <List.Item.Meta
                                    title={`Ticket No. ${ item?.number }`}
                                    description={
                                        <>
                                            <Text type="secondary">En el escritorio: </Text>
                                            <Tag color="magenta">{ item?.desk }</Tag>
                                            <Text type="secondary">Agente: </Text>
                                            <Tag color="volcano">{ item?.agent }</Tag>
                                        </>
                                    }
                                />
                            </List.Item>
                        )}

                    />
                </Col>
           </Row>
        </>
    )
};

export default Queue;