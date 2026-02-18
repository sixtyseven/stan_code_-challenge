import { useEffect, useState } from "react";
import data from "../data/data.json";
import { delay } from "./helpers";
import "./Home.css";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import type { Movie } from "./type/type";

function Home() {
  const [movieData, setMovieData] = useState([] as Movie[]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    delay(1200).then(() => {
      setMovieData(data as Movie[]);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="page-root">
      <Header />

      <main>
        {/* Set isActive to true for demo purpose */}
        <Carousel items={movieData} isLoading={isLoading} isActive={true} />
      </main>
    </div>
  );
}

export default Home;
