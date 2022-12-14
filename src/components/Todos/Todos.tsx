import { useSelector } from 'react-redux';
import StyleTodos from './Todos.styles';

import TodoItem from './components/TodoItem/TodoItem';
import FilterButtons from './components/FilterButtons/FilterButtons';
import FormAddTodo from './components/FormAddTodo/FormAddTodo';
import { filterTodosSelector } from '../../redux/todos/todoSlice';

const Todos: React.FC = () => {
  const todos = useSelector(filterTodosSelector);

  return (
    <StyleTodos>
      <div className="container">
        <FormAddTodo />
        <FilterButtons todos={todos.todoList} filter={todos.filter} />
        <ul className="todos-list">
          {todos.todoList.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </StyleTodos>
  );
};

export default Todos;
