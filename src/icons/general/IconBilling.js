// @flow
import * as React from 'react';

import AccessibleSVG from '../accessible-svg';

type Props = {
    className?: string,
    color?: string,
    height?: number,
    /** A text-only string describing the icon if it's not purely decorative for accessibility */
    title?: string | React.Element<any>,
    width?: number,
};

const IconBilling = ({ className = '', color = '#888888', height = 10, title, width = 14 }: Props) => (
    <AccessibleSVG
        className={`icon-billing ${className}`}
        height={height}
        title={title}
        viewBox="0 0 14 10"
        width={width}
    >
        <g className="stroke-color" fill="none" fillRule="evenodd" stroke={color}>
            <rect height="9" rx="1" width="13" x=".5" y=".5" />
            <path d="M7.5 7.5h-5m8 0h-1" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1.5 3h11" strokeLinecap="square" strokeWidth="2" />
        </g>
    </AccessibleSVG>
);

export default IconBilling;