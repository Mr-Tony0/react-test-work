/* eslint-disable react/jsx-no-undef */
import {  BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.scss';
import List from './components/list';
import MainAdd from './components/MainAdd';
import MainEdit from './components/MainEdit';




function App(props) {
  return (
    <BrowserRouter>
    <div className='app'>
      <header className='header'>
        <div className="container">
          <NavLink to='/' className='header__logo'>ToDo</NavLink>
        </div>
      </header>
      <main>
        <div className="container">
        <h1>Список ToDo</h1>
          <div className="row">
            
            {/* <MainAdd data = {props.data} addName = {props.addName} edit = {props.editClick}/> */}
            
            <List data = {props.data} addName = {props.addName} edit = {props.editClick}/>
              <Routes>
                <Route path='/' element = {<MainAdd data = {props.data} addName = {props.addName}/>}/>
                <Route path='/edit/:id' element = {<MainEdit  data = {props.data} addName = {props.addName} edit = {props.edit} del ={props.del}/>}/>
              </Routes>
            
            
          </div>
        </div>
      </main>
    </div>
    </BrowserRouter>
  );
}



export default App;

