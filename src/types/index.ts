import { z } from "zod";
import {
  PairSchema,
  CurrencySchema,
  CryptoCurrencyResponseSchema,
  CryptoPriceSchema,
} from "../schema/crypto-schema";

export type Currency = z.infer<typeof CurrencySchema>;
export type Cryptocurrency = z.infer<typeof CryptoCurrencyResponseSchema>;
export type Pair = z.infer<typeof PairSchema>;
export type CryptoPrice = z.infer <typeof CryptoPriceSchema>
