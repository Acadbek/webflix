import axios from "axios";
import Image from "next/image";

const myLoader = ({ src, width }: any) => {
  return `${src}?w=${width}}`;
};

export const getStaticPaths = async () => {
  const data = await axios.get(
    "https://api.cinerama.uz/api-test/movie-list?page=1&items=20"
  );

  const paths = data.data.data.movieList.map((item) => {
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
        loader={myLoader}
        src={data?.poster}
        alt={data.title_en}
        width={400}
        height={400}
      />
    </div>
  );
};
export default Details;
