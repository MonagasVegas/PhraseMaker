import { Routes, Route, HashRouter } from "react-router-dom";
import "./index.css"
import Home from './components/Home'
import CreateSentences from './components/Phrases/CreateSentences'

function App() {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create"  element={<CreateSentences />} />
        <Route path='*' element={<p>Not Found</p>} />
      </Routes>
    </HashRouter>
    </>
  )
}

export default App
