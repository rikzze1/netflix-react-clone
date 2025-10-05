import type { CSSProperties } from "react";
import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import "./HoveredCard.scss";
import { getTmdbImageUrl } from "@/util/getTmdbImageUrl";
import { PlayIcon } from "../../Icons/PlayIcon";

interface HoveredCardProps {
    backdrop_path?: string;
    title?: string;
    position: { x: number; y: number };
}

export const HoveredCard = ({ backdrop_path, title, position }: HoveredCardProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation after component mounts
        const timer = setTimeout(() => setIsVisible(true), 50);
        return () => clearTimeout(timer);
    }, []);

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
                    <button className="hover-card__add">+</button>
                    <button className="hover-card__like">👍</button>
                    <button className="hover-card__more">▼</button>
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
