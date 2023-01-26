import axios from "axios";
import Image from "next/image";
import { globalCurrentPage } from "@/pages";

export const getStaticPaths = async () => {
  const data = await axios.get(
    `${process.env.API_URL}?page=${globalCurrentPage}&items=${268}`
  );

  console.log(globalCurrentPage, "asdssssssss");

  const datas = data.data.data;

  const paths = datas?.movieList.map((item: any) => {
    return {
      params: {
        id: String(item.id),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id: number = context.params.id;
  const data = axios.get(`${process.env.API_URL_SLUG}?id=${id}`);
  return {
    props: {
      data: (await data)?.data?.data,
    },
  };
};

const Details = ({ data }: any) => {
  return (
    <div className="text-red-400">
      <h1>{data.title_en}</h1>
      <p>{data.title}</p>
      <Image
        src={data?.poster}
        alt={data.title_en}
        width={100}
        height={100}
        priority
      />
    </div>
  );
};
export default Details;
