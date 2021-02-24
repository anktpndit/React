import header from './components/Header'
import Header from './components/Header'
import Tasks from './components/tasks'
import { useState } from 'react'
import Addtask from './components/addtask'

function App() {
  const [toggleadd, settoggleadd] = useState(false)
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: 'Football Practice',
      day: 'Jan 20th, 2021',
      reminder: 'true',
    },
    {
      id: 2,
      text: 'Take Grocery',
      day: 'Jan 25th, 2021',
      reminder: 'true',
    },
    {
      id: 3,
      text: 'Movies with Friends',
      day: 'Dec 29th, 2021',
      reminder: 'true',
    }
  ])

  //Delete Tasks
  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id))
  }

  //reminder tasks
  const Remindertoggle = (id) => {
    setTask(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  //add task to our App
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTask([...tasks, newTask])
  }

  return (
    <div className="container" >
      <Header title="Task Tracker" onAdd={() => settoggleadd(!toggleadd)} togglestate={toggleadd}  />
      {toggleadd && <Addtask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={Remindertoggle} />
      ) : ('No Tasks Remaining')}
    </div>
  );
}

export default App;