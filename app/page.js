"use client";
import Image from "next/image";
import { client } from "@/cms/client";
import { PortableText } from "@portabletext/react";

export const revalidate = 10;

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
    smallDescription,
    "currentSlug": slug.current,
    content,
    _id
  }
`;

  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data.map((post) => {
        return (
          <div key={post._id} className="border border-white m-6">
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <PortableText value={post.content} />
          </div>
        );
      })}
    </main>
  );
}

