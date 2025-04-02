export interface User {
    id: string;
    userName: string;
    email: string;
    imageUrl: string | null;
    bio: string | null;
    dateJoined: string;
    lastLogin: string | null;
}

export type Users = User[];
