import React, { useEffect, useState } from "react";

const Example = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const fetchData = [
        { id: 1, name: "John Doe", age: 30 },
        { id: 2, name: "Jane Smith", age: 25 },
        { id: 3, name: "Sam Wilson", age: 35 },
      ];
      setData(fetchData);
    }, 2000);
  }, []);
  return (
    <>
      <h2>Dynamic Data Display</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
            {data.map((val) => (
                <tr key={val.id}>
                    <td>{val.name}</td>
                    <td>{val.age}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Example;
