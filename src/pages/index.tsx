import Head from 'next/head'
import React from 'react'
import Image from 'next/image'

export default function Home() {
  const [actualTime, setActualTime] = React.useState(() => new Date())

  const endTime = new Date(2021, 5, 30, 23, 59, 59)

  React.useEffect(() => {
    let myInterval = setInterval(() => {
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
    <div className="text-center m-2 sm:m-5 md:m-10">
      <div className="text-5xl md:text-8xl my-3 font-bold ">{value}</div>
      <div>{type}</div>
    </div>
  )

  return (
    <div
      className="h-screen min-h-full flex col-auto bg-center bg-cover"
      style={{ backgroundImage: `url("/bg.jpeg")` }}
    >
      <Head>
        <title>Freedom is awaiting us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Image
        src="/bg.jpeg"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      /> */}

      <div
        className="w-full m-auto flex items-center flex-col"
        style={{
          zIndex: 1,
        }}
      >
        <iframe
          className="w-[250px] h-[250px]"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/RoVj6zBAkAM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="text-white place-content-center align-middle sm:flex">
          {getDateElement(months, 'Months')}
          {getDateElement(days, 'Days')}
          {getDateElement(hours, 'Hours')}
          {getDateElement(minutes, 'Minutes')}
          {getDateElement(seconds, 'Seconds')}
        </div>
      </div>
    </div>
  )
}
