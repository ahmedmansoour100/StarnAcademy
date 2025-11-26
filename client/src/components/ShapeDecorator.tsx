/**
 * Decorative Shape Components - Shape Language System
 * Based on Starn Academy Design System
 */

export function RoundedSquare({ className = "", color = "#1ABC9C" }) {
  return (
    <div
      className={`rounded-lg ${className}`}
      style={{ backgroundColor: color }}
      data-testid="shape-rounded-square"
    />
  );
}

export function Circle({ className = "", color = "#3498DB" }) {
  return (
    <div
      className={`rounded-full ${className}`}
      style={{ backgroundColor: color }}
      data-testid="shape-circle"
    />
  );
}

export function HalfCircle({ className = "", color = "#FF6B6B" }) {
  return (
    <div
      className={`${className}`}
      style={{
        backgroundColor: color,
        borderRadius: "50% 50% 0 0",
      }}
      data-testid="shape-half-circle"
    />
  );
}

export function Star({ className = "", color = "#9B59B6" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="shape-star"
    >
      <circle cx="50" cy="50" r="40" fill={color} />
      <circle cx="35" cy="35" r="12" fill="white" />
      <circle cx="65" cy="35" r="12" fill="white" />
      <circle cx="50" cy="70" r="12" fill="white" />
      <circle cx="28" cy="60" r="10" fill="white" />
      <circle cx="72" cy="60" r="10" fill="white" />
    </svg>
  );
}

export function DecorativeShapes() {
  return (
    <div className="relative w-full h-full">
      {/* Top left rounded square */}
      <div className="absolute top-12 left-8 w-16 h-16">
        <RoundedSquare color="#1ABC9C" className="w-full h-full" />
      </div>

      {/* Small blue circle */}
      <div className="absolute top-1/4 right-20 w-8 h-8">
        <Circle color="#3498DB" className="w-full h-full" />
      </div>

      {/* Right side half circle */}
      <div className="absolute bottom-20 right-16 w-24 h-12">
        <HalfCircle color="#FF6B6B" className="w-full h-full" />
      </div>

      {/* Purple star */}
      <div className="absolute top-1/3 right-1/3 w-20 h-20">
        <Star color="#9B59B6" className="w-full h-full" />
      </div>

      {/* Bottom left elements */}
      <div className="absolute bottom-12 left-1/4 w-12 h-12">
        <Circle color="#00D4FF" className="w-full h-full opacity-70" />
      </div>
    </div>
  );
}

export function ShapePattern() {
  return (
    <div className="relative w-full overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Decorative elements background */}
        <rect x="100" y="100" width="80" height="80" rx="16" fill="#1ABC9C" opacity="0.15" />
        <circle cx="300" cy="150" r="40" fill="#3498DB" opacity="0.1" />
        <path d="M 500 100 L 540 150 L 500 200 L 460 150 Z" fill="#FCD34D" opacity="0.1" />
        <circle cx="700" cy="200" r="60" fill="#9B59B6" opacity="0.08" />
        <path
          d="M 900 80 Q 920 100 900 120 Q 880 100 900 80"
          fill="#FF6B6B"
          opacity="0.12"
        />

        {/* Code-like symbols */}
        <text
          x="150"
          y="450"
          fontSize="48"
          fontWeight="bold"
          fill="#0052CC"
          opacity="0.05"
        >
          &lt;/&gt;
        </text>
        <text x="1000" y="500" fontSize="40" fill="#00D4FF" opacity="0.07">
          { "{" }
        </text>
      </svg>
    </div>
  );
}
