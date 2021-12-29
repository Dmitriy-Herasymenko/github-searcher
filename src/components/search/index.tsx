import {FC, useCallback} from "react";
import {debounce} from "../../utils";
import {CardList} from "../cardList";
import {IUser} from "../../types";
import "./style.scss";

interface IProps {
    fetchUsers: (url: string) => void;
    fetchDataUser: (url: string) => void;
    fetchRepos: (url?: string) => void;
    users: IUser[],
}

export const Search: FC<IProps> = ({fetchUsers, users, fetchDataUser, fetchRepos}) => {
    const debounceOnChange = useCallback(debounce(fetchUsers, 1000), []);

    return (
        <>
            <input onChange={e => debounceOnChange(e.target.value)} placeholder='Search...' className='search'/>
            <CardList users={users} fetchDataUser={fetchDataUser} fetchRepos={fetchRepos}   />
        </>

    )
}