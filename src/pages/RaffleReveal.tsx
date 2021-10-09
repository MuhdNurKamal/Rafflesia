import { GetMoreTicketsSection } from "../components/GetMoreTicketsSection";
import { RaffleStage } from "../components/RaffleStage";

export const RaffleReveal = () => {
  return (
    <div className="flex">
      <GetMoreTicketsSection />
      <RaffleStage />
    </div>
  );
};
