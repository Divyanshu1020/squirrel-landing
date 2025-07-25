import Image from "next/image";
import React from "react";


function AIProductPhotographyPage() {
  const data = [
    {
      url: "https://instagram.fbho4-4.fna.fbcdn.net/v/t51.2885-15/522395649_1901811647220323_6017766670129916563_n.heic?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTQ0MC5zZHIuZjcxODc4LmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fbho4-4.fna.fbcdn.net&_nc_cat=111&_nc_oc=Q6cZ2QE4ghJzRd61ofujxwzDzyZmwPb_UJPviwPoCf3kZ79TH8yXOo1TYEV_b_Y5zEru7zA&_nc_ohc=Y0bvDE_Yig4Q7kNvwFfhGCl&_nc_gid=ucV5q_bt5LOrXnT1lR7MeA&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzY4MTQ3MTMzNzgxNTUyMTY3MA%3D%3D.3-ccb7-5&oh=00_AfQOxjQbGkM2nxS2co6VnJdjjHPWZu5zWF6yWlSvaEdPRw&oe=68892934&_nc_sid=7a9f4b",
    },
    {
      url: "https://instagram.fbho4-4.fna.fbcdn.net/v/t51.29350-15/519512777_1086481570112293_4723021568391125802_n.heic?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTQ0MC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fbho4-4.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2QE4ghJzRd61ofujxwzDzyZmwPb_UJPviwPoCf3kZ79TH8yXOo1TYEV_b_Y5zEru7zA&_nc_ohc=cSCTd5Vu3egQ7kNvwExvu5Z&_nc_gid=ucV5q_bt5LOrXnT1lR7MeA&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzY3NDI2NDY1MjczMDQyNzkxMA%3D%3D.3-ccb7-5&oh=00_AfQ2zOW0rIHxBBVKeNIbNwYt3QIWuWFKjTxOKDn8Y0MgVg&oe=68891030&_nc_sid=7a9f4b",
    },
    {
      url: "https://instagram.fbho4-2.fna.fbcdn.net/v/t51.2885-15/521543964_1974438553297147_8524589223621171661_n.heic?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTQ0MC5zZHIuZjcxODc4LmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fbho4-2.fna.fbcdn.net&_nc_cat=107&_nc_oc=Q6cZ2QE4ghJzRd61ofujxwzDzyZmwPb_UJPviwPoCf3kZ79TH8yXOo1TYEV_b_Y5zEru7zA&_nc_ohc=cx4LCy8FHrEQ7kNvwHRvtlb&_nc_gid=ucV5q_bt5LOrXnT1lR7MeA&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzY4MTQ3MTMzNzgwNzIwNTIxNg%3D%3D.3-ccb7-5&oh=00_AfSGQqwBfYfynRhx9ljIrRi3MEq3mrhuGkikEWcOE2Q9pg&oe=688939B1&_nc_sid=7a9f4b",
    },
    {
      url: "https://instagram.fbho4-1.fna.fbcdn.net/v/t51.2885-15/522650611_736165169348091_5876957555767490236_n.heic?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTQ0MC5zZHIuZjcxODc4LmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fbho4-1.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2QE4ghJzRd61ofujxwzDzyZmwPb_UJPviwPoCf3kZ79TH8yXOo1TYEV_b_Y5zEru7zA&_nc_ohc=dIze-L-0qRgQ7kNvwFl7ORV&_nc_gid=ucV5q_bt5LOrXnT1lR7MeA&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzY4MTQ3MTMzNzgxNTU0MDUxNA%3D%3D.3-ccb7-5&oh=00_AfQN3eWTi1uE0C423jxVi7MdvQEistBfw7Cn7A-TKuvpvA&oe=688946F3&_nc_sid=7a9f4b",
    },
    {
      url: "https://instagram.fbho4-3.fna.fbcdn.net/v/t51.2885-15/521949109_2552732578403776_1839665273416349701_n.heic?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTQ0MC5zZHIuZjcxODc4LmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fbho4-3.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2QE4ghJzRd61ofujxwzDzyZmwPb_UJPviwPoCf3kZ79TH8yXOo1TYEV_b_Y5zEru7zA&_nc_ohc=A3wAOt9XWKYQ7kNvwFTh3Np&_nc_gid=ucV5q_bt5LOrXnT1lR7MeA&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzY4MTQ3MTMzNzgzMjI1Nzc2OQ%3D%3D.3-ccb7-5&oh=00_AfQ8t1q-E2Tum7ikgrU627ZVI-sd2Ak-sVIOqDmkhNE93A&oe=688924FA&_nc_sid=7a9f4b",
    },
    {
      url: "https://instagram.fbho4-3.fna.fbcdn.net/v/t51.2885-15/521607176_623725743617450_1520647835349566323_n.heic?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTQ0MC5zZHIuZjcxODc4LmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fbho4-3.fna.fbcdn.net&_nc_cat=102&_nc_oc=Q6cZ2QE4ghJzRd61ofujxwzDzyZmwPb_UJPviwPoCf3kZ79TH8yXOo1TYEV_b_Y5zEru7zA&_nc_ohc=DAhwEwCFeNwQ7kNvwFYwqb4&_nc_gid=ucV5q_bt5LOrXnT1lR7MeA&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzY4MTQ3MTMzNzgwNzEyNTIyNg%3D%3D.3-ccb7-5&oh=00_AfSHUjly0Pl5IebB8H1Or9W4KlXj00rBZ03cUMn5N9uT9Q&oe=6889211E&_nc_sid=7a9f4b",
    },
    {
      url: "https://instagram.fbho4-2.fna.fbcdn.net/v/t51.2885-15/521886463_1296191018777854_4615581446960552529_n.heic?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTQ0MC5zZHIuZjcxODc4LmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fbho4-2.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QE4ghJzRd61ofujxwzDzyZmwPb_UJPviwPoCf3kZ79TH8yXOo1TYEV_b_Y5zEru7zA&_nc_ohc=ZyLO4t65ev4Q7kNvwFzH-L5&_nc_gid=ucV5q_bt5LOrXnT1lR7MeA&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzY4MTQ3MTMzNzgxNTUxNzU4MA%3D%3D.3-ccb7-5&oh=00_AfThQKo5gvc6QipRxx9TPPKSorqbd7bK9bgRke3lKwc4Zw&oe=68893A99&_nc_sid=7a9f4b",
    },
    {
      url: "https://instagram.fbho4-1.fna.fbcdn.net/v/t51.29350-15/517406424_750139977482624_8092872089839474096_n.heic?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTQ0MC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fbho4-1.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2QE4ghJzRd61ofujxwzDzyZmwPb_UJPviwPoCf3kZ79TH8yXOo1TYEV_b_Y5zEru7zA&_nc_ohc=xqiMAYkBhbUQ7kNvwFm_T4d&_nc_gid=ucV5q_bt5LOrXnT1lR7MeA&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzY3NDI2NDY1MjcxMzgwMjc5MA%3D%3D.3-ccb7-5&oh=00_AfTfnnwqW0L5AXFGk1lBszzb9Gj1VZOtIcLvC25DI2Uruw&oe=6889278A&_nc_sid=7a9f4b",
    },
    {
      url: "https://instagram.fbho4-3.fna.fbcdn.net/v/t51.29350-15/519275819_1502643211103272_149983709632515153_n.heic?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTQ0MC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fbho4-3.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2QE4ghJzRd61ofujxwzDzyZmwPb_UJPviwPoCf3kZ79TH8yXOo1TYEV_b_Y5zEru7zA&_nc_ohc=31f8zP03tZkQ7kNvwE9Xy6P&_nc_gid=ucV5q_bt5LOrXnT1lR7MeA&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzY3NDI2NDY1MjcwNTE3NzQ5OQ%3D%3D.3-ccb7-5&oh=00_AfQOnPY5OAh709GSiaavLk93lZkv4gMO6qx5hquaH8HIFw&oe=68894001&_nc_sid=7a9f4b",
    },
  ];
  return (
    <section className="w-full lg:max-w-7xl mx-auto px-6 py-16 bg-background">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left: Logo or Product Image */}
        <div className="w-full md:w-fit flex justify-center">
          <div className="relative w-full h-auto">
            <Image
              src="/images/logo.png"
              alt="AI Product Photography"
              width={474}
              height={795}
              className="rounded-2xl  w-full h-auto object-cover"
              quality={100}
            />
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="w-full  text-center md:text-left">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 multi-line-gradient font-poppins mx-auto">
            AI Product <br /> Photography
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-medium mb-8">
            We create stunning AI-generated videos and images that showcase your
            products like never before. Perfect for ads, ecommerce, and social
            media campaigns — without the cost of traditional photography.
          </p>
        </div>
      </div>
      <div className="mt-20 ">
        <div className=" mb-12">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 multi-line-gradient font-poppins">
            Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {data.map((item, index) => (
              <div className="relative w-full h-auto" key={index}>
                <Image
                  src={item.url}
                  alt="AI Product Photography"
                  width={307}
                  height={410}
                  className="rounded-2xl shadow-lg w-full h-auto object-cover"
                  quality={100}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="w-full lg:max-w-7xl mx-auto px-6 py-16 bg-background">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text Content */}
          <div className="w-full  text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight multi-line-gradient font-poppins">
              About Us
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground  font-medium">
              We’re a creative tech team building next-gen digital experiences
              for modern brands.
              From AI-generated media to full-stack product development, we
              deliver innovative solutions tailored for growth.
              Our mission is to make high-end content creation and automation
              accessible to everyone.
              Whether you're a startup or an enterprise, we help you stand out
              with bold visuals and smart technology.
              We value speed, quality, and storytelling — merging creativity
              with code.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default AIProductPhotographyPage;
