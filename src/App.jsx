import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTorus] = useState(null);

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const data = await fetch(url);
      const res = await data.json();
      setTorus(res);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const removeTour = (id) => {
    const newTours = tours.filter((item) => item.id !== id);
    setTorus(newTours);
  };

  useEffect(() => {
    fetchTours();
  }, []);
  if (isLoading) {
    return (
      <main>
        <Loader />;
      </main>
    );
  }

  if (tours != null && tours.length < 1) {
    return (
      <main>
        <div className="title">
          <h2>No more tours</h2>
          <div className="title-underline"></div>

          <button
            style={{ marginTop: "2rem" }}
            type="button"
            className="btn"
            onClick={() => fetchTours()}
          >
            Get more tours
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours data={tours} removeTour={removeTour}></Tours>
    </main>
  );
};
export default App;
