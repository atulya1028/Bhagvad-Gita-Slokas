import { Link } from "react-router-dom";
import data from "../data/gita.json";

const ChapterList = () => {
  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-bold text-center">अध्याय सूची</h2>
      <ul className="space-y-3">
        {data.chapters.map((chapter) => (
          <li key={chapter.id}>
            <Link
              to={`/chapter/${chapter.id}`}
              className="block p-4 text-lg font-semibold text-black transition bg-orange-200 rounded-lg hover:bg-orange-300"
            >
              {chapter.id}. {chapter.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChapterList;
