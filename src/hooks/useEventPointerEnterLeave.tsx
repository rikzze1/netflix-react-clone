import { useEffect } from 'react';
import type { RefObject } from 'react';

interface EventPointerLeaveEnter {
	element: RefObject<HTMLDivElement | null>;
	onPointerEnter: () => void;
	onPointerLeave: () => void;
}

export const useEventPointerLeaveEnter = ({
	element,
	onPointerEnter,
	onPointerLeave,
}: EventPointerLeaveEnter) => {
	useEffect(() => {}, []);
};
