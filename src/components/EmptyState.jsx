
const EmptyState = ({onReset}) => {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-14 text-center">
      <div className="mx-auto max-w-md">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-2xl">
          🔍
        </div>

        <h3 className="text-lg font-bold text-slate-900">
          No jobs found
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          We couldn't find any jobs matching your current
          search and filter criteria. Try changing your
          search or filters.
        </p>

        <button
          type="button"
          onClick={onReset}
          className="mt-5 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}

export default EmptyState
