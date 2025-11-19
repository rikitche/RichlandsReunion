export type Announcement = {
  id: string;
  content: string;
  createdAt: Date;
  postedBy: string;
};

export type User = {
  email: string;
  firstName: string;
  lastName: string;
  password?: string;
  attending: string;
  guests: number;
  fullUser: boolean;
};
