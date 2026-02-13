import ProjectCard from "../../utils/ProjectCard";
import project1 from "../../assets/project1.png"

const projects = [
  {
    title: "First Goal FC",
    image: project1,
    category: "Social Media Management",
  },
];

const RealWork = ({ activeFilter = "All" }) => {
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section className="h-screen px-10 py-16 lg:py-24 bg-primary">
      <div className="container mx-auto px-6 lg:px-12 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
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
            <p className="text-textSecondary text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RealWork;