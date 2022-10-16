import { useEffect, useState } from "react";
import "./App.css";
import { catFactRequest, userRequest } from "./service/requests";

function App() {
  const [fact, setFact] = useState(null);
  const [arrayData, setArrayData] = useState([]);
  useEffect(() => {
    getFact();
    getAge1();
  }, []);

  const getFact = () => {
    catFactRequest.getFact("E").then((res) => {
      setFact(res.data.fact);
    });
  };

  const getAge1 = () => {
    userRequest.getAge("pedro").then((res) => {
      console.log(res.data);
    });
  };

  // ADD TO ARRAY
  const addDataToArray = () => {
    const arr = {
      id: arrayData.length > 0 ? arrayData.length + 1 : 1,
      name: "Sample Text",
      completed: false,
    };
    setArrayData([...arrayData, arr]);
  };

  // DELETE FROM ARRAY
  const deleteDataFromArray = (id) => {
    setArrayData(arrayData.filter((item) => item.id != id));
  };

  // UPDATE ARRAY ITEM
  const updateDataFromArray = (id) => {
    setArrayData(
      arrayData.map((item) => {
        if (item.id == id) {
          return { ...item, completed: true };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div className="App">
      <div>
        {arrayData?.map((item) => {
          return (
            <div key={item.id}>
              <p>
                {item.id}: {item.name} {item.completed ? 'true' : 'false'}
                <span
                  onClick={() => {
                    deleteDataFromArray(item.id);
                  }}
                >
                  Delete
                </span>
                <span
                  onClick={() => {
                    updateDataFromArray(item.id);
                  }}
                >
                  Completed
                </span>
              </p>
            </div>
          );
        })}
      </div>
      <br />
      <div>
        {/* <button onClick={getFact}>Get Fact</button> */}
        <button
          onClick={() => {
            addDataToArray();
          }}
        >
          Add Array
        </button>
      </div>
    </div>
  );
}

export default App;
