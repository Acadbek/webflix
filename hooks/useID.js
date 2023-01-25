import { useId } from "react";

const useUniqueID = () => {
  const id = useId();
  return id;
};

export default useUniqueID;
