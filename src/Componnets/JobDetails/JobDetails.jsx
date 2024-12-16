import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job)
   
    
    return (
        <div>
            <h3>Job Details To:{id}</h3>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h1>{job.job_description}</h1>
                    <h1>{job.job_responsibility}</h1>
                    <h1>{job.educational_requirements}</h1>
                    <h1>{job.experiences}</h1>
                </div>
                <div className=" border">
                    <h1>Job Details</h1>
                    <div>
                        <h2>{job.job_title}</h2> 
                    </div>
                    <div>
                        <h1>Contact Information</h1>
                        <div>
                            <h1>{job.contact_information.phone}</h1>
                            <p>{job.contact_information.email}</p>
                            <p>{job.contact_information.address}</p>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default JobDetails;