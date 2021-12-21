import {useState} from "react";
import {Search} from "../search";
import axios from "axios";
import './style.scss';


interface IUser {
    id: number,
    avatar_url: string,
    login: string,
    url: string
}

interface IUsersCard {
    items: IUser[]
}

export const GithubSearcher = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    const fetchUsers = async (value: string) => {
        try {
            const {data} = await axios.get<IUsersCard>(`https://api.github.com/search/users?q=${value}`)
            setUsers(data.items)
        } catch (e: any) {
            console.log(e.message)
        }
    };

    return (
        <>
            <Search fetchUsers={fetchUsers}/>
        </>

    )
};