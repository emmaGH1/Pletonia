import { MdPendingActions } from 'react-icons/md';
import ProgressRing from '../dashboard/ProgressRing';
import jobApplicationsData from '@/lib/mockData.json';
import getApplicationData from '@/lib/getApplicationData';

const JobStatus = ({ status }: { status: 'pending' | 'interview' | 'declined' }) => {
  const { pending, interview, declined } = getApplicationData();

  // Calculate class and text based on status
  let iconClass = '';
  let countText = '';
  let percentage = 0;

  if (status === 'pending') {
    iconClass = 'text-yellow-500';
    countText = 'Pending Applications';
    percentage = (pending / (pending + interview + declined)) * 100;
  } else if (status === 'interview') {
    iconClass = 'text-blue-400';
    countText = 'Interviews Scheduled';
    percentage = (interview / (pending + interview + declined)) * 100;
  } else {
    iconClass = 'text-red-600';
    countText = 'Jobs Declined';
    percentage = (declined / (pending + interview + declined)) * 100;
  }

  return (
    <div className="dark:bg-dark-secondary flex justify-between bg-secondary items-center rounded-lg w-full mx-auto mb-5 p-8 lg:mb-0 lg:w-auto">
      <div className="flex flex-col justify-center pr-10">
        <div className="flex items-center mb-2">
          <MdPendingActions className={`w-10 h-10 mr-2 ${iconClass}`} />
          <span className={`flex font-bold font-sub-heading text-2xl ${iconClass}`}>{20}</span>
        </div>
        <span className="whitespace-nowrap">{countText}</span>
      </div>
      <div>
        <ProgressRing percentage={percentage} status={status} />
      </div>
    </div>
  );
};

export default JobStatus;
