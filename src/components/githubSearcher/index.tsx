import {useState} from "react";
import {Search} from "../search";
import {IUser, IUserCard} from "../../Types/User";
import axios from "axios";
import './style.scss';


export const GithubSearcher = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    const fetchUsers = async (value: string) => {
        try {
            const {data} = await axios.get<IUserCard>(`https://api.github.com/search/users?q=${value}`)
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