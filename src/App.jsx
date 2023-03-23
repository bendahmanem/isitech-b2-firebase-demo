import { useState, useContext } from "react";
import { collection, addDoc } from "firebase/firestore";
import "./App.css";
import Header from "./components/Header";
import { database } from "./firebase/config";
import { CartContext } from "./context/CartContext";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [refId, setRefId] = useState("pas de ref!");
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  // utilisation du hook usecontext pour recuperer la valeur du 
  // context partage par le composant CartContextProvider.js
  const myCartContext = useContext(CartContext);

  useEffect(() => {
     console.log(myCartContext)
  }, [])

  const createDocument = async (collectionName, documentData) => {
    try {
      const docRef = await addDoc(
        collection(database, collectionName),
        documentData
      );
      console.log("Document Ref written:", docRef);
      console.log("Document written with ID: ", docRef.id);
      setRefId(docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
  }

  return (
    <div className="App">
      <Header title={"Mon titre"} />
      <div className="flex justify-center">
      <div className="w-full max-w-xs m-0 ">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstname"
            >
              Firstname
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstname"
              type="text"
              placeholder="firstname"
              value={firstname}
              onChange={(inputElement)=>{ setFirstname(inputElement.target.value) }}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastname"
            >
              lastname
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="lastname"
              type="text"
              placeholder="lastname"
              value={lastname}
              onChange={(inputElement)=>{setLastname(inputElement.target.value)}}
            />
            <p className="text-red-500 text-xs italic">Please choose a password.</p>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Create
            </button>
          </div>
        </form>
      </div>
      </div>

    </div>
  );
}

export default App;
