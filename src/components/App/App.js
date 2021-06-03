import React, { useReducer } from 'react';
import { filter } from 'lodash/fp';
import GoalCreateForm from '../GoalCreateForm';
import GoalsTable from '../GoalsTable';
import GoalsContext from '../Contexts/GoalsContext';

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.item];
    case 'remove':
      return filter(state, (e) => e.title !== action.item);
    case 'removeAll':
      return [];
    case 'update':
      return [...filter(state, (e) => e.title !== action.item), action.item];
    default:
      throw new Error();
  }
};

const App = () => {
  const [goals, setGoals] = useReducer(reducer, []);

  return (
    <GoalsContext.Provider value={{ goals, setGoals }}>
      <h1>Goals Tracker</h1>
      <GoalCreateForm />
      <GoalsTable />
    </GoalsContext.Provider>
  );
};

export default App;
