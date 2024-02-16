import {IFeedResponse} from '../../types/application';
import publicApi from '../interceptors/publicApi';

interface IGetTopPaidApplications {
  limit?: number;
}
export const getTopPaidApplications = ({
  limit = 200,
}: IGetTopPaidApplications) => {
  console.log(`/us/rss/toppaidapplications/limit=${limit}/json`);
  return publicApi.get<IFeedResponse>(
    `/us/rss/toppaidapplications/limit=${limit}/json`,
  );
};
