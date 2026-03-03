export function CanbizLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Canbiz Consultancy Services"
    >
      {/* Gold accent bar */}
      <rect x="0" y="10" width="4" height="20" className="fill-brand-gold" />
      {/* CANBIZ wordmark */}
      <text
        x="12"
        y="28"
        fontFamily="'Georgia', serif"
        fontSize="20"
        fontWeight="700"
        fill="white"
        letterSpacing="1"
      >
        CANBIZ
      </text>
      {/* Subtitle */}
      <text
        x="12"
        y="38"
        fontFamily="'Arial', sans-serif"
        fontSize="6"
        fontWeight="400"
        className="fill-brand-gold"
        letterSpacing="2"
      >
        CONSULTANCY SERVICES
      </text>
    </svg>
  );
}

export function CanbizLogoDark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Canbiz Consultancy Services"
    >
      {/* Gold accent bar */}
      <rect x="0" y="10" width="4" height="20" className="fill-brand-gold" />
      {/* CANBIZ wordmark */}
      <text
        x="12"
        y="28"
        fontFamily="'Georgia', serif"
        fontSize="20"
        fontWeight="700"
        className="fill-brand-navy"
        letterSpacing="1"
      >
        CANBIZ
      </text>
      {/* Subtitle */}
      <text
        x="12"
        y="38"
        fontFamily="'Arial', sans-serif"
        fontSize="6"
        fontWeight="400"
        className="fill-brand-gold"
        letterSpacing="2"
      >
        CONSULTANCY SERVICES
      </text>
    </svg>
  );
}
