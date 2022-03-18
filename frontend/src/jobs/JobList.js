import React, { useContext, useState } from "react";
import UserContext from "../auth/UserContext";

const JobCard = ({ id, title, salary, equity, companyName }) => {
    const { hasAppliedToJob, applyToJob } = useContext(UserContext);
    const [applied, setApplied] = useState();

    React.useEffect( function updateAppliedStatus() {
        setApplied(hasAppliedToJob(id));
    }, [id, hasAppliedToJob]);
}    