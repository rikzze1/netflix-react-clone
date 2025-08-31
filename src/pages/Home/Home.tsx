import { Billboard } from '@/components/features/Billboard/Billboard';
import { Header } from '@/components/layout/Header/Header';
import { Movies } from '@/components/features/Movies/Movies';

import './Home.scss';

const Home = () => {
	return (
		<div className='container'>
			<Header />
			<main className='container__main'>
				<div className='main__billboard'>
					<Billboard />
				</div>
				<div className='main__movies'>
					<Movies />
				</div>
			</main>
		</div>
	);
};

export default Home;
