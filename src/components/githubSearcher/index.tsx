import {useState} from "react";
import {CardList, UserCard, Search} from "../index";
import {IUser, IUserList, IUserCard, IRepo} from "../../types/";
import axios, {AxiosError} from "axios";
import './style.scss';

export const GithubSearcher = () => {
    const [user, setUser] = useState({} as IUserCard);
    const [users, setUsers] = useState<IUser[]>([]);
    const [repos, setRepos] = useState<IRepo[]>([]);
    const [card, isCardSet] = useState(false);

    const fetchUsers = async (value: string) => {
        try {
            const {data} = await axios.get<IUserList>(`https://api.github.com/search/users?q=${value}`)
            setUsers(data.items)
        } catch (e) {
            const err = e as AxiosError
            console.log(err.response?.data)
        }
    };
    const fetchDataUser = async (url: string) => {

        try {
            const {data} = await axios.get<IUserCard>(url)
            setUser(data)
            isCardSet(prevCard => !prevCard)
        } catch (e) {
            const err = e as AxiosError
            console.log(err.response?.data)
        }
    };
    const fetchRepos = async (value: string) => {
        try {
            const {data} = await axios.get<IRepo[]>(`https://api.github.com/users/${user.login}/repos`)
            const filteredData = data.filter(rep => rep.name.toLowerCase().includes(value))
            setRepos(filteredData)
        } catch (e) {
            const err = e as AxiosError
            console.log(err.response?.data)
        }
    };

    return (
        card ?
            <>
                <span onClick={() => isCardSet(prevCard => !prevCard)} className='iconArrow'>&#8592;</span>
                <UserCard user={user} fetchRepos={fetchRepos} repos={repos}/>
            </> :
            <>
                <Search fetchUsers={fetchUsers}/>
                <CardList users={users} fetchDataUser={fetchDataUser}/>
            </>

    )
};