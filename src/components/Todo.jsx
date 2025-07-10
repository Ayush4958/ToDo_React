
import { Plus, Play, Pause, Square, Trash2, CheckCircle, Circle, Clock } from 'lucide-react';
import { useState, useEffect } from 'react'
import './todo.css'

function Todo( props ) {

  const [sec, setsec] = useState(0);
  const [isrunning, setisrunning] = useState(false);
  const [done ,setdone] = useState(false);

  useEffect(() => {
    let timer;
    if (isrunning) {
      timer = setInterval(() => setsec((v) => v + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isrunning]);


  const formattime = (secs) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const reset = () => {
    setisrunning(false);
    setsec(0);
  }


  return (
    <div>
      <div className="todo">
        <div className="task-title">
        <button className='check-btn' onClick={() => setdone(!done)}>{done ? <CheckCircle /> : <Circle />}</button>
        <p className='task-name'>{done ? <s>{props.task}</s> : <>{props.task}</>}</p>
        </div>
        <div className='timer'>
        <h2 className='time'>{!done ? formattime(sec):"00:00"}</h2>
        <div className='buttons'>
          <button
        className='play-btn'
        onClick={() => setisrunning(!isrunning)}
        disabled={done}>
        {isrunning && !done ? <Pause /> : <Play />}
      </button>
          <button className='play-btn' onClick={reset}>{<Square />}</button>
          <button className='play-btn' onClick={() => props.onDelete()}><Trash2 /></button>
        </div>
        </div>
        </div>
      </div>
  )
}

export default Todo;
