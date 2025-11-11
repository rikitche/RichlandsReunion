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
    fullUser: boolean
}