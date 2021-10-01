import { useContext, useEffect } from 'react'
import { UiContext } from '../context/UiContext';

const useHideMenu = (hide: boolean, menuOption: string) => {

    const { showMenu, hideMenu, setOptionMenu } = useContext(UiContext);

    useEffect(() => {

        hide ? hideMenu(): showMenu();
    
    }, [hide, showMenu, hideMenu]);

    useEffect(() => {

        setOptionMenu(menuOption);
    
    }, [menuOption, setOptionMenu]);
  
}

export default useHideMenu;