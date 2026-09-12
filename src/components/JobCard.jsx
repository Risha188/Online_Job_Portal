import React from 'react'

const JobCard = ({ job, isApplied, onApply, onViewDetails }) => {
    return (
        <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 duration-200 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            {/* Company */}
            <div className="mb-4">
                <p className="text-sm font-medium text-blue-600">
                    {job.company}
                </p>
                <h3 className="mt-1 text-lg font-bold text-slate-900">
                    {job.role}
                </h3>
            </div>

            {/* Job Information */}
            <div className="space-y-2 text-sm text-slate-600">
                <p>
                    <span className="font-semibold text-slate-800">
                        Location:
                    </span>{" "}
                    {job.location}
                </p>

                <p>
                    <span className="font-semibold text-slate-800"><span className="font-semibold text-slate-800">
                        Salary:
                    </span>{" "}
                        {job.salary}</span>
                </p>

                <p>
                    <span className="font-semibold text-slate-800"><span className="font-semibold text-slate-800">
                        Type:
                    </span>{" "}
                        {job.type}</span>
                </p>

                <p>
                    <span className="font-semibold text-slate-800"><span className="font-semibold text-slate-800">
                        Mode:
                    </span>{" "}
                        {job.mode}</span>
                </p>

                <p>
                    <span className="font-semibold text-slate-800"><span className="font-semibold text-slate-800">
                        Experience:
                    </span>{" "}
                        {job.experience}</span>
                </p>
            </div>
            <div className="mt-4">
                <p className="font-semibold text-slate-800">
                    Skills:
                </p>

                <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                        <span
                            key={skill}
                            className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-800 mr-2 mb-2"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
                <button
                    type="button"
                    onClick={() => onViewDetails(job)}
                    className="flex-1 rounded-lg border border-blue-600 px-4 py-2.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
                >
                    View Details
                </button>

                <button
                    type="button"
                    disabled={isApplied}
                    onClick={() => onApply(job.id)}
                    className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold transition ${isApplied ? "cursor-not-allowed bg-green-100 text-green-700" : "bg-blue-600 text-white hover:bg-blue-700"}`}
                >
                    {isApplied ? "Applied ✓" : "Apply"}
                </button>
            </div>
        </article>
    )
}

export default JobCard
