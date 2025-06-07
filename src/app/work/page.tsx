import { Column, Text, RevealFx } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { about, person, work } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    path: work.path,
    image: `${baseURL}/api/og?title=${encodeURIComponent(work.title)}&type=work`,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`${baseURL}/og?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      <Column marginTop="64" fillWidth horizontal="center" gap="32" maxWidth="xl">
        <RevealFx delay={0.2}>
          <Text variant="display-strong-xl" align="center">
            {work.title}
          </Text>
        </RevealFx>
        <RevealFx delay={0.3}>
          <Text variant="heading-default-xl" align="center" onBackground="neutral-weak">
            {work.description}
          </Text>
        </RevealFx>
      </Column>

      <RevealFx delay={0.4}>
        <Column marginTop="0">
          <Projects />
        </Column>
      </RevealFx>
    </Column>
  );
}
