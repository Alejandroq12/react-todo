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
    <ul>
      {todos.map((todo) => (
        <li>
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodosLogic;
