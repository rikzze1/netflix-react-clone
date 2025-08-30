import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
	threshold?: number;
	rootMargin?: string;
}

export const useIntersectionObserver = (
	options: UseIntersectionObserverOptions = {}
) => {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const [hasIntersected, setHasIntersected] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				setIsIntersecting(entry.isIntersecting);
				if (entry.isIntersecting && !hasIntersected) {
					setHasIntersected(true);
				}
			},
			{
				threshold: options.threshold || 0.1,
				rootMargin: options.rootMargin || '50px',
			}
		);

		observer.observe(element);

		return () => observer.disconnect();
	}, [hasIntersected, options.threshold, options.rootMargin]);

	return { ref, isIntersecting, hasIntersected };
};
