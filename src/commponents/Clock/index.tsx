import { useEffect, useState } from 'react';

import './clock.scss'

const Clock = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 370)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="Clock">
      <div className="Clock__time">{time}</div>
    </div>
  )
}

export default Clock;