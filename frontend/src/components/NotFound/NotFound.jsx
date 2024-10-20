const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen not-found">
      <h1 className="text-4xl font-bold text-white">Not Found!</h1>
      <button
        className="btn bg-[var(--blue-color)] btn-md text-white rounded mt-5 p-2 cursor-pointer shadow-xl"
        onClick={() => (window.location.href = "/")}
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFound;
