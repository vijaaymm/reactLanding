import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Topbar, Header, About, Project, Footer } from './components';

function App() {
  return (
    <div className="App">
      <div className='bg_gradient'>
        <Topbar />
        <Header />
      </div>
      <About />
      <Project />
    </div>
  );
}

export default App;
