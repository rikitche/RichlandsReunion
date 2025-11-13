export type Announcement = {
    id: string;
    content: string;
    date: Date;
    postedBy: string;
}

export type User = {
    email: string;
    firstName: string;
    lastName: string;
    password?: string;
    attending: string
    guests: number
    fullUser: boolean
}