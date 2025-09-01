import { Billboard } from '@/components/features/Billboard/Billboard';
import { Header } from '@/components/layout/Header/Header';

import './Home.scss';
import { HomeList } from '@/components/features/List/Home/HomeList';
import { Footer } from '@/components/layout/Footer/Footer';

const Home = () => {
	return (
		<div className='container'>
			<header className='container__header'>
				<Header />
			</header>
			<main className='container__main'>
				<div className='main__billboard'>
					<Billboard />
				</div>
				<div className='main__movies'>
					<HomeList />
				</div>
			</main>
			<footer className='container__footer'>
				<Footer />
			</footer>
		</div>
	);
};

export default Home;
