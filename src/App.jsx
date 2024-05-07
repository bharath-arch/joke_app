import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./component/Spinner";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://official-joke-api.appspot.com/random_joke"
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <section className="w-screen h-screen flex justify-center items-center ">
      <div className="md:w-[30rem]  border rounded-md bg-gray-50 shadow-lg w-[20rem] h-auto">
        <div className="text-base p-5 flex flex-col">
          <div className="mb-5">
            <h2 className="text-xl">
              Click <span className="font-bold">Generate Joke</span> to generate
              joke
            </h2>
          </div>
          {data ? ( <div>
            {loading ? (
              (<p className="p-2">Joke is generating...</p>)
            ) : (
              <div>
                {" "}
                {data && (
                  <div>
                    <span>Joke Setup : </span>
                    <span>{data.setup}</span> <br />
                    <span>Joke Punchline : </span>
                    <span>{data.punchline}</span>
                  </div>
                )}
              </div>
            )}
          </div>):(<span>For joke generation Click the button below</span>)}

         

          <button
            className="mt-3 flex items-start justify-center bg-black text-white w-32 rounded-lg h-auto md:p-3 p-2"
            onClick={handleClick}
          >
            {loading ? <Spinner /> : "Generate Joke"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
