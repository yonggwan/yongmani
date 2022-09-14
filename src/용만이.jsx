import { useState, useCallback } from 'react';
import './용만이.css';

function 용만이({
	내가먹음,
}) {
  return (
    <div className={내가먹음 ? '용만이 on' : '용만이'}>
      <img className="용만이사진" src="/용만이.png" />
	  {내가먹음 && <img className="떡사진" src="/떡.png" />}
    </div>
  );
}

export default 용만이;
