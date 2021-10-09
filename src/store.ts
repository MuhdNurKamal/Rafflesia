import create from "zustand";
import { TicketType } from "./constants/TicketType";

interface StoreState {
  ticketCounts: Record<TicketType, number>;
  useSingleTicket: (ticketType: TicketType) => void;
}

export const useStore = create<StoreState>((set, get) => ({
  // Hardcode since no API
  ticketCounts: {
    [TicketType.SILVER]: 1,
    [TicketType.GOLD]: 3,
    [TicketType.DIAMOND]: 4,
  },

  useSingleTicket: (ticketType: TicketType) => {
    set((state) => ({
      ticketCounts: {
        ...state.ticketCounts,
        [ticketType]: state.ticketCounts[ticketType] - 1,
      },
    }));
  },
}));
