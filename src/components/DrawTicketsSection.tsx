import ticketLogo from "../images/Ticket.svg";

export const DrawTicketsSection = () => {
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
      <div>
        <p>Selector</p>
        <button className="bg-purple-sec text-white font-bold py-2 px-4 rounded ">
          Draw Ticket
        </button>
      </div>
    </div>
  );
};
