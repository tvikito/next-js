import Head from 'next/head'
import React from 'react'
import Image from 'next/image'

export default function Home() {
  const [actualTime, setActualTime] = React.useState(() => new Date())

  const endTime = new Date(2021, 5, 30, 23, 59, 59)

  React.useEffect(() => {
    let myInterval = setInterval(() => {
      console.log('setting time')

      setActualTime(new Date())
    }, 1000)

    return () => clearInterval(myInterval)
  })

  const { months, days, hours, minutes, seconds } = {
    months: endTime.getMonth() - actualTime.getMonth(),
    days: ('0' + (endTime.getDate() - actualTime.getDate())).slice(-2),
    hours: ('0' + (endTime.getHours() - actualTime.getHours())).slice(-2),
    minutes: ('0' + (endTime.getMinutes() - actualTime.getMinutes())).slice(-2),
    seconds: ('0' + (endTime.getSeconds() - actualTime.getSeconds())).slice(-2),
  }

  const getDateElement = (value: number | string, type: string) => (
    <div className="text-center m-10">
      <div className="text-8xl my-3 font-bold">{value}</div>
      <div>{type}</div>
    </div>
  )

  return (
    <div className="h-screen flex col-auto">
      <Head>
        <title>Hej bruhuu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="/bg.jpeg"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />

      <div
        className="flex w-full m-auto text-white place-content-center align-middle"
        style={{
          zIndex: 1,
        }}
      >
        {getDateElement(months, 'Months')}
        {getDateElement(days, 'Days')}
        {getDateElement(hours, 'Hours')}
        {getDateElement(minutes, 'Minutes')}
        {getDateElement(seconds, 'Seconds')}
      </div>
    </div>
  )
}
