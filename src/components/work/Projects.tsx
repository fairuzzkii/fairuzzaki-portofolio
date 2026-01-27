// src/components/work/Projects.tsx (updated – make it async server component)
import { getPosts } from "@/utils/utils";
import { Column } from "@once-ui-system/core";
import { ProjectCard } from "@/components"; // assume this is client or server ok

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
  category?: string;
}

export default async function Projects({ range, exclude, category }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]); // fs only on server

  if (category) {
    allProjects = allProjects.filter(
      (post) => post.metadata.category?.toLowerCase() === category.toLowerCase()
    );
  }

  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`/work/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
          link={post.metadata.link || ""}
        />
      ))}
    </Column>
  );
}