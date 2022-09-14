import { useState, useCallback, useEffect } from 'react';
import debounce from 'lodash/debounce';
import Test from './Test';
import './App.css';


/**

1. useCallback에 디바운스fn 연결
useCallback에 deps를 변화


 */
function App() {
	const [name, setName] = useState('아무개');
	const onScrollCallback = (event) => {

	};
	const handleScroll = debounce(onScrollCallback, 100);
	const handleShowName = () => {
		console.log(name);
	};
  return (
    <div className="App" onScroll={handleScroll}>
		<button onClick={handleShowName}>show name</button>
    </div>
  );
}

export default App;
