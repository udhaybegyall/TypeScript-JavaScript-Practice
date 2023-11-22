// Define types for the actions that can be performed on the counter
type CounterAction = { type: 'increment' } | { type: 'decrement' };

// Define the state of the counter
type CounterState = {
  count: number;
};

// Define a function that takes the current state and an action, and returns a new state
type Reducer = (state: CounterState, action: CounterAction) => CounterState;

// Define the initial state of the counter
const initialState: CounterState = {
  count: 0,
};

// Define the reducer function
const counterReducer: Reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Create a function that renders the counter
const renderCounter = (state: CounterState) => {
  const container = document.getElementById('counter-container');
  if (container) {
    container.innerHTML = `<p>Count: ${state.count}</p>
                           <button onclick="dispatch({ type: 'increment' })">Increment</button>
                           <button onclick="dispatch({ type: 'decrement' })" ${state.count === 0 ? 'disabled' : ''}>Decrement</button>`;
  }
};

// Define a function to dispatch actions
const dispatch = (action: CounterAction) => {
  // Update the state by calling the reducer
  nextState = counterReducer(state, action);
  
  if (action.type !== 'decrement' || nextState.count >= 0) {
    state = nextState;
  }
  
  // Render the updated state
  renderCounter(state);
};

// Initialize the state with the initial state
let state: CounterState = initialState;

// Initial render
renderCounter(state);
