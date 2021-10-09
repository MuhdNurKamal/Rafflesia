import create from "zustand";
import { TicketType } from "./constants/TicketType";

interface StoreState {
  ticketCounts: Record<TicketType, number>;
}

export const useStore = create<StoreState>((set, get) => ({
  // Hardcode since no API
  ticketCounts: {
    [TicketType.SILVER]: 5,
    [TicketType.GOLD]: 4,
    [TicketType.DIAMOND]: 2,
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
