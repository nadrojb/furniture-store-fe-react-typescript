import { useParams } from "react-router-dom";

export function DisplayId() {
  const { id } = useParams();
  return (
    <>
      <h1>{id}</h1>
    </>
  );
}
