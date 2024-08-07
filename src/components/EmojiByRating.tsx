import Mesh from "../assets/mesh.webp";
import Thumbsup from "../assets/thumbsup.png";
import Bullseye from "../assets/bullseye.png";

interface Props {
  rating: number;
}

interface EmojiByRating {
  [key: number]: { src: string; alt: string };
}
const EmojiByRating = ({ rating }: Props) => {
  if (rating < 3) return;

  const emojiByRating: EmojiByRating = {
    3: { src: Mesh, alt: "Mesh" },
    4: { src: Bullseye, alt: "Bullseye" },
    5: { src: Thumbsup, alt: "Thumbsup" },
  };

  return (
    <div>
      <img {...emojiByRating[rating]} className="size-8" />
    </div>
  );
};

export default EmojiByRating;
