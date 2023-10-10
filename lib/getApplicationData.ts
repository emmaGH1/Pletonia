
import jobApplicationsData from '@/app/api/data.json';
import JobStatus from '@/components/cards/JobStatus';
import { JobApplications } from '@/types';



const getApplicationData = () => {
  const initialStatus = {
    pending: 0,
    interview: 0,
    declined: 0
  }

  const status = jobApplicationsData.reduce((acc, { jobStatus }: JobApplications) => {
    if (jobStatus === "pending") {
      acc.pending += 1;
    } else if (jobStatus === "interview") {
      acc.interview += 1;
    } else if (jobStatus === "declined") {
      acc.declined += 1;
    }
    return acc;
  }, initialStatus);``

  return status
};

export default getApplicationData;