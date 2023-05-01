/* eslint-disable react/prop-types */
import { useState, useRef } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaTrash } from 'react-icons/fa';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AiFillEdit } from 'react-icons/ai';
// eslint-disable-next-line import/extensions
import { useTodosContext } from '../context/TodosContext';
import styles from '../styles/TodoItem.module.css';

// eslint-disable-next-line react/prop-types
const TodoItem = ({ itemProp }) => {
  const [editing, setEditing] = useState(false);

  const { handleChange, delTodo, setUpdate } = useTodosContext();

  const editInputRef = useRef(null);

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const handleEditing = () => {
    setEditing(true);
  };

  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setUpdate(editInputRef.current.value, itemProp.id);
      setEditing(false);
    }
  };
  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          // eslint-disable-next-line react/prop-types
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <button type="submit" onClick={handleEditing}>
          <AiFillEdit
            style={{ color: '#5e5e5e', fontSize: '16px' }}
          />
        </button>
        <button type="submit" onClick={() => delTodo(itemProp.id)}>
          <FaTrash style={{ color: '#5e5e5e', fontSize: '16px' }} />
        </button>
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>
      </div>
      <input
        type="text"
        ref={editInputRef}
        defaultValue={itemProp.title}
        className={styles.textInput}
        style={editMode}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};
export default TodoItem;
