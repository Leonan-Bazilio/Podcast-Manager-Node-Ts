import { IncomingMessage, ServerResponse } from "http";

import { listEpisodesService } from "../services/listEpisodesService";
import { filterEpisodesService } from "../services/filterEpisodesService";
import { StatusCode } from "../utils/statusCode";
import { PodcastTransferModel } from "../models/podcastTransferModel";

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content: PodcastTransferModel = await listEpisodesService();
  res.writeHead(content.statusCode, { "Content-Type": "application/json" });
  res.write(JSON.stringify(content.body));
  res.end();
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content: PodcastTransferModel = await filterEpisodesService(req.url);
  res.writeHead(content.statusCode, { "Content-Type": "application/json" });
  res.write(JSON.stringify(content.body));
  res.end();
};
