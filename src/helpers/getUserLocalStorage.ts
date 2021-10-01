import { User } from "../types/types";

export const getUserLocalStorage = (): User => {

    return {
        agent: localStorage.getItem('agent') || '',
        desk: localStorage.getItem('desk') || ''
    }

};