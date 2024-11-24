
const HeroSection = () => {
  return (
    <>
    <div className="flex flex-col mx-16 items-center  mt-[100px] gap-6">
        <span className="font-bold text-3xl text-center">
            Turning your goals into epic <span className="text-customPurple">quests!</span>
        </span>
        <p className="text-center text-sm sm:w-[430px] w-[370px]">
            Feeling overwhelmed? Level up your productivity—start your adventure with Questify today!
        </p>

        <button className={`block text-sm font-light rounded-lg px-9 py-3 text-white transition bg-customPurple focus:outline-none`} type="button">
            {`Let's get started!`}
        </button>
    </div>
    </>
  );
}

export default HeroSection