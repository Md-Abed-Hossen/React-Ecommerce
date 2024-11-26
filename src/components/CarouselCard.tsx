const CarouselCard = ({ imageprop }) => {
  return (
    <div className="mx-auto bg-black h-[600px] w-[85%] flex justify-center rounded-lg  ">
      <div>
        <img src={imageprop} alt="" />
      </div>
    </div>
  );
};

export default CarouselCard;