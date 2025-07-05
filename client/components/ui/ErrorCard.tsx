const ErrorCard = ({ error }: { error: string }) => {
  return (
    <div className="bg-red-100 border border-red-400 text-[13px] text-red-700 w-[100%] p-2 rounded relative">
      <span className="font-semibold">Error:</span>
      <span className="block sm:inline">{error}</span>
    </div>
  );
}

export default ErrorCard;