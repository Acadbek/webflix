import { useRouter } from "next/router";
import Navbar from "@/components/navbar";

const Comment = () => {
  const router = useRouter();
  const slug = router.query.slug || [];

  return (
    <>
      <Navbar />
      <h1 className="text-red-400">Slug: {slug.join("/")}</h1>
    </>
  );
};

export default Comment;
