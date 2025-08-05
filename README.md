### Lab 10.1: React Counter with useEffect

A React application demonstrating advanced state management with useState and useEffect.

#### Features

1. Core Counter:

- Current count display

- Increment/Decrement buttons

2. Advanced Functionality:

- History tracking of all count values

- Auto-save to localStorage

- Keyboard controls (ArrowUp/ArrowDown)

- Reset button (clears count and history)

- Custom step input for increment/decrement values

#### Learning Objectives

- Manage multiple state dependencies

- Implement side effects with useEffect

- Handle proper effect cleanup

- Manage complex state update logic

- Build interactive components with persistent state

#### Implementation Highlights

- Uses useState for count, history, and step values

- `useEffect` for:

  a) Saving to localStorage

  b) Keyboard event listeners (with cleanup)

  c) State synchronization

- History tracking with array operations

- Custom step value handling

#### Cloning the Repository

To clone this repository, open terminal or command prompt and run the following command:

```bash
git clone https://github.com/urmee04/react-counter.git
cd react-counter
npm install
npm run dev
```

#### References

Besides class lectures and materials I used below mentioned resources to complete this lab

- [Tailwind Hero Icon](https://refine.dev/blog/heroicons-with-tailwind/#preparation)
- [React Hooks Tutorial](https://www.youtube.com/watch?v=XEU3jlV9syI&t=281s)
- [usestate](https://react.dev/reference/react/useState)
- [useEffect](https://react.dev/reference/react/useEffect)
