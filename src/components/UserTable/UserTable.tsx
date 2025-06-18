import styles from './UserTable.module.css';
import type { User } from '../../types/user';

interface UserTableProps {
    users: User[];
    onUserClick: (user: User) => void;
    onDelete: (id: number) => void;
}

export function UserTable({ users, onUserClick, onDelete }: UserTableProps) {
    return (
        <div className={styles.tableWrapper}>
            <table className={styles.userTable}>
                <thead>
                    <tr>
                        <th>Name / Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className={styles.row}>
                            <td onClick={() => onUserClick(user)} className={styles.clickable}>
                                <div className={styles.name}>{user.name}</div>
                                <div className={styles.email}>{user.email}</div>
                            </td>
                            <td onClick={() => onUserClick(user)} className={styles.clickable}>
                                {user.address.city}, {user.address.street}
                            </td>
                            <td onClick={() => onUserClick(user)} className={styles.clickable}>{user.phone}</td>
                            <td onClick={() => onUserClick(user)} className={styles.clickable}>
                                <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>{user.website}</a>
                            </td>
                            <td onClick={() => onUserClick(user)} className={styles.clickable}>{user.company.name}</td>
                            <td>
                                <button className={styles.deleteBtn} onClick={() => onDelete(user.id)} title="Delete user">✕</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
} 