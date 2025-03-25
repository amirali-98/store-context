import { Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
}
