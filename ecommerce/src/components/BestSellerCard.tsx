const BestSellerCard = ({ title, name, price, img }) => {
  return (
    <div className="w-50 h-[410px] flex flex-col justify-between group relative">
      <div>
        <img
          src={img}
          alt=""
          className="rounded-lg"
        />
        {/* Use opacity and transition for a smooth fade-in effect */}
        <p className="absolute top-60 left-5 w-10/12 bg-white text-gray-600 text-sm py-2 rounded-lg drop-shadow-lg transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
          Quick view
        </p>
      </div>
      <div className="text-start space-y-1">
        <p className="text-gray-700 text-sm">{title}</p>
        <p className="text-base hover:text-blue-600">{name}</p>
        <p className="text-base">${price}</p>
      </div>
    </div>
  );
};

export default BestSellerCard;
