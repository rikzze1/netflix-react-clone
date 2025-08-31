import './MovieSkeleton.scss';

export const MovieSkeleton = ({ length }: { length: number }) => {
	return (
		<div>
			{Array.from({ length }, (_, index) => (
				<div key={index} className='skeleton'>
					<div className='skeleton__card'>hello</div>
				</div>
			))}
		</div>
	);
};
