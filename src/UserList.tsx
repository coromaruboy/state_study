import { useState } from 'react';

type Props = {
    users: { id: string, name: string, age: number }[];
};

const UserList = (peops: Props) => {
    return (
        <div>
            <ul className="user-list-body">
                {peops.users.map((user) => (
                    <li key={user.id}>
                        {user.name} {user.age}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList;