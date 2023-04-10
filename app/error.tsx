"use client";

import { useEffect } from "react";

const Error = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}): React.ReactElement => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={(): void => reset()}>Try again</button>
    </div>
  );
};

export default Error;
