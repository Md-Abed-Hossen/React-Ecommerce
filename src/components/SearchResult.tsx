import { BestSellerArr } from "./BestSeller"; // Importing FeatureArray
import BestSellerCard from "./BestSellerCard";

const SearchResult = ({ search }: { search: string }) => {
  // Filter the FeatureArray based on the search term
  const filterSearch = BestSellerArr.filter((data) =>
    data.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-100 h-full pt-8 pb-8">
      {filterSearch.length > 0 ? (
        <div className="flex flex-row gap-5">
          {filterSearch.map((data) => (
            <BestSellerCard key={data.id} title={data.title} />
          ))}
        </div>
      ) : (
        <p className="text-black">No results found</p>
      )}
    </div>
  );
};

export default SearchResult;
