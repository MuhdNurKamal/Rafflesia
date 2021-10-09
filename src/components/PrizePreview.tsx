import { useDrop } from "react-dnd";
import { Draggable } from "../constants/draggables";
import { TicketType } from "../constants/TicketType";
import mysteryTicket from "../images/MysteryTicket.svg";
import { useStore } from "../store";

export const PrizePreview = () => {
  const useTicket = useStore((state) => state.useSingleTicket);
  const ticketCounts = useStore((state) => state.ticketCounts);

  const [, drop] = useDrop(
    () => ({
      accept: Draggable.RAFFLE_TICKET,
      drop: (_, monitor) => {
        const { ticketType } = monitor.getItem<{ ticketType: TicketType }>();
        if (ticketCounts[ticketType] > 0) {
          useTicket(ticketType);
        }
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [ticketCounts]
  );
  return (
    <div ref={drop}>
      <img src={mysteryTicket} className="m-5" alt="logo" />
    </div>
  );
};
