import { useState } from "react";

function SimpleNameList() {
  const [names, setNames] = useState(["John", "Jane"]);

  return (
    <div>
      <h2>Daftar Nama</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <button
        onClick={() => setNames([...names, "Charlie"])}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Tambah Nama
      </button>
    </div>
  );
}

export default SimpleNameList;
