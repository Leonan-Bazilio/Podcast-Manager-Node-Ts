import { PodcastModel } from "./podcastModel";

export interface PodcastTransferModel {
  statusCode: number;
  body: PodcastModel[];
}
