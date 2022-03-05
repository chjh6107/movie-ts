import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

const Detail = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies(json);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return <div>{loading ? <Loading/> : <div>Detail</div>}</div>;
};

export default Detail;
