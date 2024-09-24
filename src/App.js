import './App.css';
import Task from './Components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Stuff1" deadline="sometime" description="yep1"/>
      <Task title="Stuff2" deadline="someplace" description="yep2"/>
      <Task title="Stuff3" deadline="somewhere" description="yep3" />
    </div>
  );
}

export default App;
