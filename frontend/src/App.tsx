import React, { Fragment, useState } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Navigation from './components/Navigation';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import User from './components/User';

type FormElements = React.FormEvent<HTMLFormElement>;
interface ITask {
  name: string;
  done: boolean;
}

function App(): JSX.Element {

  const [newTask, setNewTask] = useState<string>('');
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleSubmit = (e: FormElements) => {
    e.preventDefault(); //Por defecto recarga la pagina, esta linea hace que no lo haga
    addTask(newTask);
    setNewTask(''); //Cogemos los datos y limpiamos el input
  }

  const addTask = (name: string) => {
    const newTasks: ITask[] = [...tasks, {name, done: false}]
    //Copia el contenido "...tasks", insetar la nueva "{name}"
    setTasks(newTasks)
  }

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<UserList/>} />
        <Route path="/edit/:userName" element={<User/>} />
        <Route path="/add" element={<CreateUser/>} />
      </Routes>
    </Router>
  );
}

export default App;
