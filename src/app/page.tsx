import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
  Flex,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes, social } from "@/resources";
import Projects from "@/components/work/Projects";
import { Mailchimp } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Hero section */}
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Row>
            </Button>
          </RevealFx>
        </Column>
      </Column>

{/* Featured Projects */}
<RevealFx translateY="16" delay={0.6}>
  <Column fillWidth gap="l" marginY="m" horizontal="center">
    <Heading variant="display-strong-s" as="h2">
      Featured Projects
    </Heading>

    {/* Tampilkan project 1, 3, dan 8 secara terpisah */}
    <Column fillWidth gap="s">
      <Projects range={[1,1]} />   {/* project nomor 1 */}
      <Projects range={[3,3]} />   {/* project nomor 3 */}
      <Projects range={[8,8]} />   {/* project nomor 8 */}
    </Column>

    <Flex horizontal="center" marginTop="xs">
      <Button href="/work" variant="secondary" arrowIcon>
        View All Projects
      </Button>
    </Flex>
  </Column>
</RevealFx>

      {/* Technical Skills – garis atas & bawah sekarang SIMETRIS di tengah */}
      <Column fillWidth gap="m" marginY="l" horizontal="center">
        {/* Garis atas – center */}
        <Flex fillWidth horizontal="center">
          <Line maxWidth={48} />
        </Flex>

        <Column fillWidth horizontal="center" gap="24" marginTop="l">
          <Heading as="h2" variant="display-strong-xs" wrap="balance">
            Technical Skills
          </Heading>

          <Column fillWidth maxWidth="m" gap="l" horizontal="center">
            {about.technical.skills.map((category, index) => (
              <Column key={index} gap="m" horizontal="center" align="center">
                <Heading variant="heading-strong-m">{category.title}</Heading>

                {category.description && (
                  <Column maxWidth="s">
                    <Text
                      onBackground="neutral-weak"
                      variant="body-default-m"
                      align="center"
                    >
                      {category.description}
                    </Text>
                  </Column>
                )}

                {category.tags && category.tags.length > 0 && (
                  <Flex wrap gap="xs" horizontal="center">
                    {category.tags.map((tag, tagIdx) => (
                      <Badge
                        key={tagIdx}
                        background="neutral-alpha-weak"
                        onBackground="neutral-strong"
                        icon={tag.icon}
                      >
                        {tag.name}
                      </Badge>
                    ))}
                  </Flex>
                )}
              </Column>
            ))}
          </Column>
        </Column>

        {/* Garis bawah – center */}
        <Flex fillWidth horizontal="center">
          <Line maxWidth={48} />
        </Flex>

        <Flex horizontal="center" marginTop="l">
          <Button href="/about" variant="secondary" arrowIcon>
            View Full Profile
          </Button>
        </Flex>
      </Column>

      {/* Connect LinkedIn via Mailchimp component */}
      <Mailchimp />
    </Column>
  );
}