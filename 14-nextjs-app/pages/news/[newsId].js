import { useRouter } from "next/router";
function NewsDetail() {
  const router = useRouter();
  return <h1>News page detail: {router.query.newsId}</h1>;
}

export default NewsDetail;
