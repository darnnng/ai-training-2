import { render, screen, fireEvent } from '@testing-library/react';
import { UserModal } from './UserModal';
import type { User } from '../../types/user';

describe('UserModal', () => {
    const user: User = {
        id: 1,
        name: 'Test User',
        username: 'testuser',
        email: 'test@example.com',
        address: { city: 'Test City', street: 'Test St', suite: '', zipcode: '', geo: { lat: '1', lng: '2' } },
        phone: '123',
        website: 'test.com',
        company: { name: 'Test Co', catchPhrase: 'Catch', bs: '' },
    };

    it('renders user details', () => {
        render(<UserModal user={user} onClose={() => { }} />);
        expect(screen.getByText('Test User')).toBeInTheDocument();
        expect(screen.getByText(/testuser/)).toBeInTheDocument();
        expect(screen.getByText(/test@example.com/)).toBeInTheDocument();
        expect(screen.getByText(/Test City/)).toBeInTheDocument();
        expect(screen.getByText(/Test Co/)).toBeInTheDocument();
    });

    it('calls onClose when close button is clicked', () => {
        const onClose = jest.fn();
        render(<UserModal user={user} onClose={onClose} />);
        fireEvent.click(screen.getByTitle(/close/i));
        expect(onClose).toHaveBeenCalled();
    });
}); 