import { Users } from "lucide-react";

interface HeaderProps {
  onDiscoverClick: () => void;
}

export default function Header({ onDiscoverClick }: HeaderProps) {
  return (
    <header className="header">
      <div className="container max-w-6xl mx-auto px-5">
        <div className="gdgoc-banner">
          <h3>
            <Users className="w-6 h-6" />
            GDGoC FPTU HCMC Club
          </h3>
          <p>Google Developer Groups on Campus</p>
        </div>
        <h1 className="hero-title">Career Compass</h1>
        <p className="hero-subtitle">
          Discover your ideal career path with AI-powered guidance tailored for FPTU students
        </p>
        <button 
          className="discover-btn" 
          onClick={onDiscoverClick}
          data-testid="button-discover-path"
        >
          <i className="fas fa-compass mr-2"></i>
          Discover Your Path
        </button>
      </div>
    </header>
  );
}
