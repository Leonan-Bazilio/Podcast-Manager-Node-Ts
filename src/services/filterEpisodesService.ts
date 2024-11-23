import { podcastRepository } from "../data/podcastRepository";
import { PodcastTransferModel } from "../models/podcastTransferModel";
import { StatusCode } from "../utils/statusCode";

export const filterEpisodesService = async (
  url: string | undefined
): Promise<PodcastTransferModel> => {
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };

  const queryParam = url?.split("?p=")[1];
  const data = await podcastRepository(queryParam);

  responseFormat = {
    statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
    body: data,
  };
  return responseFormat;
};
