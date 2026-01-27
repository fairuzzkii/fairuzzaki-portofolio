// src/app/work/page.tsx
import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import ClientCategoryFilter from "@/components/work/ClientCategoryFilter";
import { getPosts } from "@/utils/utils"; // Safe here – server only

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default async function Work() {
  // Fetch ALL projects once on server
  const allProjects = getPosts(["src", "app", "work", "projects"]);

  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {work.title}
      </Heading>

      {/* Pass raw posts data to client component */}
      <ClientCategoryFilter initialProjects={allProjects} />
    </Column>
  );
}