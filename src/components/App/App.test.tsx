import { render, screen, waitFor } from '@testing-library/react';
import { App } from './App';

// Мокаем fetch
beforeAll(() => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve([
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
            ]),
        }) as any
    );
});
afterAll(() => {
    (global.fetch as jest.Mock).mockRestore?.();
});

test('renders app title', () => {
    render(<App />);
    expect(screen.getByText(/users/i)).toBeInTheDocument();
});

test('loads and displays users', async () => {
    render(<App />);
    await waitFor(() => expect(screen.getByText('Test User')).toBeInTheDocument());
}); 