/* eslint-disable import/extensions */
import TodoItem from '@/components/TodoItem';

const TodosList = ({ todosProps }) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItem itemProp={todo} />
    ))}
  </ul>
);

export default TodosList;
