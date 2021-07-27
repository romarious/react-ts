import React, { Component } from 'react';
import { render } from 'react-dom';
import { useDispatch } from 'react-redux';
import FieldRenderer from './FieldRenderer';
import Button from './Button/Button.tsx';
import { useFields } from './redux/selectors';
import './style.css';

const App = () => {
  const fieldsArray = useFields();
  const dispatch = useDispatch();
  const fields = fieldsArray[fieldsArray.length - 1];

  const handleButtonClick = () => {
    dispatch({ type: 'UNDO_FIELD_VALUE' });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {fields.map(field => (
        <FieldRenderer key={field.id} field={field} />
      ))}
      <button
        type="button"
        onClick={handleButtonClick}
        style={{
          position: 'absolute',
          top: '90%',
          left: '90%',
          border: 'none',
          background: 'transparent'
        }}
      >
        UnDo
      </button>
    </div>
  );
};
export default App;
