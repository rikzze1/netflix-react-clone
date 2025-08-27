import { useEffect } from 'react';
import type { RefObject } from 'react';

interface EventPointerLeaveEnter {
	element: RefObject<HTMLDivElement | null>;
	onClickOutside: () => void;
}

export const useClickEvent = ({
	element,
	onClickOutside,
}: EventPointerLeaveEnter) => {
	useEffect(() => {
		const targetElement = element.current;

		const handleClickOutSide = (event: MouseEvent) => {
			if (
				targetElement &&
				!targetElement?.contains(event.target as Node)
			) {
				onClickOutside();
			}
		};

		document.addEventListener('click', handleClickOutSide);

		return () => {
			document.removeEventListener('click', handleClickOutSide);
		};
	}, [element, onClickOutside]);
};
