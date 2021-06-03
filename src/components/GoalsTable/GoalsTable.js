/* eslint-disable max-len */
import React, { useCallback, useContext } from 'react';
import { map, flow, sortBy } from 'lodash/fp';
import GoalsContext from '../Contexts/GoalsContext';

const GoalsTable = () => {
  const { goals, setGoals } = useContext(GoalsContext);

  const removeGoal = useCallback((title) => {
    setGoals({ type: 'remove', item: title });
  }, [setGoals]);

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Type</th>
          <th>Tools</th>
          <th>Obstacles</th>
          <th>Date Created</th>
          <th>Completed</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {flow(
          sortBy('title'),
          map(
            ({
              title,
              type,
              tools,
              obstacles,
              dateCreated,
              isCompleted,
            }) => (
              <tr key={title}>
                <td>{title}</td>
                <td>{type}</td>
                <td>{tools}</td>
                <td>{obstacles}</td>
                <td>{dateCreated}</td>
                <td>{isCompleted.toString()}</td>
                <td><button type="button" onClick={() => removeGoal(title)}>Delete</button></td>
              </tr>
            ),
          ),
        )(goals)}
      </tbody>
    </table>
  );
};

export default GoalsTable;
