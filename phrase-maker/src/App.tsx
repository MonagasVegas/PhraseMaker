import { Routes, Route, HashRouter } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import CreateSentences from "./components/Phrases/CreateSentences";
import { ChakraProvider, Box } from "@chakra-ui/react";
import ContactUs from './components/ContactUs'

function App() {
  return (
    <>
      <HashRouter>
        <ChakraProvider>
          <Box bg="#2A303C" minHeight="100vh">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<CreateSentences />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="*" element={<p>Not Found</p>} />
            </Routes>
          </Box>
        </ChakraProvider>
      </HashRouter>
    </>
  );
}

export default App;
