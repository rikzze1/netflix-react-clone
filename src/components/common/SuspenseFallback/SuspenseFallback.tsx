import './Suspense.scss';

export const SuspenseFallback = () => {
	return (
		<div className='suspense'>
			<div className='suspense__loader'>
				<div className='suspense__dot suspense__dot--1'></div>
				<div className='suspense__dot suspense__dot--2'></div>
				<div className='suspense__dot suspense__dot--3'></div>
			</div>
		</div>
	);
};
