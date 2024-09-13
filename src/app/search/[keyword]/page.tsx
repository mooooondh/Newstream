export default function SearchResult({
  params,
}: {
  params: { keyword: string };
}) {
  return (
    <>
      <h1>{params.keyword}</h1>
    </>
  );
}
