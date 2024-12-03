const CarouselCard = ({ imageprop }) => {
  return (
    <div className="mx-auto bg-black h-[600px] w-full flex justify-center rounded-lg  ">
      <div>
        <img src={imageprop} alt="" />
      </div>
    </div>
  );
};

export default CarouselCard;
