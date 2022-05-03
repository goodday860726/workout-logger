import Program from './component/Program';
import { useState } from 'react';
import { programData } from './data/programData';

function App() {
  const [selectedProgram, setSelectedProgram] = useState();
  const selectProgram = (event) => {
    setSelectedProgram(event.currentTarget.id);
  };
  const setProgram = (event) => {
    if (!selectedProgram) return;
    alert(selectedProgram);
  };
  return (
    <div className='h-auto min-h-screen w-screen bg-black'>
      <div className='mb-8 p-5 h-auto flex flex-col items-center'>
        {programData.map((data, key) => {
          return (
            <div
              key={key.toString()}
              id={key}
              onClick={selectProgram}
              className={
                ' bg-gray-800 text-slate-300 rounded-xl px-3 py-1 mb-3 w-full hover:bg-gray-400' +
                (key.toString() === selectedProgram
                  ? ' border-l-8 border-l-red-600'
                  : '')
              }
            >
              <Program data={data} />
            </div>
          );
        })}
        <button
          disabled={!selectedProgram}
          onClick={setProgram}
          className='bg-red-900 text-white sticky bottom-14 rounded-3xl px-4 py-2 w-2/3'
        >
          start workout
        </button>
      </div>
    </div>
  );
}

export default App;
