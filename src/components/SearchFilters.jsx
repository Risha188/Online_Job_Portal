import React from 'react'

const SearchFilters = ({search, setSearch, location, setLocation, jobType, setJobType, locations, jobTypes, onReset}) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-slate-900">Search & Filter Jobs</h2>
        <p className="mt-1 text-sm text-slate-500">Search by company or role  and filter the available jobs.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Search */}
        <div className="lg:col-span-1">
            <label
            htmlFor="search"
            className="mb-2 block text-sm font-medium text-slate-700"
            >
                Search
            </label>

            <input
            type="text"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by company or role"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
        </div>

        {/* Location */}
        <div>
            <label
            htmlFor="location"
            className="mb-2 block text-sm font-medium text-slate-700"
            >
                Location
            </label>

            <select
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
                {locations.map((item) => (
                    <option key={item} value={item}>
                        {item === "All" ? "All Locations" : item}
                    </option>
                ))}
            </select>
        </div>

        {/* Job Type */}
        <div>
            <label
            htmlFor="jobType"
            className="mb-2 block text-sm font-medium text-slate-700"
            >
                Job Type
            </label>

            <select
            id="jobType"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
                {jobTypes.map((item) => (
                    <option key={item} value={item}>
                        {item === "All" ? "All Job Types" : item}
                    </option>
                ))}
            </select>
        </div>

        {/* Reset */}
        <div className="flex items-end justify-end">
            <button
            type="button"
            onClick={onReset}
            className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Reset Filters
            </button>
        </div>
      </div>
    </div>
  )
}

export default SearchFilters
