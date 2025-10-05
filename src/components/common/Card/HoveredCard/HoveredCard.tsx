import type { CSSProperties } from "react";
import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import "./HoveredCard.scss";
import { getTmdbImageUrl } from "@/util/getTmdbImageUrl";
import { PlayIcon } from "../../Icons/PlayIcon";
import { AddIcon } from "../../Icons/AddIcon";
import { ThumbsUpIcon } from "../../Icons/ThumbsUpIcon";
import { DownArrowIcon } from "../../Icons/DownArrowIcon";

interface HoveredCardProps {
    backdrop_path?: string;
    title?: string;
    position: { x: number; y: number };
    isCardHovered?: boolean;
}

export const HoveredCard = ({ backdrop_path, title, position, isCardHovered }: HoveredCardProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation after component mounts
        const timer = setTimeout(() => setIsVisible(true), 50);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Handle exit animation when hover ends
        if (isCardHovered === false) {
            setIsVisible(false);
        }
    }, [isCardHovered]);

    const card = (
        <div
            className={`hover-card ${isVisible ? 'visible' : ''}`}
            style={{
                '--card-backdrop': backdrop_path
                    ? `url(${getTmdbImageUrl(backdrop_path, 'ORIGINAL')})`
                    : 'none',
                left: position.x - 210,
                top: position.y - 200
            } as CSSProperties}
        >
            <div className="hover-card__image"></div>
            <div className="hover-card__content">
                <div className="hover-card__actions">
                    <button className="hover-card__play">
                        <PlayIcon color='black' width='25' height='25' />
                    </button>
                    <button className="hover-card__add">
                        <AddIcon color='white' width='55' height='55' />
                    </button>
                    <button className="hover-card__like">
                        <ThumbsUpIcon color='white' width='25' height='25' />
                    </button>
                    <button className="hover-card__more">
                        <DownArrowIcon color='white' width='20' height='20' />
                    </button>
                </div>
                <div className="hover-card__info">
                    <div className="hover-card__metadata">
                        <div className="hover-card__rating">13+</div>
                        <div className="hover-card__year">2021</div>
                        <div className="hover-card__duration">1h 45m</div>
                        <div className="hover-card__quality">HD</div>
                    </div>
                    <div className="hover-card__title">{title}</div>
                    <div className="hover-card__genres">Action • Adventure • Comedy</div>
                </div>
            </div>
        </div>
    );

    return createPortal(card, document.body);
}
