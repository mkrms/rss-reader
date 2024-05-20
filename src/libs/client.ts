import { createClient } from 'microcms-js-sdk';
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
} from "microcms-js-sdk";
import { HtmlContext } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

//RSSの型定義
export type RSS = {
  id: string;
  title: string;
  url: string;
} & MicroCMSDate;

// RSS一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<RSS>({
    endpoint: "rss",
    queries,
  });
  return listData;
};