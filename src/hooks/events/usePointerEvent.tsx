import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';

interface EventPointerLeave {
	element: RefObject<HTMLDivElement | null>;
	relatedTarget?: string;
	onPointerEnter: () => void;
	onPointerLeave: () => void;
	delay?: number;
}

export const usePointerEvent = ({
	element,
	relatedTarget,
	onPointerEnter,
	onPointerLeave,
	delay = 300,
}: EventPointerLeave) => {
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
		undefined
	);

	useEffect(() => {
		const targetElement = element?.current;

		const handlePointerEnter = () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
			onPointerEnter();
		};

		const handlePointerLeave = (e: PointerEvent) => {
			if (relatedTarget) {
				const container = targetElement?.querySelector(relatedTarget);
				if (container?.contains(e.relatedTarget as Node)) return;
			}

			timeoutRef.current = setTimeout(() => {
				onPointerLeave();
			}, delay);
		};

		if (targetElement) {
			targetElement.addEventListener('pointerenter', handlePointerEnter);
			targetElement.addEventListener('pointerleave', handlePointerLeave);
		}

		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
			if (targetElement) {
				targetElement.removeEventListener(
					'pointerenter',
					handlePointerEnter
				);
				targetElement.removeEventListener(
					'pointerleave',
					handlePointerLeave
				);
			}
		};
	}, [element, onPointerEnter, onPointerLeave, relatedTarget, delay]);
};
