import React, {useState} from "react";
import {Routes, Route,} from "react-router-dom";
import {UserCard, Search} from "../index";
import {IUser, IUserCard, IRepo} from "../../types/";


export const GithubSearcher = () => {
    const [user, setUser] = useState({} as IUserCard);
    const [users, setUsers] = useState<IUser[]>([]);
    const [repos, setRepos] = useState<IRepo[]>([]);

    return (
        <Routes>
            <Route path='/' element={
                <Search
                    users={users}
                    setUsers={setUsers}
                    setUser={setUser}
                    setRepos={setRepos}
                />}
            />
            <Route path='/userCard' element={
                <UserCard
                    user={user}
                    repos={repos}
                    setRepos={setRepos}
                />}
            />
        </Routes>
    )
};