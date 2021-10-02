export type User = {
    agent: string;
    desk: string;
};

export type Ticket = {
    id: string;
    number: number;
    desk: string | null;
    agent: string | null;
} | null;