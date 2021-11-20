import ProjectContextProvider from './components/contexts/ProjectContext';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import HireMe from './components/HireMe';
import Footer from './components/Footer';
import PortfolioModal from './components/PortfolioModal';

function App() {
	return (
		<div className='app'>
			<ProjectContextProvider>
				<Header className='container' />
				<About className='container' />
				<Portfolio className='container' />
				<PortfolioModal />
				<HireMe className='container' />
				<Footer className='container' />
			</ProjectContextProvider>
		</div>
	);
}

export default App;
