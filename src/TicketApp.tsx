import React, { FC } from 'react'
import { SocketProvider } from './context/SocketContext';
import { UiProvider } from './context/UiContext';
import RouterApp from './routers/RouterApp';

const TicketApp: FC = () => {
    return (
        <UiProvider>
            <SocketProvider>
                <RouterApp />
            </SocketProvider>
        </UiProvider>
    )
};

export default TicketApp;