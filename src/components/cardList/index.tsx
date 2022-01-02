import {FC} from "react";
import {Link} from "react-router-dom";
import {fetchDataUser, fetchRepos} from "../../utils";
import {IRepo, IUser, IUserCard} from "../../types";
import "./style.scss";


interface IProps {
    users: IUser[];
    setUser: (data:IUserCard) => void;
    setRepos: (data: IRepo[]) => void;
}

export const CardList: FC<IProps> = ({users, setUser, setRepos}) => {
    const areUsersAvailable = users.length === 0 || users.length === undefined || users.length === null;
    if (areUsersAvailable) return <span>No users</span>

    return (
        <>
            {users.map((user) => {
                return (
                    <div key={user.id} className="card">
                        <img src={user.avatar_url} alt="" className="card__img"/>
                        <span>{user.login}</span>
                        <Link className="card__link"  onClick={() => {
                            fetchDataUser(user.url, data => setUser(data));
                            fetchRepos("allRepos",data=> setRepos(data));
                        }} to='/userCard'>repositories</Link>
                    </div>
                )
            })}
        </>
    )
}