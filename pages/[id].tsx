export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((item) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const res = fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await (await res).json();

  return {
    props: {
      data,
    },
  };
};

const Details = ({ data }) => {
  return (
    <div className="text-red-400">
      <h1 className="text-white">{data.name}</h1>
      <p>{data.email}</p>
    </div>
  );
};
export default Details;
