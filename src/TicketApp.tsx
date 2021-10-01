import React, { FC } from 'react'
import { UiProvider } from './context/UiContext';
import RouterApp from './routers/RouterApp';

const TicketApp: FC = () => {
    return (
        <UiProvider>
            <RouterApp />
        </UiProvider>
    )
};

export default TicketApp;