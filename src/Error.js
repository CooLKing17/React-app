import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 text-gray-900">
      <h1 className="text-6xl font-bold text-red-600 mb-4">Error</h1>
      <h1 className="text-3xl font-semibold">{error.status}</h1>
      <h1 className="text-xl mb-2 ssm:text-center">{error.data}</h1>
      <h1 className="text-xl">{error.statusText}</h1>
    </div>
  );
};

export default Error;
