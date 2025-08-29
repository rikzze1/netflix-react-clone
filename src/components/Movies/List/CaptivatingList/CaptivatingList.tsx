export const CaptivatingList = () => {
	const MOVIES = 40;

	return (
		<div className="card">
			<h3 className="card__title">So Completely Captivating</h3>
			<div className="card__list">
				{Array.from({ length: MOVIES }, (_, index) => (
					<div className="card__poster" key={index}>
						hello
					</div>
				))}
			</div>
		</div>
	);
};
