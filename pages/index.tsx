import Head from "next/head";
import { Fragment, useState } from "react";
import Card from "@/components/card";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Carousel from "@/components/carousel";
import { fetchApi } from "@/helpers/fetchApi";
import { paginate } from "@/helpers/paginate";
import Pagination from "@/components/pagination";

export default function Home({ data, length }: any) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;

  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  const paginatedPosts = paginate(data, currentPage, pageSize);

  return (
    <Fragment>
      <Head>
        <title>Webflix Uzbekistan Watch TV Shows Online</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="container pt-[70px]">
        <div className="flex gap-4">
          <div className="hidden md:block lg:block">
            <Sidebar />
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-4">
              <Carousel items={data.slice(50, 55)} />
              <div className="text-white grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 md:grid-cols-4">
                {paginatedPosts?.map((item: any) => (
                  <Card
                    poster=""
                    title=""
                    year={3}
                    id={3}
                    key={item.id}
                    data={item}
                  />
                ))}
              </div>
              <div className="flex flex-wrap gap-4 text-white mx-auto">
                <Pagination
                  items={length} // 100
                  currentPage={currentPage} // 1
                  pageSize={pageSize} // 10
                  onPageChange={onPageChange}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export const getStaticProps = async () => {
  let data;
  data = await fetchApi(`${process.env.NEXT_PUBLIC_API_URL}?page=1&items=263`);

  return {
    props: {
      data: data?.data?.movieList,
      fallback: false,
    },
  };
};
