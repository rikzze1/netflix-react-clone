import './MovieSkeleton.scss';

export const MovieSkeleton = ({ length }: { length: number }) => {
	return (
		<>
			{Array.from({ length }, (_, index) => (
				<div key={index} className='skeleton'>
					<div className='skeleton__card'>
						<div className='skeleton__shimmer'></div>
					</div>
				</div>
			))}
		</>
	);
};
