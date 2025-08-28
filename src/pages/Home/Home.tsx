import { Billboard } from '@/components/Billboard/Billboard';
import { Header } from '@/components/Header/Header';
import { Movies } from '@/components/Movies/Movies';

import './Home.scss';

const Home = () => {
	return (
		<div className="container">
			<Header />
			<main className="container__main">
				<div className="main__billboard">
					<Billboard />
				</div>
				<div className="main__movies">
					<Movies />
				</div>
			</main>
		</div>
	);
};

export default Home;
