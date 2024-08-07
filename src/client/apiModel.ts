import { clientApi } from "./react";

export type ClientApiModels = {
  user: typeof clientApi.user;
  department: typeof clientApi.department;
  
  // Add more models as needed
};

export type ModelName = keyof ClientApiModels;
