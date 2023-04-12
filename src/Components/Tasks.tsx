import axios from 'axios';
import { useEffect, useState } from 'react';

export function Tasks() {
  const [testCase, setTestCase] = useState('');

  function loadTasks() {
    axios({ method: 'get', url: '/api/task' }).then((response) => {
      setTestCase(response.data[0].name);
    });
  }

  useEffect(() => {
    loadTasks();
  }, []);

  if (testCase === '') {
    return <p>No data</p>;
  } else {
    return <>{<p>{testCase}</p>} </>;
  }
}
