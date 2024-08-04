import { Badge } from "./ui/badge";

interface CriticScoreProp {
  score: number;
}

const CriticScore = ({ score }: CriticScoreProp) => {
  let scoreColor =
    score > 75
      ? "bg-green-400 text-green-100"
      : score > 60
      ? "bg-yellow-500 text-yellow-200"
      : "";

  return (
    <>
      <Badge variant="outline" className={`${scoreColor}`}>
        {score}
      </Badge>
    </>
  );
};

export default CriticScore;
