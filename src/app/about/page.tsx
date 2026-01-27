import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
    {
      title: about.organizational?.title ?? "Organization",
      display: about.organizational?.display ?? false,
      items: about.organizational?.organizations?.map((o) => o.name) ?? [],
    },
    {
      title: about.certifications?.title ?? "Certifications",
      display: about.certifications?.display ?? false,
      items: about.certifications?.list?.map((c) => c.name) ?? [],
    },
    {
      title: about.awards?.title ?? "Awards",
      display: about.awards?.display ?? false,
      items: about.awards?.list?.map((a) => a.name) ?? [],
    },

  ];
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Row fillWidth s={{ direction: "column"}} horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            top="64"
            fitHeight
            position="sticky"
            s={{ position: "relative", style: { top: "auto" } }}
            xs={{ style: { top: "auto" } }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Row gap="8" vertical="center">
        <Icon onBackground="accent-weak" name="globe" />
          <div>
            <div>{person.city}</div>
            <div style={{ fontSize: "0.85rem", opacity: 0.7 }}>
              {person.country}
            </div>
          </div>
            </Row>
            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Row
                fitWidth
                border="brand-alpha-medium"
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
              >
                <Icon paddingLeft="12" name="document" onBackground="brand-weak" />
                <Row paddingX="8">Let's Collaborate – View My CV</Row>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Row>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Row
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social
                      .filter((item) => item.essential)
                      .map(
                  (item) =>
                    item.link && (
                      <React.Fragment key={item.name}>
                        <Row s={{ hide: true }}>
                          <Button
                            key={item.name}
                            href={item.link}
                            prefixIcon={item.icon}
                            label={item.name}
                            size="s"
                            weight="default"
                            variant="secondary"
                          />
                        </Row>
                        <Row hide s={{ hide: false }}>
                          <IconButton
                            size="l"
                            key={`${item.name}-icon`}
                            href={item.link}
                            icon={item.icon}
                            variant="secondary"
                          />
                        </Row>
                      </React.Fragment>
                    ),
                )}
              </Row>
            )}
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {about.intro.description}
            </Column>
          )}

          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map(
                        (achievement: React.ReactNode, index: number) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${experience.company}-${index}`}
                          >
                            {achievement}
                          </Text>
                        ),
                      )}
                    </Column>
                    {experience.images && experience.images.length > 0 && (
                      <Row fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                        {experience.images.map((image, index) => (
                          <Row
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="40"
              >
                {about.technical.title}
              </Heading>
              <Column fillWidth gap="l">
                {about.technical.skills.map((skill, index) => (
                  <Column key={`${skill}-${index}`} fillWidth gap="4">
                    <Text id={skill.title} variant="heading-strong-l">
                      {skill.title}
                    </Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                    {skill.tags && skill.tags.length > 0 && (
                      <Row wrap gap="8" paddingTop="8">
                        {skill.tags.map((tag, tagIndex) => (
                          <Tag key={`${skill.title}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                            {tag.name}
                          </Tag>
                        ))}
                      </Row>
                    )}
                    {skill.images && skill.images.length > 0 && (
                      <Row fillWidth paddingTop="m" gap="12" wrap>
                        {skill.images.map((image, index) => (
                          <Row
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}
{about.organizational?.display && (
  <>
    <Heading
      as="h2"
      id={about.organizational.title}
      variant="display-strong-s"
      marginTop="l"
      marginBottom="m"
    >
      {about.organizational.title}
    </Heading>

    <Column fillWidth gap="l" marginBottom="40">
      {about.organizational.organizations.map((org, index) => (
        <Column key={`${org.name}-${index}`} fillWidth gap="4">
          <Text id={org.name} variant="heading-strong-l">
            {org.name}
          </Text>

          <Text variant="body-default-s" onBackground="neutral-weak">
            {org.role} • {org.timeframe}
          </Text>

          <Text variant="body-default-m">{org.description}</Text>

          {/* IMAGES */}
          {org.images && org.images.length > 0 && (
            <Row fillWidth paddingTop="m" gap="12" wrap>
              {org.images.map((image, idx) => (
                <Row
                  key={idx}
                  border="neutral-medium"
                  radius="m"
                  minWidth={image.width}
                  height={image.height}
                >
                  <Media
                    enlarge
                    radius="m"
                    sizes={image.width.toString()}
                    alt={image.alt}
                    src={image.src}
                  />
                </Row>
              ))}
            </Row>
          )}
        </Column>
      ))}
    </Column>
  </>
)}


{about.certifications?.display && (
  <>
    <Heading
      as="h2"
      id={about.certifications.title}
      variant="display-strong-s"
      marginTop="m"
      marginBottom="m"
    >
      {about.certifications.title}
    </Heading>

    <Column fillWidth gap="l" marginBottom="40">
      {about.certifications.list.map((cert, index) => (
        <Column key={index} gap="4">
          <Text variant="heading-strong-l">{cert.name}</Text>
          <Text variant="body-default-s" onBackground="neutral-weak">
            {cert.issuer} • {cert.year}
          </Text>
          <Text variant="body-default-m">{cert.description}</Text>

          {/* IMAGES */}
          {cert.images && cert.images.length > 0 && (
            <Row fillWidth paddingTop="m" gap="12" wrap>
              {cert.images.map((image, idx) => (
                <Row
                  key={idx}
                  border="neutral-medium"
                  radius="m"
                  minWidth={image.width}
                  height={image.height}
                >
                  <Media
                    enlarge
                    radius="m"
                    sizes={image.width.toString()}
                    alt={image.alt}
                    src={image.src}
                  />
                </Row>
              ))}
            </Row>
          )}
        </Column>
      ))}
    </Column>
  </>
)}


{about.awards?.display && (
  <>
    <Heading
      as="h2"
      id={about.awards.title}
      variant="display-strong-s"
      marginTop="m"
      marginBottom="m"
    >
      {about.awards.title}
    </Heading>

    <Column fillWidth gap="l">
      {about.awards.list.map((award, index) => (
        <Column key={index} gap="4">
          <Text variant="heading-strong-l">{award.name}</Text>
          <Text variant="body-default-s" onBackground="neutral-weak">
          {award.year}
          </Text>
          <Text variant="body-default-m">{award.description}</Text>

          {/* IMAGES */}
          {award.images && award.images.length > 0 && (
            <Row fillWidth paddingTop="m" gap="12" wrap>
              {award.images.map((image, idx) => (
                <Row
                  key={idx}
                  border="neutral-medium"
                  radius="m"
                  minWidth={image.width}
                  height={image.height}
                >
                  <Media
                    enlarge
                    radius="m"
                    sizes={image.width.toString()}
                    alt={image.alt}
                    src={image.src}
                  />
                </Row>
              ))}
            </Row>
          )}
        </Column>
      ))}
    </Column>
  </>
)}
        </Column>
      </Row>
    </Column>
  );
}
