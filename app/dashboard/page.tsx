'use client'

import { RiAddCircleFill } from 'react-icons/ri'
import GetGreetings from "@/components/dashboard/Greetings";
import UseTooltip from '../../components/shared/UseTooltip';
import Link from 'next/link';
import JobStatus from '@/components/cards/JobStatus';
import Barchart from '@/components/dashboard/Barchart';
import getApplicationData from '@/lib/getApplicationData';


const Page = () => {
  const { pending, interview, declined } = getApplicationData()
  return (
    <div className='w-full'>
        <div className='flex justify-between w-9/10 mx-auto mt-5 items-center'>
            <GetGreetings user={'Emma'} className='text-xl font-sub-heading font-bold'/>
            <UseTooltip 
              trigger={
              <Link href='/dashboard/add-job'>
                <RiAddCircleFill className="w-10 h-10 text-dark-accent" /> 
              </Link>
            }
              tip='Add Job'
            />
        </div>

        <div className='flex flex-col lg:flex-row w-9/10 mx-auto justify-between mt-10'>
          <JobStatus status='pending' />
          <JobStatus status='interview'/>
          <JobStatus status='declined'/>
        </div>

        <div>
           <Barchart />
        </div>
    </div>
  );
};

export default Page;