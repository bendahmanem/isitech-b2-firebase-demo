import { useState } from 'react'
import { collection, addDoc } from "firebase/firestore"; 
import './App.css'
import Header from './components/Header'
import { database } from './firebase/config';

function App() {
  const [count, setCount] = useState(0)
  const [refId, setRefId] = useState('pas de ref!')

  const createDocument = async (collectionName, documentData) => {
    try {
      const docRef = await addDoc(collection(database, collectionName), documentData);
      console.log("Document Ref written:", docRef)
      console.log("Document written with ID: ", docRef.id);
      setRefId(docRef.id)
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div className="App">
      test
      <Header title={'Mon titre'} />
      <div className="card">
        <button onClick={() => createDocument('Students', {firstname: 'Khadim', lastname:'CISSE'})}>
          {refId}
        </button>
        </div>
    </div>
  )
}

export default App
