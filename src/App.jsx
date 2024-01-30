
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Index from './pages/auth/Index'
import ExpenseTracker from './pages/expense-tracker/ExpenseTracker';

function App() {
  return (
   <div className='App'>
<Router>
  <Routes>
    <Route path='/' exact  element={<Index/>}/>
    <Route path='expense-tracker' exact  element={<ExpenseTracker/>}/>
  </Routes>
</Router>
   </div>
  );
}

export default App;
