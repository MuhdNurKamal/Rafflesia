import { useDrag } from "react-dnd";
import { Draggable } from "../constants/draggables";
import { TicketType } from "../constants/TicketType";
import silverTicket from "../images/SilverRaffleTicket.svg";
import goldTicket from "../images/GoldRaffleTicket.svg";
import diamondTicket from "../images/DiamondRaffleTicket.svg";
import { useStore } from "../store";

export const RaffleTicket = ({ ticketType }: { ticketType: TicketType }) => {
  const ticketCounts = useStore((state) => state.ticketCounts);
  const count = ticketCounts[ticketType];

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
    canDrag: count > 0,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    item: { ticketType },
  }));
  return (
    <div>
      <div className="text-white font-bold rounded-full h-6 w-6 flex items-center justify-center bg-purple-pri">
        {count}
      </div>
      <div
        className="m-5"
        ref={drag}
        style={{
          cursor: count > 0 ? "move" : "auto",
          opacity: isDragging || count < 1 ? 0.5 : 1,
        }}
      >
        <img src={image} alt="raffle-ticket" />
      </div>
    </div>
  );
};
