import { render, screen, fireEvent } from '@testing-library/react';
import { UserTable } from './UserTable';
import type { User } from '../../types/user';

describe('UserTable', () => {
    const users: User[] = [
        {
            id: 1,
            name: 'Test User',
            username: 'testuser',
            email: 'test@example.com',
            address: { city: 'Test City', street: 'Test St', suite: '', zipcode: '', geo: { lat: '', lng: '' } },
            phone: '123',
            website: 'test.com',
            company: { name: 'Test Co', catchPhrase: '', bs: '' },
        },
    ];

    it('renders user info', () => {
        render(
            <UserTable users={users} onUserClick={() => { }} onDelete={() => { }} />
        );
        expect(screen.getByText('Test User')).toBeInTheDocument();
        expect(screen.getByText('test@example.com')).toBeInTheDocument();
    });

    it('calls onDelete when delete button is clicked', () => {
        const onDelete = jest.fn();
        render(
            <UserTable users={users} onUserClick={() => { }} onDelete={onDelete} />
        );
        fireEvent.click(screen.getByTitle(/delete user/i));
        expect(onDelete).toHaveBeenCalledWith(1);
    });
}); 