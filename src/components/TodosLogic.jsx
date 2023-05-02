/* eslint-disable import/extensions */
import InputTodo from '@/components/InputTodo';

const TodosLogic = () => {
  const todos = [
    {
      id: 1,
      title: 'Setup development enviroment',
      completed: true,
    },
    {
      id: 2,
      title: 'Developed website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ];
  return (
    <div>
      <InputTodo />
      <ul>
        {todos.map((todo) => (
          <li>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosLogic;
