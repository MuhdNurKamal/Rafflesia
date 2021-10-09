import { useDrop } from "react-dnd";
import { Draggable } from "../constants/draggables";
import mysteryTicket from "../images/MysteryTicket.svg";

export const PrizePreview = () => {
  const [, drop] = useDrop(() => ({
    accept: Draggable.RAFFLE_TICKET,
    drop: (_x, { getItem }) => console.log(getItem()),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  return (
    <div ref={drop}>
      <img src={mysteryTicket} className="m-5" alt="logo" />
    </div>
  );
};
