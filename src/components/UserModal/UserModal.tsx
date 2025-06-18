import styles from './UserModal.module.css';
import type { User } from '../../types/user';

interface UserModalProps {
    user: User;
    onClose: () => void;
}

export function UserModal({ user, onClose }: UserModalProps) {
    const mapUrl = `https://www.google.com/maps?q=${user.address.geo.lat},${user.address.geo.lng}`;
    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose} title="Close">✕</button>
                <h2>{user.name}</h2>
                <div className={styles.section}><b>Username:</b> {user.username}</div>
                <div className={styles.section}><b>Email:</b> <a href={`mailto:${user.email}`}>{user.email}</a></div>
                <div className={styles.section}><b>Phone:</b> <a href={`tel:${user.phone}`}>{user.phone}</a></div>
                <div className={styles.section}><b>Website:</b> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></div>
                <div className={styles.section}><b>Address:</b> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode} <br />
                    <a href={mapUrl} target="_blank" rel="noopener noreferrer">View on map</a>
                </div>
                <div className={styles.section}><b>Company:</b> {user.company.name}<br />
                    <span className={styles.companyPhrase}>{user.company.catchPhrase}</span>
                </div>
            </div>
        </div>
    );
} 