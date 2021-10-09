import { useDrag } from "react-dnd";
import { Draggable } from "../constants/draggables";
import { TicketType } from "../constants/TicketType";
import silverTicket from "../images/SilverRaffleTicket.svg";
import goldTicket from "../images/GoldRaffleTicket.svg";
import diamondTicket from "../images/DiamondRaffleTicket.svg";

export const RaffleTicket = ({ ticketType }: { ticketType: TicketType }) => {
  let image;
  if (ticketType === TicketType.GOLD) {
    image = goldTicket;
  } else if (ticketType === TicketType.SILVER) {
    image = silverTicket;
  } else {
    image = diamondTicket;
  }

  const [{ isDragging }, drag] = useDrag(() => ({
    type: Draggable.RAFFLE_TICKET,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    item: { ticketType },
  }));
  return (
    <>
      <div
        className="m-5"
        ref={drag}
        style={{
          cursor: "move",
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        <img ref={drag} src={image} alt="raffle-ticket" />
      </div>
    </>
  );
};
