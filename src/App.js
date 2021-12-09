import Listing from './Components/Listing/Listing'
import './App.css'

/*class RecordModel{
  constructor(id, date, distance) {
    this.id = id
    this.date = date
    this.distance = distance
  }
}*/

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <Listing />
      </header>
    </div>
  );
}

export default App;
