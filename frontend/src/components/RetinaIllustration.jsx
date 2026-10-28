import { useId } from "react";

// Each lesion is [x, y, radius] on a 200 x 200 drawing
const MICROANEURYSMS = [[82, 118, 2], [92, 128, 2], [75, 105, 2], [98, 68, 2]];
const HEMORRHAGES_MODERATE = [[70, 88, 4], [88, 140, 4], [108, 102, 3.5]];
const EXUDATES = [[70, 125, 3], [105, 75, 2.5], [62, 100, 3]];
const HEMORRHAGES_SEVERE = [
  [55, 70, 4.5], [60, 140, 4.5], [110, 45, 4],
  [115, 150, 4], [85, 60, 3.5], [100, 118, 4],
];
const COTTON_WOOL = [[55, 112, 7, 4], [95, 90, 6, 3.5], [112, 130, 6, 3.5]];
const BEADS = [[115, 78], [93, 65], [68, 56], [115, 113], [94, 128]];
const NEW_VESSELS = [
  "M135 82 C145 65, 158 62, 160 48",
  "M138 84 C150 78, 165 80, 172 70",
  "M132 108 C142 122, 155 125, 160 140",
  "M140 95 C155 92, 165 100, 170 110",
];

// severity: 0 = healthy ... 4 = proliferative
function RetinaIllustration({ heatmap = false, severity = 2, className = "" }) {
  const uid = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Illustration of a retinal photograph"
    >
      <defs>
        <radialGradient id={`${uid}-bg`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="60%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#7c2d12" />
        </radialGradient>
        <radialGradient id={`${uid}-heat`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.85" />
          <stop offset="55%" stopColor="#facc15" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
        </radialGradient>
        <clipPath id={`${uid}-clip`}>
          <circle cx="100" cy="100" r="96" />
        </clipPath>
      </defs>

      <g clipPath={`url(#${uid}-clip)`}>
        <circle cx="100" cy="100" r="96" fill={`url(#${uid}-bg)`} />

        {/* macula (center of sharp vision) */}
        <circle cx="85" cy="100" r="11" fill="#9a3412" opacity="0.45" />
        <circle cx="85" cy="100" r="3" fill="#7c2d12" opacity="0.6" />

        {/* blood vessels */}
        <g stroke="#7f1d1d" strokeWidth="2.5" fill="none" strokeLinecap="round">
          <path d="M135 95 C110 70, 80 55, 40 50" />
          <path d="M135 95 C115 85, 85 80, 50 85" />
          <path d="M135 95 C110 120, 80 140, 45 150" />
          <path d="M135 95 C120 110, 95 115, 60 118" />
          <path d="M135 95 C125 60, 120 40, 110 22" />
          <path d="M135 95 C125 130, 120 155, 112 178" />
        </g>

        {/* optic disc */}
        <circle cx="135" cy="95" r="14" fill="#fde68a" opacity="0.9" />

        {/* level 1+: microaneurysms (tiny red dots) */}
        {severity >= 1 && (
          <g fill="#450a0a">
            {MICROANEURYSMS.map(([x, y, r], i) => (
              <circle key={`m${i}`} cx={x} cy={y} r={r} />
            ))}
          </g>
        )}

        {/* level 2+: hemorrhages and exudates */}
        {severity >= 2 && (
          <>
            <g fill="#450a0a">
              {HEMORRHAGES_MODERATE.map(([x, y, r], i) => (
                <circle key={`h${i}`} cx={x} cy={y} r={r} />
              ))}
            </g>
            <g fill="#fef08a">
              {EXUDATES.map(([x, y, r], i) => (
                <circle key={`e${i}`} cx={x} cy={y} r={r} />
              ))}
            </g>
          </>
        )}

        {/* level 3+: many hemorrhages, cotton wool spots, beaded veins */}
        {severity >= 3 && (
          <>
            <g fill="#450a0a">
              {HEMORRHAGES_SEVERE.map(([x, y, r], i) => (
                <circle key={`s${i}`} cx={x} cy={y} r={r} />
              ))}
              {BEADS.map(([x, y], i) => (
                <circle key={`b${i}`} cx={x} cy={y} r="3" fill="#7f1d1d" />
              ))}
            </g>
            <g fill="#fff7ed" opacity="0.85">
              {COTTON_WOOL.map(([x, y, rx, ry], i) => (
                <ellipse key={`c${i}`} cx={x} cy={y} rx={rx} ry={ry} />
              ))}
            </g>
          </>
        )}

        {/* level 4: new abnormal vessels and a large bleed */}
        {severity >= 4 && (
          <>
            <g stroke="#7f1d1d" strokeWidth="1.3" fill="none" strokeLinecap="round">
              {NEW_VESSELS.map((d, i) => (
                <path key={`n${i}`} d={d} />
              ))}
            </g>
            <ellipse cx="85" cy="135" rx="14" ry="7" fill="#450a0a" opacity="0.85" />
          </>
        )}

        {/* heatmap overlay */}
        {heatmap && (
          <>
            <circle cx="82" cy="118" r="42" fill={`url(#${uid}-heat)`} />
            <circle cx="100" cy="72" r="30" fill={`url(#${uid}-heat)`} />
          </>
        )}
      </g>

      <circle cx="100" cy="100" r="96" fill="none" stroke="#0f172a" strokeWidth="4" />
    </svg>
  );
}

export default RetinaIllustration;