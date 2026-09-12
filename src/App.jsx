import {useState} from 'react'
import Header from './components/Header';
import SearchFilters from './components/SearchFilters';
import EmptyState from './components/EmptyState';
import JobDetails from './components/JobDetails';
import jobs from './data/jobs.js';
import JobCard from './components/JobCard';

const App = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");
  const [jobType, setJobType] = useState("All");

  //Selected job for details modal
  const [selectedJob, setSelectedJob] = useState(null);
  // Stored IDs of jobs that have been applied to 
  const [appliedJobs, setAppliedJobs] = useState([]);

  //Get unique locations from dataset
  const locations = [
    "All",
    ...new Set(jobs.map((job) => job.location)),
  ]

  //Get unique job types from dataset
  const jobTypes = [
    "All",
    ...new Set(jobs.map((job) => job.type)),
  ]

  //Combined search + filter logic
  const filteredJobs = jobs.filter((job) => {
    const searchText = search.trim().toLowerCase();

    const matchesSearch = job.company.toLowerCase().includes(searchText) || job.role.toLowerCase().includes(searchText);

    const matchesLocation = location === "All" || job.location === location;

    const matchesJobType = jobType === "All" || job.type === jobType;

    return (
      matchesSearch &&
      matchesLocation &&
      matchesJobType
    );
  });

  // Apply to a job
  const handleApply = (jobId) => {
    setAppliedJobs((previousAppliedJobs) => {
      if(previousAppliedJobs.includes(jobId)){
        return previousAppliedJobs;
      }

      return [...previousAppliedJobs, jobId];
    });
  };

  // Reset search & filters
  const handleReset = () => {
    setSearch("");
    setLocation("All");
    setJobType("All");
  }

  // open job details
  const handleViewDetails = (job) => {
    setSelectedJob(job);
  }

  // close job details
  const handleCloseDetails = () => {
    setSelectedJob(null);
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-slate-900 px-4 py-12 text-white sm:py-16">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-blue-400">Career Opportunities</p>
            <h1 className='max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl'>Find your next opportunity</h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
              Search and explore frontend and software development opportunities from our job listings.
            </p>
          </div>
        </section>

        {/* Search & Filters */}
        <section className="px-4 py-6 sm:py-8">
          <div className="mx-auto max-w-7xl">
            <SearchFilters 
            search={search}
            setSearch={setSearch}
            location={location}
            setLocation={setLocation}
            jobType={jobType}
            setJobType={setJobType}
            locations={locations}
            jobTypes={jobTypes}
            onReset={handleReset}
            />
          </div>
        </section>

        {/* Job Results */}
        <section className="px-4 pb-12">
          <div className="mx-auto max-w-7xl">
            {/* Result Count */}
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold sm:text-xl">
                  Available Jobs
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  {filteredJobs.length} {" "}
                  {filteredJobs.length === 1 ? "job" : "jobs"} found
                </p>
              </div>
            </div>

            {/* Empty State */}
            {filteredJobs.length === 0 ? (
              <EmptyState onReset={handleReset}/>
            ):(
              // Dynamic Job cards 
              <div>
                {filteredJobs.map((job) => (
                  <JobCard
                  key={job.id}
                  job={job}
                  isApplied={appliedJobs.includes(job.id)}
                  onApply={handleApply}
                  onViewDetails={handleViewDetails} 
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Job Details Modal */}
      {selectedJob && (
        <JobDetails 
        job={selectedJob}
        isApplied={appliedJobs.includes(selectedJob.id)}
        onApply={handleApply}
        onClose={handleCloseDetails}
        />
      )}
    </div>
  );
}

export default App;
