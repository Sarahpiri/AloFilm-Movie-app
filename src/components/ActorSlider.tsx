import actor from "../assets/Ana_de_Armas_by_Gage_Skidmore_2.jpg.webp";
const ActorSlider = () => {
  return (
    <div
      className="cursor-pointer hover:scale-90 transform-content transition-all bg-no-repeat bg-cover bg-center h-[300px] w-[200px] rounded-3xl shadow-[inset_0px_-166px_42px_-78px_rgba(0,0,0,0.75)] text-white p-5 flex items-start justify-end text-center flex-col"
      style={{ backgroundImage: `url(${actor})`, width: "200px",
      }}
    >
        <p className="font-bold">Ana de Armas</p>
       <p>Eve</p> 
    </div>
  );
};

export default ActorSlider;
