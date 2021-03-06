import React, { createContext, useState } from 'react';

type Props = {
    children: React.ReactNode;
};

type GlobalContentUI = {
    hiddenMenu: boolean;
    showMenu: Function;
    hideMenu: Function;
    selectedOption: string;
    setOptionMenu: Function;
};

export const UiContext = createContext<GlobalContentUI>({
    hiddenMenu: false,
    showMenu: () => {},
    hideMenu: () => {},
    selectedOption: '',
    setOptionMenu: () => {},
});

export const UiProvider = ({ children }: Props) => {

    const [hiddenMenu, setHiddenMenu] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>('');

    const showMenu = () => {
        setHiddenMenu(false);
    };

    const hideMenu = () => {
        setHiddenMenu(true);
    };

    const setOptionMenu = (option: string) => {
        setSelectedOption(option)
    }

    return (
        <UiContext.Provider value={ { hiddenMenu, showMenu, hideMenu, selectedOption, setOptionMenu } }>
            { children }
        </UiContext.Provider>
    )
};