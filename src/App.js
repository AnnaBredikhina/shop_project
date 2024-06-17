import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";

import { ContextProvider } from "./context";

function App() {
  return (
    <>
      <Header />
      <ContextProvider>
        <Main />
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;
