"use client";
import { IResults } from "../../page";
import * as S from "./Results.styles";

export const Results = ({
  handleReset,
  results,
}: {
  handleReset: () => void;
  results: IResults;
}) => {
  if (!results) return null;
  return (
    <S.ResultsSection>
      <S.ResultsHeader>
        <S.ResultsTitle>
          <i className="fas fa-vial" />
          <span>Your Recommended Dosage</span>
        </S.ResultsTitle>
        <S.ResetButton onClick={handleReset}>
          <i className="fas fa-redo" />
          <span> Reset</span>
        </S.ResetButton>
      </S.ResultsHeader>
      <S.ResultsGrid>
        <S.ResultCard bgColor="#6b21a8">
          <S.CardIcon bgColor="#7e22ce">
            <i className="fas fa-weight" />
          </S.CardIcon>
          <S.ResultLabel>Recommended dosage</S.ResultLabel>
          <S.ResultValue>{results.dosage}</S.ResultValue>
          <S.ResultDesc>{results.dosageDescription}</S.ResultDesc>
        </S.ResultCard>
        <S.ResultCard bgColor="#1e3a8a">
          <S.CardIcon bgColor="#2563eb">
            <i className="fas fa-clock" />
          </S.CardIcon>
          <S.ResultLabel>Expected duration</S.ResultLabel>
          <S.ResultValue>{results.duration}</S.ResultValue>
          <S.ResultDesc>{results.durationDesc}</S.ResultDesc>
        </S.ResultCard>
        <S.ResultCard bgColor="#9d174d">
          <S.CardIcon bgColor="#ec4899">
            <i className="fas fa-star" />
          </S.CardIcon>
          <S.ResultLabel>Expected effects</S.ResultLabel>
          <S.ResultValue>{results.effects}</S.ResultValue>
          <S.ResultDesc>{results.effectsDesc}</S.ResultDesc>
        </S.ResultCard>
      </S.ResultsGrid>
      <S.SafetyCard>
        <S.SafetyHeader>
          <i className="fas fa-shield-alt" />
          <span>Safety Considerations</span>
        </S.SafetyHeader>
        <ul>
          <li>Always test a small amount first to check for sensitivity</li>
          <li>Have a sober trip sitter if you're inexperienced</li>
          <li>Set and setting are crucial for a positive experience</li>
          <li>Wait at least 2 weeks between experiences for tolerance reset</li>
          <li>Stay hydrated and have comfortable surroundings</li>
        </ul>
      </S.SafetyCard>
    </S.ResultsSection>
  );
};
export default Results;
