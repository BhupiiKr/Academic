
'use client';

import { useId } from 'react';

type ParticlesBackgroundProps = {
  opacity?: number;
};

export default function ParticlesBackground({
  opacity = 0.45,
}: ParticlesBackgroundProps) {
  const id = useId().replace(/:/g, '');

  const gradientId = `particle-glow-${id}`;

  const nodes = [
    [110, 130, 5],
    [250, 80, 4],
    [350, 170, 6],
    [480, 100, 5],
    [610, 200, 4],
    [750, 110, 6],
    [900, 180, 5],
    [1040, 90, 4],
    [1160, 230, 6],
    [160, 350, 4],
    [320, 420, 5],
    [500, 330, 4],
    [680, 450, 6],
    [850, 360, 4],
    [1020, 470, 5],
    [1180, 390, 4],
    [100, 590, 5],
    [300, 650, 4],
    [540, 580, 6],
    [780, 630, 4],
    [980, 590, 5],
    [1150, 680, 4],
  ];

  const connections = [
    [0, 1], [0, 9], [1, 2], [2, 3],
    [2, 11], [3, 4], [3, 5], [4, 5],
    [4, 12], [5, 6], [5, 7], [6, 8],
    [6, 13], [7, 8], [8, 15],
    [9, 10], [9, 16], [10, 11],
    [10, 17], [11, 12], [11, 18],
    [12, 13], [12, 19], [13, 14],
    [14, 15], [14, 20], [15, 21],
    [16, 17], [17, 18], [18, 19],
    [19, 20], [20, 21],
  ];

  return (
    <div
      className="academic-particle-background"
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1280 760"
        preserveAspectRatio="xMidYMid slice"
        className="academic-particle-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id={gradientId}>
            <stop
              offset="0%"
              stopColor="#b9f3d2"
              stopOpacity="0.65"
            />
            <stop
              offset="100%"
              stopColor="#b9f3d2"
              stopOpacity="0"
            />
          </radialGradient>
        </defs>

        <circle
          cx="980"
          cy="260"
          r="310"
          fill={`url(#${gradientId})`}
        />

        <g className="academic-particle-network">
          {connections.map(([from, to], index) => {
            const a = nodes[from];
            const b = nodes[to];

            return (
              <line
                key={`line-${index}`}
                x1={a[0]}
                y1={a[1]}
                x2={b[0]}
                y2={b[1]}
                stroke="#36b78a"
                strokeWidth="1.2"
                strokeOpacity="0.35"
              />
            );
          })}

          {nodes.map(([x, y, radius], index) => (
            <circle
              key={`node-${index}`}
              cx={x}
              cy={y}
              r={radius}
              fill={
                index % 3 === 0
                  ? '#008e65'
                  : '#48c995'
              }
              className="academic-particle-node"
              style={{
                animationDelay: `${-index * 0.35}s`,
              }}
            />
          ))}
        </g>

        <g className="academic-particle-floating">
          <circle cx="170" cy="210" r="3" fill="#42c995" />
          <circle cx="590" cy="90" r="4" fill="#17b67d" />
          <circle cx="940" cy="320" r="3" fill="#60d5a5" />
          <circle cx="390" cy="550" r="4" fill="#18a775" />
          <circle cx="1100" cy="550" r="3" fill="#42c995" />
        </g>
      </svg>

      <style jsx>{`
        .academic-particle-background {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100dvh;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
          user-select: none;
        }

        .academic-particle-svg {
          display: block;
          width: 100%;
          height: 100%;
        }

        .academic-particle-network {
          transform-origin: center;
          animation: networkFloat 14s ease-in-out infinite;
        }

        .academic-particle-floating {
          animation: floatingDots 10s ease-in-out infinite;
        }

        .academic-particle-node {
          transform-box: fill-box;
          transform-origin: center;
          animation: particlePulse 4s ease-in-out infinite;
        }

        @keyframes networkFloat {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(-10px, 9px);
          }
        }

        @keyframes floatingDots {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(12px, -15px);
          }
        }

        @keyframes particlePulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }

          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }

        @media (max-width: 650px) {
          .academic-particle-background {
            opacity: 0.25 !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .academic-particle-network,
          .academic-particle-floating,
          .academic-particle-node {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
