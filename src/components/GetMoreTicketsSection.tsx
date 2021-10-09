import { TicketType } from "../constants/TicketType";
import { RaffleTicket } from "./RaffleTicket";

export const GetMoreTicketsSection = () => {
  return (
    <div className="m-5 border flex flex-col">
      <div className="border-b">
        <span className="font-bold m-3">Get More Tickets</span>
        <button className="bg-purple-sec text-white font-bold py-2 px-4 rounded ">
          Buy
        </button>
      </div>
      <div>
        <RaffleTicket ticketType={TicketType.SILVER} />
        <RaffleTicket ticketType={TicketType.GOLD} />
        <RaffleTicket ticketType={TicketType.DIAMOND} />
      </div>
    </div>
  );
};
