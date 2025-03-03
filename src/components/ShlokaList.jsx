import { useParams } from "react-router-dom";
import data from "../data/gita.json";

const ShlokaList = () => {
  const { chapterId } = useParams();
  const chapter = data.chapters.find((ch) => ch.id === parseInt(chapterId));

  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-bold text-center">{chapter.name}</h2>
      <ul className="space-y-3">
        {chapter.slokas.map((sloka) => (
          <li key={sloka.id} className="p-3 bg-orange-200 rounded-lg">
            <p className="text-lg font-semibold text-center">
              {sloka.sanskrit.split("\n").map((line, index) => (
                <span key={index} className="block">{line}</span>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShlokaList;
