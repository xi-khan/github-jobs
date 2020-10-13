import React from 'react';
import useFetchJobs from './useFetchjobs';
import { Container } from 'react-bootstrap';

const App = () => {
  const { jobs, loading, error } = useFetchJobs();

  return (
    <Container>
      {loading && <h1>loading...</h1>}
      {error && <h1>Error. Try Refreshing.</h1>}
      <h1>{jobs.length}</h1>
    </Container>
  );
}

export default App;
