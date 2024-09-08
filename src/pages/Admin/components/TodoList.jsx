const todos = [
    { task: 'Lorem Ipsum is simply dummy text', date: '24 June 2020', status: 'Due tomorrow' },
    { task: 'Lorem Ipsum is simply dummy text', date: '23 June 2020', status: 'Done' },
    { task: 'Lorem Ipsum is simply dummy text', date: '24 June 2020', status: 'Expired' },
  ];
  
  const TodoList = () => {
    return (
      <div className="bg-white shadow p-6 rounded-lg">
        <h3 className="font-semibold text-lg mb-4">Todo List</h3>
        <ul className="space-y-4">
          {todos.map((todo, index) => (
            <li key={index} className="flex justify-between">
              <div>
                <p>{todo.task}</p>
                <span className="text-sm text-gray-500">{todo.date}</span>
              </div>
              <span className={`text-sm ${todo.status === 'Done' ? 'text-green-500' : 'text-red-500'}`}>
                {todo.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default TodoList;
  