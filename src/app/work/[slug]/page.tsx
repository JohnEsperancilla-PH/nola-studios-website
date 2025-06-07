import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { getPosts } from "@/app/utils/utils";
import { AvatarGroup, Button, Column, Flex, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { about, person, work } from "@/app/resources/content";
import { formatDate } from "@/app/utils/formatDate";
import ScrollToHash from "@/components/ScrollToHash";
import { Metadata } from "next";
import { Meta, Schema } from "@/once-ui/modules";
import { WorkGallery } from "@/components/work/WorkGallery";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "work", "projects"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug) ? routeParams.slug.join('/') : routeParams.slug || '';

  const posts = getPosts(["src", "app", "work", "projects"])
  let post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image ? `${baseURL}${post.metadata.image}` : `${baseURL}/og?title=${post.metadata.title}`,
    path: `${work.path}/${post.slug}`,
  });
}

export default async function Project({
  params
}: { params: Promise<{ slug: string | string[] }> }) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug) ? routeParams.slug.join('/') : routeParams.slug || '';

  let post = getPosts(["src", "app", "work", "projects"]).find((post) => post.slug === slugPath);

  if (!post) {
    notFound();
  }

  const avatars =
    post.metadata.team?.map((person) => ({
      src: person.avatar,
    })) || [];

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="m">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={`${baseURL}/og?title=${encodeURIComponent(post.metadata.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      <Column maxWidth="xs" gap="8">
        <Button 
          data-border="rounded" 
          href="/work" 
          variant="tertiary" 
          weight="default" 
          size="s" 
          prefixIcon="chevronLeft"
          style={{ marginBottom: '4px' }}
        >
          Projects
        </Button>
      </Column>

      <WorkGallery 
        images={post.metadata.images} 
        title={post.metadata.title}
        summary={post.metadata.summary}
        publishedAt={post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
      />

      {post.metadata.team && (
        <Column style={{ margin: "auto" }} as="article" maxWidth="xs">
          <Flex gap="8" marginBottom="16" vertical="center">
            <AvatarGroup reverse avatars={avatars} size="m" />
          </Flex>
        </Column>
      )}
      <ScrollToHash />
    </Column>
  );
}
