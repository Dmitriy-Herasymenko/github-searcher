import {FC, useCallback} from "react";
import {CardList} from "../cardList";
import {debounce, fetchUsers} from "../../utils";
import {IRepo, IUser, IUserCard} from "../../types";
import "./style.scss";

interface IProps {
    users: IUser[];
    setUsers: (data: IUser[]) => void;
    setUser: (data: IUserCard) => void;
    setRepos: (data: IRepo[]) => void;
}

export const Search: FC<IProps> = ({users, setUsers, setUser, setRepos}) => {
    const debounceOnChange = useCallback(
        debounce( (e:string) => fetchUsers(e, (data:IUser[]) => setUsers(data)), 1000),
        []);

    return (
        <>
            <input onChange={e => debounceOnChange(e.target.value)} placeholder='Search...' className='search'/>
            <CardList users={users} setUser={setUser} setRepos={setRepos}/>
        </>

    )
}