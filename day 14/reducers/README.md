## What are reducers?

Reducers are pure functions that take the current state and an action as arguments, and return a new state. They are used to manage complex state logic in React applications, especially when state changes become more intricate.


## Why should we use reducers?

Reducers are useful for several reasons:

1. They provide a predictable way to manage state changes
2. They help in organizing complex state logic
3. They make it easier to test state changes
4. They can improve performance in some cases

---

### Compared to useState:

1. Reducers are better for complex state logic
2. They provide a clear structure for state updates
3. They can handle multiple related state transitions more easily

### Compared to context:

1. Reducers can be used alongside context for more powerful state management
2. They provide a more structured approach to updating state
3. Like context, can there be multiple reducers in an app

---

// userReducer.js
function userReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isLoggedIn: true, username: action.payload };
    case 'LOGOUT':
      return { ...state, isLoggedIn: false, username: null };
    default:
      return state;
  }
}

// cartReducer.js
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] };
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(item => item.id !== action.payload) };
    default:
      return state;
  }
}

// App.js
function App() {
  const [userState, userDispatch] = useReducer(userReducer, { isLoggedIn: false, username: null });
  const [cartState, cartDispatch] = useReducer(cartReducer, { items: [] });

  // ... rest of the component
}

