import styles from './App.module.css';
import { useState, useEffect } from 'react';
import type { User } from '../../types/user';
import { UserTable } from '../UserTable/UserTable';
import { UserModal } from '../UserModal/UserModal';

export default function App() {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch(() => {
                setError('Ошибка загрузки пользователей');
                setLoading(false);
            });
    }, []);

    const handleDelete = (id: number) => {
        setUsers((prev) => prev.filter((u) => u.id !== id));
        if (selectedUser?.id === id) setSelectedUser(null);
    };

    return (
        <div className={styles.appContainer}>
            <h1 className={styles.title}>Users</h1>
            {loading && <div>Loading...</div>}
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {!loading && !error && (
                <UserTable users={users} onUserClick={setSelectedUser} onDelete={handleDelete} />
            )}
            {selectedUser && (
                <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
            )}
        </div>
    );
} 