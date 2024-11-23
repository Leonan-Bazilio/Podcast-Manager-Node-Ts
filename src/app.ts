import {
  getFilterEpisodes,
  getListEpisodes,
} from "./controllers/podcastsController";
import { Routes } from "./routes/routes";
import { HttpMethods } from "./utils/httpMethods";
import { IncomingMessage, ServerResponse } from "http";

export const app = async (req: IncomingMessage, res: ServerResponse) => {
  const baseUrl = req.url?.split("?")[0];

  if (req.method === HttpMethods.GET && req.url === Routes.LIST) {
    await getListEpisodes(req, res);
  }

  if (req.method === HttpMethods.GET && baseUrl === Routes.FILTER) {
    await getFilterEpisodes(req, res);
  }
};
