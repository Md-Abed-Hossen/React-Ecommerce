const ProductsSliderCard = ({ title, name, price, img }) => {
  return (
    <div className="w-[240px] h-[50px] flex flex-col justify-between group relative pb-[20px]">
      <div className="h-[300px] w-[240px]">
        <img src={img} alt="" className="rounded-lg" />
      
        <p className="absolute top-60 left-5 w-[210px] h-[44px] bg-white text-gray-600 text-sm py-2 rounded-lg drop-shadow-lg transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
          Quick view
        </p>
      </div>
      <div className="flex flex-col justify-between">
        <div className="text-start">
          <p className="text-gray-700 text-[11px] h=[12.8px] pb-[8px] pt-[17px]">{title.toUpperCase()}</p>
          <p className="text-[16px] hover:text-blue-600">{name}</p>
          <p className="text-[15px] h-[15px] w-[240px] text-[#303c43] pb-[20px]">${price}</p>
          <p className="text-[12px] h-[18px] w-[201.2px] text-[#303c43] pt-[5px]">Available in 4 colors</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsSliderCard;
