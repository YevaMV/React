import Todo from './components/Todo';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="1" />
      <Todo text="2" />
      <Todo text="3" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
