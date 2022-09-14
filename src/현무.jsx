import './현무.css';

function 현무({
	별명,
}) {
  return (
    <div className="root">
      <p className="nickname">{별명}</p>
      <div className={'현무'}>
        <img className="현무사진" src="/현무.png" />
      </div>
    </div>
  );
}

export default 현무;
