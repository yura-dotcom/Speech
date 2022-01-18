import React, { useCallback, useState, useEffect } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import { useStopwatch } from 'react-timer-hook';
import './App.css';

export default function App() {
  const [timers, setTimers] = useState([
    {time: 2, text:'hello'},
    {time: 4, text:'this is my massage'},
    {time: 8, text:'what\'s up'},
  ]);
  const [rate, setRate] = useState(1.0);
  const [pitch, setPitch] = useState( 1.0);
  const [voiceIndex, setVoiceIndex] = useState(null);
  const {seconds, isRunning, start, reset } = useStopwatch({});
  const {speak, speaking, supported, voices, } = useSpeechSynthesis();
  
  const voice = voices[voiceIndex] || null;

  const doReset = useCallback(() => reset(0, false), []);
  // const doSpeak = useCallback((...p) => speak(...p), []);

  useEffect(() => {
    const foundTimer = timers.find(timer => timer.time === seconds);
    if(foundTimer) speak({ text: foundTimer.text, voice, rate, pitch})

    if(seconds > timers[timers.length - 1].time) doReset();
  }, [seconds]);

  function updateTimers(index, time, text) {
    const newTimers = [...timers];
    newTimers[index].time = time;
    newTimers[index].text = text;

    setTimers(newTimers);
  }

  function addTimer() {
    const newTimers = [...timers, { time: 100, text: 'yo'}];
    setTimers(newTimers);
  }

  if(!supported) return <div>Your browser not supported speech yet</div>

  return (
    <div className="app">
      <h2>Talk the Talk</h2>

      <form>
        <label htmlFor='voice'>Voice</label>
        <select 
          id='voice'
          name='voice'
          value={voiceIndex || ''}
          onChange={(e) => setVoiceIndex(e.target.value)}
        >
          <option value=''>Default</option>
          {voices.map((option, index) => (
            <option key={index} value={index}>
              {`${option.lang} - ${option.name}`}
            </option>
          ))}
        </select>
      </form>

      <div className="timers">
        {/* timers go here */}
        {timers.map((timer, index) => (
          <TimeSlot 
            key={index} 
            index={index} 
            timer={timer} 
            updateTimers={updateTimers}
          />
        ))}

        <button className="add-button" onClick={addTimer}>Add</button>
      </div>

      {/* seconds */}
      <h2>{seconds}</h2>

      {/* buttons */}
      <div className="buttons">
        {!isRunning && <button className="start-button" onClick={start}>Start</button>}
        {isRunning && <button className="stop-button" onClick={doReset}>Stop</button>}
      </div>
      <form className='ranges'>
        <label htmlFor='rate'>rate</label>
        <input 
          type='range' 
          name='rate' 
          min="0.1" 
          max="2" 
          value={rate} 
          step="0.1" 
          onChange={(e) => setRate(e.target.value)}
        />
        <label htmlFor='pitch'>pitch</label>
        <input 
          type='range' 
          name='pitch' 
          min="0.1" 
          max="2" 
          value={pitch} 
          step="0.1" 
          onChange={(e) => setPitch(e.target.value)}
        />
      </form>
    </div>
  );
}

function TimeSlot({index, timer, updateTimers}) {
  const [time, setTime] = useState(timer.time);
  const [text, setText] = useState(timer.text);

  function 
  handleBlur() {
    updateTimers(index, time, text);
  }

  return (
    <form className="timer" key={index}>
      <input type="number" 
        value={time} 
        onChange={ (e) => setTime(e.target.value)}
        onBlur={handleBlur}
      />
      <input type="text" 
        value={text} 
        onChange={ (e) => setText(e.target.value)}
        onBlur={handleBlur}
      />
    </form>
  )
}