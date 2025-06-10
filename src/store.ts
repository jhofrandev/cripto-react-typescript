import { create } from "zustand";
import type { Cryptocurrency } from "./types";
import { devtools } from "zustand/middleware";
import { getCryptos } from "./services/CryptoService";

type CryptoStore = {
  cryptocurrencies: Cryptocurrency[];
  fetchCryptos: () => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptocurrencies: [],
    fetchCryptos: async () => {
      const cryptocurrencies = await getCryptos();
      set(() => ({
        cryptocurrencies,
      }));
    },
  }))
);
