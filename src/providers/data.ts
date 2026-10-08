import dataProviderSimpleRest from "@refinedev/simple-rest";
import { API_URL } from "./constants";

export const dataProvider = dataProviderSimpleRest(API_URL);
