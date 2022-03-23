import './App.css';
import { Projects } from './components/projects/Projects'
import { Bio } from './components/Bio';
import { Header } from './components/header/Header';
import { Philosophy } from './components/Philosophy';
import { Technologies } from './components/Technologies'
import { ReachOut } from './components/reachOut/ReachOut';

function App() {
  return (
		<div className='App'>
			<Header />
			<Bio />
			<Philosophy />
			<Technologies />
			<Projects />
			<ReachOut />
			
		</div>
	)
}

export default App;
