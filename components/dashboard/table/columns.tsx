'use client'

import { ColumnDef } from '@tanstack/react-table'
import { JobApplications } from '@/types';


//This type is used to define the shape of our data
export const columns: ColumnDef<JobApplications>[] = [
    {
        accessorKey: "company",
        header: " Company"
    },
    {
        accessorKey: "position",
        header: " Position"
    },
    {
        accessorKey: "company",
        header: " Company"
    },
    {
        accessorKey: "jobLocation",
        header: " JobLocation"
    },
    {
        accessorKey: "jobStatus",
        header: " JobStatus"
    },
    {
        accessorKey: "jobType",
        header: " JobType"
    },
    {
        accessorKey: "createdAt",
        header: " CreatedAt"
    }
]