import { useDrag } from "react-dnd";
import { Draggable } from "../constants/draggables";
import image from "../images/SilverRaffleTicket.svg";

export const RaffleTicket = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: Draggable.RAFFLE_TICKET,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
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
