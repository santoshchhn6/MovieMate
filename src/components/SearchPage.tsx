import SearchResult from "./SearchResult";

const SearchPage = () => {
  return (
    <div className="min-h-[100vh] border border-gray-950 ">
      <h1 className="mt-[80px] ml-5 text-2xl font-['Poppin-sb']">
        Search Result
      </h1>
      <SearchResult />
    </div>
  );
};

export default SearchPage;
