import config from "@/config";
import Image from "next/image";

const fetchBlogs = async ({ params }) => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`
    }
  };
  const request = await fetch(`${config.api}/api/blogs?populate=*&${params}`, reqOptions);
  const response = await request.json();

  return response;
}

export default async function Home() {


  const [featuredBlogs, blogs] = await Promise.all([
    await fetchBlogs("filters[IsFeatured][$eq]=true"),
    await fetchBlogs("filters[IsFeatured][$eq]=false")
  ]);

  return (
    <main className="flex h-screen w-full  justify-center items-center">
      <div className="max-w-5xl flex flex-col gap-3">

        {featuredBlogs.data.map(featuredBlog => (
          <div className="flex items-center gap-4">
            <img
              alt=""
              src={`${config.api}${featuredBlog.attributes.FeaturedImage.data.attributes.url}`}
              className="h-56 w-full object-cover rounded-lg"
            />

            <div className="bg-white p-4 sm:p-6">
              <time datetime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-gray-900">{featuredBlog.attributes.Title}</h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              {featuredBlog.attributes.Summay}
              </p>
            </div>
          </div>
        ))}



        <div className="flex gap-6">
          <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              className="h-56 w-full object-cover"
            />

            <div className="bg-white p-4 sm:p-6">
              <time datetime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-gray-900">How to position your furniture for positivity</h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                dignissimos. Molestias explicabo corporis voluptatem?
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              className="h-56 w-full object-cover"
            />

            <div className="bg-white p-4 sm:p-6">
              <time datetime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-gray-900">How to position your furniture for positivity</h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                dignissimos. Molestias explicabo corporis voluptatem?
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              className="h-56 w-full object-cover"
            />

            <div className="bg-white p-4 sm:p-6">
              <time datetime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-gray-900">How to position your furniture for positivity</h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                dignissimos. Molestias explicabo corporis voluptatem?
              </p>
            </div>
          </article>
        </div>
      </div>


    </main>
  );
}
