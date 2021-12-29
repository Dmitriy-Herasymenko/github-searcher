import React, {useState} from "react";
import {CardList, UserCard, Search} from "../index";
import {IUser, IUserList, IUserCard, IRepo} from "../../types/";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import axios, {AxiosError} from "axios";
import './style.scss';

export const GithubSearcher = () => {
    const [user, setUser] = useState<IUserCard>({} as IUserCard);
    const [users, setUsers] = useState<IUser[]>([]);
    const [repos, setRepos] = useState<IRepo[]>([]);

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
        <BrowserRouter>
            <React.Fragment>
                <Routes>
                    <Route path='/search' element={<Search users={users} fetchUsers={fetchUsers} fetchDataUser={fetchDataUser}/>} />
                    <Route path='/userCard' element={<UserCard user={user} fetchRepos={fetchRepos} repos={repos} />} />
                </Routes>
            </React.Fragment>
        </BrowserRouter>
    )
};