# Users Table App (React + Vite + TypeScript)

## Description

A modern application for displaying, viewing, and managing a list of users. Uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) for test data. Styled with CSS Modules. Features a modal window, client-side user deletion, animations, and responsive design.

## Features
- Tabular display of users with columns: name/email, address, phone, website, company
- Modal window with detailed user information and a map link
- User deletion (client-side only)
- Modern design, responsive layout, animations
- Unit tests with Jest + React Testing Library

## Project Structure
```
src/
  components/
    App/
    UserTable/
    UserModal/
  types/
    user.ts
```

## Installation & Start
```bash
npm install
npm run dev
```

## Testing
```bash
npm run test
```
or directly:
```bash
npx jest
```

## Adding Tests
Tests are located next to the components, for example: `src/components/App/App.test.tsx`.

## Technologies Used
- React 18+
- TypeScript
- Vite
- CSS Modules
- Jest, React Testing Library

## API
[JSONPlaceholder Users](https://jsonplaceholder.typicode.com/users)

---

> This project was created to demonstrate modern frontend development practices.
