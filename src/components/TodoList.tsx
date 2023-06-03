import { Todo } from '../models';
import TodoItem from './TodoItem';
import { Droppable } from 'react-beautiful-dnd';
import './styles.css';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos, completedTodos, setCompletedTodos}:Props) => {
  return (
    <div className='container'>
      {/* <Droppable droppableId='TodosList'>
        {
          (provided) => (
            <div className="todos" ref={provided.innerRef} {...provided.droppableProps}>
              {todos?.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  todos={todos}
                  setTodos={setTodos}
                />
              ))}
            </div>
          )
        }
      </Droppable> */}
      <div className="todos">
        <span className="todos__heading">
          Active Tasks
        </span>
        {todos?.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
      <div className="todos remove">
        <span className="todos__heading">
          Completed Tasks
        </span>
        {todos?.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
      
  )
}

export default TodoList