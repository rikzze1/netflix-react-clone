import { Billboard } from '@/components/features/Billboard/Billboard';
import { Header } from '@/components/layout/Header/Header';

import './Home.scss';
import { HomeList } from '@/components/features/List/Home/HomeList';

const Home = () => {
	return (
		<div className='container'>
			<Header />
			<main className='container__main'>
				<div className='main__billboard'>
					<Billboard />
				</div>
				<div className='main__movies'>
					<HomeList />
				</div>
			</main>
		</div>
	);
};

export default Home;
