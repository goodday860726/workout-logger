import { useState } from 'react';

function Program(props) {
  const [selected, setSelected] = useState(false);
  const clickEvent = () => {
    setSelected((prev) => setSelected(!prev));
  };
  return (
    <div
      onClick={clickEvent}
      className={'text-slate-300 rounded-xl px-3 py-1 mb-3 w-full'}
    >
      <div>
        <span className=' underline'>{props.data.title}</span>
      </div>
      {props.data.exercise.map((data, key) => {
        return <div key={key}>{data}</div>;
      })}
    </div>
  );
}

export default Program;
