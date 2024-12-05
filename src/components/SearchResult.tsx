import { productsArray } from "@/components/ProductSlider";

const SearchResult = ({ search }: { search: string }) => {
  const filterSearch = productsArray.filter((data) =>
    data.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-100 h-full pt-8 pb-8 overflow-y-auto">
      {filterSearch.length > 0 ? (
        <div className="flex flex-col gap-2 size-4 w-full">
          {filterSearch.map((data) => (
            <p key={data.id} className="flex flex-row">
              <img src={data.img} alt="" className="size-14" />
              {data.name}$ {data.price}
            </p>
          ))}
        </div>
      ) : (
        <p className="text-black">No results found</p>
      )}
    </div>
  );
};

export default SearchResult;
