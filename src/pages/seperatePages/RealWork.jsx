import ProjectCard from "../../utils/ProjectCard";
import project1 from "../../assets/FrontPagePoster.jpg";
import project2 from "../../assets/FrontPagePoster.jpg";
import project3 from "../../assets/FrontPagePoster.jpg";
import project4 from "../../assets/FrontPagePoster.jpg";
import project5 from "../../assets/FrontPagePoster.jpg";
import project6 from "../../assets/FrontPagePoster.jpg";

const projects = [
  {
    title: "Horizon Headquarters",
    category: "Architecture",
    year: "2024",
    image: project1,
  },
  {
    title: "Luxe Brand Identity",
    category: "Branding",
    year: "2024",
    image: project2,
  },
  {
    title: "Fintech App Redesign",
    category: "Digital",
    year: "2023",
    image: project3,
  },
  {
    title: "Modern Art Gallery",
    category: "Architecture",
    year: "2023",
    image: project4,
  },
  {
    title: "Gastro Experience",
    category: "Branding",
    year: "2024",
    image: project5,
  },
  {
    title: "EV Launch Campaign",
    category: "Product",
    year: "2024",
    image: project6,
  },
];

const RealWork = ({ activeFilter }) => {
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols    -3 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RealWork;
