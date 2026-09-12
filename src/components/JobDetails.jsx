const JobDetails = ({ job, isApplied, onApply, onClose }) => {
    if (!job) {
        return null;
    }
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white py-4">
                    <div className="pr-4">
                        <p className="text-sm font-semibold text-blue-600">{job.company}</p>
                        <h2 className="mt-1 text-xl font-semibold text-slate-900 sm:text-2xl">{job.role}</h2>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-lg text-slate-600 transition hover:bg-slate-200"
                    >
                        ×
                    </button>
                </div>

                {/* Content */}
                <div className="mt-4 space-y-4 text-sm text-slate-600">
                    {/* Job Information */}
                    <div>
                        <h3 className="mb-2 text-base font-semibold text-slate-900">
                            Job Information
                        </h3>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <InfoItem label="Location" value={job.location} />
                            <InfoItem label="Type" value={job.type} />
                            <InfoItem label="Level" value={job.level} />
                            <InfoItem label="Salary" value={job.salary} />
                            <InfoItem label="Mode" value={job.mode} />
                            <InfoItem label="Experience" value={job.experience} />
                        </div>
                    </div>
                    {/* Skills */}
                    <div>
                        <h3 className="mb-2 text-base font-semibold text-slate-900">
                            Skills
                        </h3>
                        <div>
                            {job.skills.map((skill) => (
                                <span key={skill} className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700"
                                > {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <h3 className="mb-2 text-base font-semibold text-slate-900">
                            Description
                        </h3>
                        <p className="text-sm text-slate-600">
                            {job.description}
                        </p>
                    </div>

                    {/* Apply */}
                    <div className="border-t border-slate-200 pt-5">
                        <button
                            type="button"
                            disabled={isApplied}
                            onClick={() => onApply(job.id)}
                            className={`w-full rounded-lg px-5 py-3 text-sm font-semibold transition ${isApplied ? "cursor-not-allowed bg-green-100 text-green-700" : "bg-blue-600 text-white hover:bg-blue-700"}`}
                        > {isApplied ? "Applied ✓" : "Apply for this Job"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Reusable information item 
function InfoItem({ label, value }) {
    return (
        <div className="rounded-lg bg-slate-50 p-3">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500"> {label}
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-900"> {value}
            </p>
        </div>);
}
export default JobDetails
