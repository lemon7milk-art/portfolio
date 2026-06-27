<script>
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A modern web application built with cutting-edge technologies',
      tags: ['Astro', 'Svelte', 'Tailwind'],
      link: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Innovative design system and component library',
      tags: ['Design System', 'Components', 'Web'],
      link: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Full-stack application with real-time features',
      tags: ['Full-stack', 'Real-time', 'API'],
      link: '#',
      featured: false,
    },
  ];
</script>

<section id="projects" class="projects">
  <div class="projects-container">
    <div class="section-header">
      <h2 class="section-title">Featured Projects</h2>
      <p class="section-subtitle">Explore some of my recent work and side projects</p>
    </div>

    <div class="projects-grid">
      {#each projects as project}
        <div class="project-card" class:featured={project.featured}>
          <div class="project-image"></div>
          <div class="project-content">
            <h3 class="project-title">{project.title}</h3>
            <p class="project-description">{project.description}</p>
            <div class="project-tags">
              {#each project.tags as tag}
                <span class="tag">{tag}</span>
              {/each}
            </div>
            <a href={project.link} class="project-link">View Project →</a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .projects {
    padding: 6rem 1.5rem;
    background: white;
    border-top: 1px solid var(--neutral-200);
  }

  .projects-container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .section-title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 800;
    color: var(--neutral-900);
    margin-bottom: 1rem;
  }

  .section-subtitle {
    font-size: 1.25rem;
    color: var(--neutral-600);
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
  }

  .project-card {
    background: var(--neutral-50);
    border-radius: var(--radius-xl);
    overflow: hidden;
    transition: all var(--transition-base);
    border: 1px solid var(--neutral-200);
    display: flex;
    flex-direction: column;
  }

  .project-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary);
  }

  .project-card.featured {
    grid-column: span 1;
  }

  .project-image {
    width: 100%;
    height: 200px;
    background: linear-gradient(135deg, #0066ff 0%, #00d9ff 100%);
    opacity: 0.1;
  }

  .project-content {
    padding: 2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .project-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--neutral-900);
    margin-bottom: 0.75rem;
  }

  .project-description {
    color: var(--neutral-600);
    margin-bottom: 1.5rem;
    line-height: 1.6;
    flex: 1;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .tag {
    background: linear-gradient(135deg, rgba(0, 102, 255, 0.1), rgba(0, 217, 255, 0.1));
    color: var(--primary);
    padding: 0.4rem 0.8rem;
    border-radius: var(--radius-md);
    font-size: 0.875rem;
    font-weight: 500;
    border: 1px solid rgba(0, 102, 255, 0.2);
  }

  .project-link {
    color: var(--primary);
    text-decoration: none;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: gap var(--transition-fast);
  }

  .project-link:hover {
    gap: 1rem;
  }

  @media (max-width: 768px) {
    .projects {
      padding: 3rem 1.5rem;
    }

    .projects-grid {
      grid-template-columns: 1fr;
    }

    .project-card.featured {
      grid-column: span 1;
    }
  }
</style>
