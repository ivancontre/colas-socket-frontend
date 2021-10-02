
export const getLastTickets = async () => {
    
    const resp = await fetch(process.env.REACT_APP_HOST_BACKEND + '/last');
    const data = await resp.json();

    return data.tickets;
}