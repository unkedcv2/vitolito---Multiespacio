interface WaveDividerWithStarProps {
  fillColor?: string; // fill of the bottom mass (e.g. '#023047')
  starColor?: string; // color of the star (default white '#ffffff')
  className?: string;
  inverted?: boolean;
}

export default function WaveDividerWithStar({
  fillColor = '#ffffff',
  starColor = '#ffffff',
  className = '',
  inverted = false,
}: WaveDividerWithStarProps) {
  // Determine if we should render light-to-dark or dark-to-light hand-drawn stroke
  return (
    <div
      className={`w-full relative overflow-hidden leading-none pointer-events-none ${className} ${
        inverted ? 'rotate-180' : ''
      }`}
      style={{ height: '7.5rem' }}
      aria-hidden="true"
    >
      {/* 1. Background block matching the section color we are transitioning into with green waves/fillets */}
      <svg
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full scale-y-105 translate-y-[1px] origin-bottom"
      >
        {/* Soft Translucent Green/Teal Wave Layer 1 */}
        <path
          d="M0,80 C360,150 720,40 1080,165 C1240,210 1340,150 1440,130 L1440,210 L0,210 Z"
          fill="#2C9C8E"
          opacity="0.22"
        />

        {/* Soft Translucent Green/Teal Wave Layer 2 */}
        <path
          d="M0,130 C280,80 580,175 880,105 C1150,40 1300,165 1440,115 L1440,210 L0,210 Z"
          fill="#2C9C8E"
          opacity="0.15"
        />

        {/* Solid Destination Wave (e.g. #023047 or #ffffff) - extended slightly past bottom to prevent subpixel lines */}
        <path
          d="M0,110 C300,165 600,60 900,145 C1150,200 1320,135 1440,110 L1440,210 L0,210 Z"
          fill={fillColor}
        />

        {/* Elegant Green/Teal Fillet (thin stroke) to unify the transition */}
        <path
          d="M0,110 C300,165 600,60 900,145 C1150,200 1320,135 1440,110"
          fill="none"
          stroke="#2C9C8E"
          strokeWidth="3"
          opacity="0.45"
        />
      </svg>

      {/* 2. Custom Shooting Star Cursive Wave & Star - matching user uploaded image exactly */}
      <svg
        viewBox="0 0 1440 200"
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          {/* Custom SVG soft drop shadow matching the image depth */}
          <filter id="brush-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#000000" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Perfectly centered 5-pointed star with white glow and drop shadow on the wave */}
        <g transform="translate(720, 132)" filter="url(#brush-shadow)">
          <polygon
            points="0,-18 5.29,-5.57 18.84,-5.57 7.87,2.41 12.06,15.28 0,7.29 -12.06,15.28 -7.87,2.41 -18.84,-5.57 -5.29,-5.57"
            fill={starColor}
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

