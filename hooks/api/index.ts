import { VotApi } from "./api";
import { fetcher } from "./fetcher";
export { VotApi } from './api';
export { useVotApi } from './use_vot_api'
export type { Response } from './h'

export const votApi = new VotApi({
  fetcher,
  version: '1',
  apiBase: (process.env.NEXT_PUBLIC_API || 'http://localhost:3000/') + "api/",
  session_id: null
});
