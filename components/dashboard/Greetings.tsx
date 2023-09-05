import { useState, useEffect, PropsWithoutRef} from 'react'

type GetGreetingsProps = {
  className?: string;
  user?: string;
}

const GetGreetings = ({ className, user }: GetGreetingsProps) => {
 const [greeting, setGreeting] = useState<string>('')

 const date: Date = new Date()
 const hour: number = date.getHours()

 useEffect(() => {

    if (hour >= 5 && hour < 12) {
        setGreeting('Good Morning')
      } else if (hour >= 12 && hour < 18) {
        setGreeting('Good afternoon')
      } else {
        setGreeting('Good evening')
      }
 })

  return (
       <div className={className}>
         {`${greeting}${user && `, ${user}`}`}
        </div>
  )
}

export default GetGreetings