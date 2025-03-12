import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { getHero, getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";

// Define PortableText component types
const components: Partial<PortableTextReactComponents> = {
  marks: {
    textColor: ({
      children,
      value,
    }: {
      children: React.ReactNode;
      value?: { value: string };
    }) => <span style={{ color: value?.value }}>{children}</span>,
    highlightColor: ({
      children,
      value,
    }: {
      children: React.ReactNode;
      value?: { value: string };
    }) => <span style={{ backgroundColor: value?.value }}>{children}</span>,
  },
};

const Page = async () => {
  const projects = await getProjects();
  const hero = await getHero();

  return (
    <>
      <section className="grid grid-cols-2">
        {hero ? (
          <>
            <div>
              {/* Use updated PortableText configuration */}
              <PortableText value={hero.description} components={components} />
              {hero.button && (
                <a
                  href={hero.button.url}
                  className="hero-button flex items-center gap-2"
                >
                  {hero.button.icon && (
                    <Image
                      src={hero.button.icon}
                      alt="Button Icon"
                      width={24}
                      height={24}
                    />
                  )}
                  {hero.button.text}
                </a>
              )}

              <div className="hero-icons flex gap-3">
                {hero.icons?.map((icon, index) => (
                  <Image
                    key={index}
                    src={icon.url}
                    alt={icon.alt || `Icon ${index}`}
                    width={40}
                    height={40}
                  />
                ))}
              </div>
            </div>
            {hero.image && (
              <Image
                src={
                  typeof hero.image === "string" ? hero.image : hero.image?.url
                }
                alt={hero.imageAlt || "Hero Image"}
                width={800}
                height={400}
                priority
              />
            )}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </section>

      <section className="flex items-center justify-center w-full border">
        <div className="max-w-7xl">
          <div className="w-full text-5xl font-bold text-[#3B82F6]">
            Recent Projects
          </div>
          <div className="w-full">
            {projects.map((project) => (
              <div
                key={project._id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-10 pb-5"
              >
                <div className="space-y-6 h-full flex flex-col">
                  <div className="w-full text-2xl text-gray-800 font-bold">
                    {project.name}
                  </div>
                  <div className="space-y-6 text-gray-600">
                    {/* Apply updated PortableText configuration */}
                    <PortableText
                      value={project.description}
                      components={components}
                    />
                    <h2 className="text-gray-800">
                      Tools and Frameworks used:
                    </h2>
                    <div className="flex flex-wrap items-center gap-4">
                      {project.icons.map((icon, index) => (
                        <button
                          key={index}
                          className="flex items-center justify-center gap-2 border border-blue-500 text-blue-500 py-2 px-3 rounded-lg"
                        >
                          <Image
                            src={icon.iconFile}
                            width={22}
                            height={22}
                            alt={`icon-${index}`}
                          />
                          <span>{icon.title}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <Image
                    src={project.image}
                    width={500}
                    height={500}
                    alt={project.name}
                    className="w-full object-fill"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
