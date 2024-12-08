import { ProductsSlider } from "@/components/ProductsSlider";

const SearchResult = ({ search }: { search: string }) => {
  const filterSearch = ProductsSlider.filter((data) =>
    data.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-gray-100 h-full pt-8 pb-8 overflow-y-auto">
      {filterSearch.length > 0 ? (
        <div className="flex flex-col gap-2 size-4 w-full">
          {filterSearch.map((data) => (
            <p key={data.id} className="flex flex-row">
              <img src={data.img} alt="products by search" className="size-14" />
              {data.name}$ {data.price}
            </p>
          ))}
        </div>
      ) : (
        <p className="text-black">No results found</p>
      )}
    </section>
  );
};

export default SearchResult;
