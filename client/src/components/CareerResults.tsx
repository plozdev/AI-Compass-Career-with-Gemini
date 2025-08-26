import { Lightbulb } from "lucide-react";
import type { CareerAdvice } from "@shared/schema";

interface CareerResultsProps {
  advice: CareerAdvice | null;
  isLoading: boolean;
  onAnalyzeMarket: () => void;
}

export default function CareerResults({ advice, isLoading, onAnalyzeMarket }: CareerResultsProps) {
  if (!isLoading && !advice) return null;

  return (
    <section id="career-results" className="results-section visible">
      <div className="career-result">
        <div className="result-header">
          <div className="result-icon">
            <Lightbulb className="w-6 h-6" />
          </div>
          <h3 className="result-title">Your Ideal Career Path</h3>
        </div>
        <div className="result-content" data-testid="career-advice-content">
          {isLoading ? (
            <div className="loading">
              <div className="spinner"></div>
              <p>AI is analyzing your profile...</p>
            </div>
          ) : advice ? (
            <div data-testid="career-advice-text">
              <h4>🎯 Recommended Career: {advice.careerPath}</h4>
              <p><strong>Why this path suits you:</strong></p>
              <ul>
                {advice.reasons.map((reason, index) => (
                  <li key={index}>{reason}</li>
                ))}
              </ul>
              <h4>🚀 Suggested Personal Project</h4>
              <p>{advice.suggestedProject}</p>
            </div>
          ) : null}
        </div>
        {advice && !isLoading && (
          <button 
            className="analyze-btn" 
            onClick={onAnalyzeMarket}
            data-testid="button-analyze-market"
          >
            <i className="fas fa-chart-line mr-2"></i>
            Analyze Job Market
          </button>
        )}
      </div>
    </section>
  );
}
