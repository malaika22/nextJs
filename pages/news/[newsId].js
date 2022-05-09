import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();
  console.log(router.query);
  const newsId = router.query.newsId;
  console.log("newsId", newsId);
  return <h1>Details page</h1>;
};

export default DetailPage;
