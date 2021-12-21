import {FC} from "react";
import {IUser} from "../../Types/User"
import './style.scss';

interface IProps {
    users: IUser[];
    fetchDataUser: (url: string) => void;
}

export const CardList: FC<IProps> = ({users, fetchDataUser}) => {
    if (users.length === 0 || users.length === undefined || users.length === null) return <span>No users</span>
    return (
        <>
            {users.map((user) => {
                return (
                    <div key={user.id} className='card'>
                        <img src={user.avatar_url} alt="" className='card__img'/>
                        <span>{user.login}</span>
                        <span className='card__link' onClick={() => fetchDataUser(user.url)}>repositories</span>
                    </div>
                )
            })}
        </>
    )
}