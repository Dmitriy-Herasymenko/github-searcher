import {FC} from "react";
import {Link} from "react-router-dom";
import {IUser} from "../../types";
import "./style.scss";

interface IProps {
    users: IUser[];
    fetchDataUser: (url: string) => void;
}

export const CardList: FC<IProps> = ({users, fetchDataUser}) => {
    const areUsersAvailable = users.length === 0 || users.length === undefined || users.length === null;
    if (areUsersAvailable) return <span>No users</span>
    return (
        <>
            {users.map((user) => {
                return (
                    <div key={user.id} className="card">
                        <img src={user.avatar_url} alt="" className="card__img"/>
                        <span>{user.login}</span>
                        <Link className="card__link"  onClick={() => fetchDataUser(user.url)} to='/userCard'>repositories</Link>
                    </div>
                )
            })}
        </>
    )
}