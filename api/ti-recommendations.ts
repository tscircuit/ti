import { handleTiRecommendationsRequest } from "../system-block-ui/server/ti-recommendations";

export function GET(request: Request): Promise<Response> {
  return handleTiRecommendationsRequest(request);
}
