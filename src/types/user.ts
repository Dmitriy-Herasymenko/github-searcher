
export interface IUser {
    id: number;
    avatar_url: string;
    login: string;
    url: string;
}

 export interface IUserList {
    items: IUser[]
}