import { useState } from "react";
import CloseIcon from "../assets/images/close-icon.svg"
import ArrowRight from "../assets/images/arrow-right-24.png"

export default function InkoutBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className=" top-0 py-[15px] px-[80px] flex items-center max-h-[48px]"
      style={{ background: 'linear-gradient(90deg, #B2F6F5 0%, #DAFBFA 68.27%, #B2F6F5 100%)' }}>
      <a href="#" className="flex items-center gap-[9px]">
        Book a No-Cost Consultation Now
        <img src={ArrowRight.src} alt="arrow right" className="inline" />
      </a>

      <span className=" ml-[13px]">
        No-cost consultation ($99 value). Credit card required ($50 no-show fee applies). Begin your inkOUT journey.
      </span>

      <button
        type="button"
        className="ml-auto cursor-pointer"
        onClick={() => setVisible(false)}
        aria-label="Close banner"
      > 
        <img src={CloseIcon.src} alt="close section" className="inline" />
      </button>
    </div>
  );
}
