'use client'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
interface Props {
   percentage: number,
   status: 'pending' | 'interview' | 'declined',
   className?: string
}

const ProgressRing = ({ percentage, className, status }: Props) => {
 
  return (
   <div className={`w-16 h-16 ${className}`}>
      <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      styles={{
         // Customize the root svg element
         root: {},
         // Customize the path, i.e. the "completed progress"
         path: {
           // Path color
           stroke: `rgba(121, 63, 223)`,
           // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
           strokeLinecap: 'butt',
           // Customize transition animation
           transition: 'stroke-dashoffset 0.5s ease 0s',
           // Rotate the path
           transform: 'rotate(1turn)',
           transformOrigin: 'center center',
         },
         // Customize the circle behind the path, i.e. the "total progress"
         trail: {
           // Trail color
           stroke: '#ffffff',
           // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
           strokeLinecap: 'butt',
           // Rotate the trail
           transform: 'rotate(1turn)',
           transformOrigin: 'center center',
         },
         // Customize the text
         text: {
           // Text color
           fill: '#a781ea',
           // Text size
           fontSize: '21px',
         },
         // Customize background - only used when the `background` prop is true
         background: {
           fill: '#3e98c7',
         },
       }}
      />
   </div>
  );
};

export default ProgressRing;