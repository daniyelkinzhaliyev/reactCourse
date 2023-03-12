import './App.css';

const App = () => {
  return (
    <div className='App'>
    <Header />
    <h1>Hello world</h1>
    </div>
  )
}

const Header = () => {
  return(
    <div>
      <a href=''>Home</a>
      <a href=''>Gallery</a>
      <a href=''>About us</a>
    </div>


  )
  
}

export default App;
