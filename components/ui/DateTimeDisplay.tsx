import React, { useEffect, useState } from 'react'

const DateTimeDisplay = () => {

const now = new Date();
const [time, setTime] = useState(new Date());

useEffect(() => {
    setInterval(() => setTime(new Date()), 1000)
},[])

const dayFormatter = new Intl.DateTimeFormat('en-US', {
  dateStyle: "short",
  timeZone: 'America/Los_Angeles'
})
const timeFormatter = new Intl.DateTimeFormat('en-US', {
  timeStyle: "medium",
  timeZone: 'America/Los_Angeles'
})

  return (
    <div className='w-full'>
        <p suppressHydrationWarning>{dayFormatter.format(time)} - {time.toLocaleTimeString()}</p>
    </div>
  )
}

export default DateTimeDisplay