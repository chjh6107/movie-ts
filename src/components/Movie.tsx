import { Link } from "react-router-dom";

type MovieType = {
  id: number;
  coverImg: string;
  title: string;
  summary: string;
  genres: Array<string>;
};
const Movie = ({ id, coverImg, title, summary, genres }: MovieType) => {
  return (
    <div>
      <img src={coverImg} />
      <h2>
        <Link to={"movie/" + id}>{title}</Link>
      </h2>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul>
        {genres.map((g: any) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
};

export default Movie;
