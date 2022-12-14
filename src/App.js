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

  const 외치기 = (현무이름, 정답) => console.log(`${현무이름}曰: ${정답}`);

  const fn현무의정답 = useCallback(() => {
    외치기('현무', 떡먹은용만이);
  }, [떡먹은용만이]);

  const fn무무의정답 = useCallback(debounce(() => {
    외치기('무무', 떡먹은용만이);
  }, 2000), [떡먹은용만이]);
  
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
          <button onClick={fn현무의정답}>정답 외치기</button>
        </li>
        <li>
          <현무 별명="정답을 너무많이 외쳐서 debounce된 무무" />
          <button onClick={fn무무의정답}>정답 외치기</button>
        </li>
      </ul>

    </div>
  );
}

export default App;
