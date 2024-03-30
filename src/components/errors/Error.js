import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>Oops Page not found</h1>
      <h2>{err.error.message}</h2>
      <h2>
        {err.status} - {err.statusText}
      </h2>
    </>
  );
};

export default ErrorComponent;
