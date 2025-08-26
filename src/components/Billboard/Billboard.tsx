import billboardImage from '@/assets/Billboard/title.png';
import { PlayIcon } from '@/components/Icons/PlayIcon';

import './Billboard.scss';
import { MoreInfoIcon } from '../Icons/MoreInfoIcon';
import { ReplayIcon } from '../Icons/ReplayIcon';

export const Billboard = () => {
	return (
		<div className="billboard">
			<div className="billboard__info">
				<img
					className="billboard__title"
					src={billboardImage}
					alt="Billboard"
				/>
				<p className="billboard__description">
					A gruff detective (Christian Bale) investigating a bizarre
					murder forms an unlikely bond with eccentric West Point
					cadet Edgar Allan Poe (Harry Melling).
				</p>
				<div className="billboard__buttons">
					<div className="left-items">
						<button>
							<PlayIcon color="black" width="24" height="24" />
							Play
						</button>
						<button>
							<MoreInfoIcon
								color="white"
								width="24"
								height="24"
							/>
							More Info
						</button>
					</div>
					<div className="right-items">
						<button>
							<ReplayIcon color="white" width="20" height="20" />
						</button>
						<div className="rating">
							<span>16+</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
