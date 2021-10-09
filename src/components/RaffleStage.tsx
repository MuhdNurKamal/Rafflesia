import { DrawTicketsSection } from "./DrawTicketsSection";
import mysteryTicket from "../images/MysteryTicket.svg";

export const RaffleStage = () => {
  return (
    <div className="border h-full w-full">
      <h1 className="font-bold text-2xl">Collectors Event</h1>
      <p className="text-xl">Participate and win highly currated NFTs</p>
      <div className="border-dashed border-4 m-5">
        <img src={mysteryTicket} className="m-5" alt="logo" />

        <p className="text-gray-800">
          Drag a ticket or use the button below to draw your tickets
        </p>
      </div>
      <DrawTicketsSection />
    </div>
  );
};
