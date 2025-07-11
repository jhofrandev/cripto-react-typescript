import axios from "axios";
import type { Pair } from "../types";
import { CryptoCurrenciesResponseSchema, CryptoPriceSchema } from "../schema/crypto-schema";

export async function getCryptos() {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
  const {
    data: { Data },
  } = await axios(url);
  const result = CryptoCurrenciesResponseSchema.safeParse(Data);
  if (result.success) {
    return result.data;
  } else {
    console.error(result.error);
    return [];
  }
}

export async function fetchCurrentCryptoPrice(pair: Pair) {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`;
  const {
    data: { DISPLAY },
  } = await axios(url);
  const result = CryptoPriceSchema.safeParse(DISPLAY[pair.criptocurrency][pair.currency])
  if (result.success) {
    return result.data
  }
}
