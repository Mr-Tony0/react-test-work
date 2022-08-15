import './App.scss';
import List from './components/list';
import Main from './components/main';




function App(props) {
  return (
    <div className='app'>
      <header className='header'>
        <div className="container">
          <a href="#" className='header__logo'>ToDo</a>
        </div>
      </header>
      <main>
        <div className="container">
        <h1>Список ToDo</h1>
          <div className="row">
            <List data = {props.data} addName = {props.addName}/>
            <Main data = {props.data} addName = {props.addName}/>
          </div>
        </div>
      </main>
    </div>
  );
}



export default App;

