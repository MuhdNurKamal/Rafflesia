import { GetMoreTicketsSection } from "../components/GetMoreTicketsSection";
import { RaffleStage } from "../components/RaffleStage";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const RaffleReveal = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex">
        <GetMoreTicketsSection />
        <RaffleStage />{" "}
      </div>
    </DndProvider>
  );
};
