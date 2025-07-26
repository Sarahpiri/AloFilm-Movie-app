import SearchMovieCard from "@/components/SearchMovieCard";
import actorPic from "../assets/Ana_de_Armas_by_Gage_Skidmore_2.jpg.webp";
import { FilmographyTable } from "@/components/FilmographyTable";
const ActorPage = () => {
  return (
    <div className="flex bg-sky-950 px-28 py-8 flex-col gap-6">
      <div className="flex gap-8">
        <img src={actorPic} alt="actor"  style={{borderRadius:'16px',height:'180px',width:'150px'}} />
        <div className="flex flex-col text-white items-start pt-2">
          <p className="font-bold">Ana de Armas</p>
          <p className="text-gray-500">Actor</p>
          <p className="text-gray-500">Born: July 15, 1985 (age 38) in Los Angles, California</p>
        </div>
      </div>
      <p className="text-lg text-white font-bold">Biography</p>
      <p className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eos fuga quaerat est? Cumque, vero rerum provident doloremque odio vel. Laudantium exercitationem beatae dignissimos eaque alias nostrum unde accusamus rerum quis esse id officia tempore inventore eum illum, quasi in nam aut ipsum quia aliquid sit. Recusandae iste exercitationem neque libero ad ex, maiores minima reprehenderit. Veniam cum incidunt error similique commodi officia neque est voluptates suscipit quisquam! Pariatur libero sequi amet iste, vel minus quam nisi. Ipsam quaerat soluta, placeat illo eius nostrum maiores pariatur est suscipit consequuntur eaque odio nemo optio laborum, a consequatur distinctio dolor quod! Temporibus.
      </p>
      <p className="text-lg text-white font-bold">Known For</p>
      <div className="flex gap-4">
        <SearchMovieCard />
        <SearchMovieCard />
        <SearchMovieCard />
      </div>
      <p className="text-lg text-white font-bold">Filmography</p>
      <FilmographyTable />
    </div>
  );
};

export default ActorPage;
