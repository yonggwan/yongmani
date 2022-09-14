/* eslint-disable */
import { useState, useCallback, useEffect } from 'react';
import debounce from 'lodash/debounce';
import 용만이 from './용만이';
import 현무 from './현무';
import './App.css';

function App() {
  const [떡먹은용만이, set떡먹은용만이] = useState('용만이1');
  
  const handler = useCallback(debounce((ev) => {
    console.log('떡먹은용만이: ', 떡먹은용만이);
  }, 100), []);

  const 외치기 = 용만이이름 => console.log(용만이이름);
  
  useEffect(() => {
    // const timer = setInterval(onIncrese, 1000);
    // return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      
      <h1>떡먹은용만이 = {떡먹은용만이 || '없음'}</h1>
      
      <ul style={{ display: 'flex', textAlign: 'center' }}>
        {['용만이1', '용만이2', '용만이3'].map(용만이이름 => (
          <li key={용만이이름}>
            <button onClick={() => set떡먹은용만이(용만이이름)}>{용만이이름} 떡주기</button>
            <용만이 내가먹음={떡먹은용만이 === 용만이이름} />
          </li>
        ))}
      </ul>

      <ul style={{ display: 'flex', textAlign: 'center', margin: '100px auto auto' }}>
        <li>
          <현무 별명="현무" />
          <button onClick={() => 외치기(떡먹은용만이)}>정답 외치기</button>
        </li>
        <li>
          <현무 별명="debounce현무" />
          <button onClick={() => 외치기(떡먹은용만이, 1000)}>정답 외치기</button>
        </li>
      </ul>

    </div>
  );
}

export default App;
