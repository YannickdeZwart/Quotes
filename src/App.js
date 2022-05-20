import './App.css';
import Quote from './Components/Quote.js';
import QuoteForm from "./Components/QuoteForm";
import QuoteList from "./Components/QuoteList";

function App() {
    return (
    <div className="App">
      <header className="App-header">
          <QuoteList />
      </header>
    </div>
  );
}

export default App;
