/* eslint-disable max-len */
import React, { useCallback, useContext, useState } from 'react';
import GoalsContext from '../Contexts/GoalsContext';

const GoalCreateForm = () => {
  const { setGoals } = useContext(GoalsContext);
  const [title, setTitle] = useState('');
  const [tools, setTools] = useState('');
  const [obstacles, setObstacles] = useState('');
  const [type, setType] = useState('Technology');

  const createGoal = useCallback(() => {
    const goal = {
      title,
      tools,
      obstacles,
      type,
      dateCreated: new Date().toLocaleString(),
      isCompleted: false,
    };
    setGoals({ type: 'add', item: goal });
  }, [setGoals, title, tools, obstacles, type]);

  const clearGoals = useCallback(() => {
    setGoals({ type: 'removeAll' });
  }, [setGoals]);

  return (
    <form>
      <input value={title} type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <input value={tools} type="text" placeholder="Tools" onChange={(e) => setTools(e.target.value)} />
      <input value={obstacles} type="text" placeholder="Obstacles" onChange={(e) => setObstacles(e.target.value)} />
      <label htmlFor="type">
        Type:
        <select id="type" value={type} onChange={(e) => { setType(e.target.value); }}>
          <option value="Technology">Technology</option>
          <option value="Health">Health</option>
          <option value="Personal">Personal</option>
        </select>
      </label>
      <button type="button" onClick={() => createGoal()}>Add Goal</button>
      <button type="button" onClick={() => clearGoals()}>Clear Goals</button>
    </form>
  );
};

export default GoalCreateForm;
