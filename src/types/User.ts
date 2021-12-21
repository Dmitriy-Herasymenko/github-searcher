
export interface IUserCardAdvance {
    id?: number;
    name?: string;
    email?: string;
    location?: string;
    updated_at?: string;
    followers?: string;
    following?: string;
    avatar_url?: string;
    bio?: string;
    login?: string;
}

export interface IUser {
    id: number;
    avatar_url: string;
    login: string;
    url: string;
}

 export interface IUserCard {
    items: IUser[]
}