import { lazy } from 'react';
import Layout from './Components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

function App() {
  return (
    <Layout>
      <Routes>
        <Route index path="/" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
