
import jobApplicationsData from '@/lib/mockData.json';
import JobStatus from '@/components/cards/JobStatus';

interface Props {
    company: string;
    position: string;
    jobLocation: string;
    jobStatus: string;
    jobType: string;
    createdAt: string;
}

const getApplicationData = () => {
  const initialStatus = {
    pending: 0,
    interview: 0,
    declined: 0
  }

  const status = jobApplicationsData.reduce((acc, { jobStatus }: Props) => {
    if (jobStatus === "pending") {
      acc.pending += 1;
    } else if (jobStatus === "interview") {
      acc.interview += 1;
    } else if (jobStatus === "declined") {
      acc.declined += 1;
    }
    return acc;
  }, initialStatus);

  return status
};

export default getApplicationData;