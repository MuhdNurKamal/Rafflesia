import React, { useState } from "react";
import { TicketType } from "../constants/TicketType";
import ticketLogo from "../images/Ticket.svg";
import { useStore } from "../store";

export const DrawTicketsSection = () => {
  const ticketCounts = useStore((state) => state.ticketCounts);
  const useTicket = useStore((state) => state.useSingleTicket);

  const [ticketType, setTicketType] = useState(TicketType.SILVER);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTicketType(e.currentTarget.value as TicketType);
  };

  return (
    <div className="flex">
      <img src={ticketLogo} />
      <div>
        <p>DrawTickets</p>
        <p>10 Tickets found</p>
        <p>
          Open your tickets and get a chance to win $1000 worth of high quality
          NFTs!
        </p>
        <a>Learn More</a>
      </div>
      <div className="m-4">
        <label className="block text-left" style={{ maxWidth: "400px" }}>
          <span className="text-gray-700">Select</span>
          <select
            className="form-select block w-full mt-1"
            onChange={handleChange}
          >
            <option key={TicketType.SILVER} value={TicketType.SILVER}>
              Silver ({ticketCounts[TicketType.SILVER]})
            </option>
            <option key={TicketType.GOLD} value={TicketType.GOLD}>
              GOLD ({ticketCounts[TicketType.GOLD]})
            </option>
            <option key={TicketType.DIAMOND} value={TicketType.DIAMOND}>
              DIAMOND ({ticketCounts[TicketType.DIAMOND]})
            </option>
          </select>
        </label>
        <button
          className="bg-purple-sec text-white font-bold py-2 px-4 rounded mt-4"
          onClick={() => ticketCounts[ticketType] && useTicket(ticketType)}
        >
          Draw Ticket
        </button>
      </div>
    </div>
  );
};
