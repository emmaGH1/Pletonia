'use client'

import { RiAddCircleFill } from 'react-icons/ri'
import GetGreetings from "@/components/dashboard/Greetings";
import UseTooltip from '../../components/shared/UseTooltip';
import Link from 'next/link';
import JobStatus from '@/components/cards/JobStatus';
import Barchart from '@/components/dashboard/Barchart';
import getApplicationData from '@/lib/getApplicationData';
import { DataTable } from '@/components/dashboard/table/data-table';
import { columns } from '@/components/dashboard/table/columns';
import jsonData from '@/app/api/data.json'


const Page = () => {
  const { pending, interview, declined } = getApplicationData()
  console.log(jsonData)
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

        {/* <div>
           <Barchart />
        </div> */}
            <div className="container mx-auto py-10">
              <DataTable columns={columns} data={jsonData} />
            </div>
    </div>
  );
};

export default Page;