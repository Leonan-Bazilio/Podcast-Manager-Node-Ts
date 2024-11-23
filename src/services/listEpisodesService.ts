import { podcastRepository } from "../data/podcastRepository";
import { PodcastTransferModel } from "../models/podcastTransferModel";
import { StatusCode } from "../utils/statusCode";

export const listEpisodesService = async (): Promise<PodcastTransferModel> => {
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };

  const data = await podcastRepository();
  responseFormat = {
    statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
    body: data,
  };
  return responseFormat;
};
