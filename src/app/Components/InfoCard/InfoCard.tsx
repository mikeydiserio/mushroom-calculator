import * as S from "./InfoCard.styles";

export interface IInfoCardProps {
  infoTitle?: string;
  infoText?: string;
  infoStats: {
    potency: string;
    doses: string;
    duration: string;
  };
  headerBgColor?: string;
}

export const InfoCardComponent = ({
  infoTitle,
  infoText,
  infoStats,
  headerBgColor,
}: IInfoCardProps) => {
  return (
    <S.InfoCard>
      <S.InfoHeader bgColor={headerBgColor || "#4f46e5"}>
        <i className="fas fa-shroom" />
      </S.InfoHeader>
      <S.InfoTitle>{infoTitle}</S.InfoTitle>
      <S.InfoText>{infoText}</S.InfoText>
      <S.InfoStats>
        <div>
          <span>Potency:</span>
          <span>{infoStats.potency}</span>
        </div>
        <div>
          <span>Doses:</span>
          <span>{infoStats.doses}</span>
        </div>
        <div>
          <span>Duration:</span>
          <span>{infoStats.duration}</span>
        </div>
      </S.InfoStats>
    </S.InfoCard>
  );
};

export default InfoCardComponent;
