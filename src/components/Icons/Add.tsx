interface SvgProps {
    fill: string;
    width: string;
    height: string;
}

export const AddIcon = ({ fill, width, height }: SvgProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 24 24"
    >
        <g
            fill={fill}
            fillRule="evenodd"
            clipPath="url(#clip0_2_2)"
            clipRule="evenodd"
        >
            <path d="M12 22.125C6.417 22.125 1.875 17.583 1.875 12S6.417 1.875 12 1.875 22.125 6.417 22.125 12 17.583 22.125 12 22.125m5.156-11.063h-4.218v-4.22h-1.876v4.22H6.845v1.875h4.219v4.218h1.874v-4.218h4.22z"></path>
            <path d="M12 0c3.205 0 6.219 1.248 8.485 3.515A11.92 11.92 0 0 1 24 12c0 3.205-1.248 6.219-3.515 8.485A11.92 11.92 0 0 1 12 24a11.92 11.92 0 0 1-8.485-3.515A11.92 11.92 0 0 1 0 12c0-3.205 1.248-6.219 3.515-8.485A11.92 11.92 0 0 1 12 0M1.875 12c0 5.583 4.542 10.125 10.125 10.125S22.125 17.583 22.125 12 17.583 1.875 12 1.875 1.875 6.417 1.875 12"></path>
        </g>
        <defs>
            <clipPath id="clip0_2_2">
                <path fill="#fff" d="M0 0h24v24H0z"></path>
            </clipPath>
        </defs>
    </svg>
);