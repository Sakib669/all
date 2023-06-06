import logo from './logo.svg';
import './App.css';


const pie = 3.1416;
const singers = [{name: 'Dr. Mahfuz', job: 'singer'},
{name: 'Eva Rahman', job: 'singer'},
{name: 'Agun', job: 'sopno'},
{name: 'shubro deb', job: 'pathor'}
];

const singerStyle = {
  color: 'magenta',
  backgroundColor: 'white',
  borderRadius: '5px',
  padding: '20px'
};

function App() {
  const nayoks = ['rubel', 'bapparaz', 'kuber', 'jashim', 'salman sha', 'riaz', 'razzak', 'anwar']
  const nayikas = ['moushumi', 'cheka', 'kopila']
  return (
    <div className="App">
      {
       nayoks.map(nayok => <li>{nayok}</li>) 
      }



      {
       nayoks.map(nayok => <Person name={nayok}></Person>) 
      }
      

      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }


      {/* <Person name="abul" nayika="moushumi"></Person>
      <Person name="rubel" nayika="cheka"></Person>
      <Person name="kuber" nayika="kopila"></Person> */}
      <h5>New component. YAY</h5>
      <p>rock mama, React mama.</p>
      <Friend phone="0234"></Friend>
      <Friend phone="3433"></Friend>
    </div>
  );
}

function Person(props) {
  console.log(props);
  // const {name} = props;
  return (
    <div className='person'>
      <h1>Name: {props.name}</h1>
      {/* <p>Nayika: {props.nayika}</p> */}
    </div>
  );
}

const Friend = (props) => {
  return (
    <div className='container'>
      <h1>Name: Ajay Devgun</h1>
      <p>phone: {props.phone}</p>
    </div>
  );
}

export default App;
