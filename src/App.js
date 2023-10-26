import { useState } from 'react';
import './App.css';
import axios from 'axios';
import AuthPage from './pages/AuthPage/AuthPage';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await axios.get(
        'http://127.0.0.1:8000/users/',
        {
          auth: {
            username: 'admin',
            password: '1234'
          }
        }
      );
      setData(result.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching data: ', error);
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="App">
        <button onClick={fetchData}>Fetch Data</button>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </div>
      <AuthPage />
    </>
  );
}

export default App;
