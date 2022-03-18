import React, { useState, useEffect } from "react";
import LoadingSpinner from "../common/LoadingSpinner";
import JoblyApi from "../api/api";  
import SearchForm from "../common/SearchForm";
import JobCardList from "./JobCardList";

const JobList = () => {
    const [jobs, setJobs] = useState(null);

    useEffect(function getAllJobsOnMount() {
        search();
    }, []);

    /** Triggered by search from submit; reloads jobs */
    async function search(title) {
        let jobs = await JoblyApi.getJobs(title);
        setJobs(jobs);
    }

    if (!jobs) return <LoadingSpinner />

    return (
        <div className="JobList col-md-8 offset-md-2">
            <SearchForm searchFor={search} />
            {jobs.length
                ? <JobCardList jobs={jobs} />
                : <p className="lead">Sorry, no results were found</p>
            }    
        </div>
    )
}

export default JobList;