import { useEffect } from 'react';
import type { RefObject } from 'react';

interface EventMouseLeave {
	element: RefObject<HTMLDivElement | null>;
	relatedTarget?: string;
	onMouseEnter: () => void;
	onMouseLeave: () => void;
}

export const useEventMouseLeave = ({
	element,
	relatedTarget,
	onMouseEnter,
	onMouseLeave,
}: EventMouseLeave) => {
	useEffect(() => {
		const targetElement = element?.current;

		const handleMouseEnter = () => {
			onMouseEnter();
		};

		const handleMouseLeave = (e: MouseEvent) => {
			if (relatedTarget) {
				const container = targetElement?.querySelector(relatedTarget);
				if (container?.contains(e.relatedTarget as Node)) return;
			}
			onMouseLeave();
		};

		if (targetElement) {
			targetElement.addEventListener('mouseenter', handleMouseEnter);
			targetElement.addEventListener('mouseleave', handleMouseLeave);
		}

		return () => {
			if (targetElement) {
				targetElement.removeEventListener(
					'mouseenter',
					handleMouseEnter
				);
				targetElement.removeEventListener(
					'mouseenter',
					handleMouseLeave
				);
			}
		};
	}, [element, onMouseEnter, onMouseLeave, relatedTarget]);
};
