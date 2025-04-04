import CustomButton from "./CustomButton";

const HeroSection = () => {
  const address = "";

  return (
    <>
    <div className="h-screen  bg-cover bg-center text-white relative">
      {/* Content Wrapper */}
      <div className="absolute bottom-10 left-[-600px] max-w-2xl">
        <h1 className="text-6xl font-bold">Quantum Solar System: The universe in your hands</h1>
        <CustomButton 
          btnType="button"
          title="See campaigns"
          styles="bg-[#1dc071] mt-4"
          handleClick={() => {
            if (address) navigate("create-campaign");
            else connect();
          }} 
        />
      </div>
   
    </div>
    </>
  );
};

export default HeroSection;
