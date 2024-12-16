import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstrage";

const JobDetails = () => {
    
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    
    const handleApplyJob=()=>{
        saveJobApplication(idInt);
        toast('You have Applied Successfully')
    }
    
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
                <div className=" border bg-slate-200">
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
                        <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                    </div>
                </div>
                <ToastContainer />
            </div>

        </div>
    );
};

export default JobDetails;