import axios from "axios";
import Image from "next/image";

export const getStaticPaths = async () => {
  const data = await axios.get(
    "https://api.cinerama.uz/api-test/movie-list?page=1&items=20"
  );

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
  const data = axios.get(
    `https://api.cinerama.uz/api-test/movie-detail?id=${id}`
  );
  console.log(data);

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
