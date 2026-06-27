<script>
  const skills = [
    { category: 'Frontend', items: ['Astro', 'Svelte', 'React', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'Docker', 'Webpack', 'Vite'] },
  ];
</script>

<section id="about" class="about">
  <div class="about-container">
    <div class="about-content">
      <div class="section-header">
        <h2 class="section-title">About Me</h2>
      </div>

      <div class="about-grid">
        <div class="about-text">
          <p>
            I'm a passionate developer with a love for creating beautiful and functional digital experiences. 
            With expertise in modern web technologies, I focus on building scalable applications that delight users.
          </p>
          <p>
            When I'm not coding, you can find me exploring new design trends, contributing to open source, 
            or sharing knowledge with the developer community.
          </p>
        </div>

        <div class="skills-section">
          <h3 class="skills-title">Skills & Technologies</h3>
          <div class="skills-grid">
            {#each skills as skillGroup}
              <div class="skill-category">
                <h4 class="category-title">{skillGroup.category}</h4>
                <div class="skill-items">
                  {#each skillGroup.items as skill}
                    <div class="skill-item">{skill}</div>
                  {/each}
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .about {
    padding: 6rem 1.5rem;
    background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
    border-top: 1px solid var(--neutral-200);
  }

  .about-container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .section-title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 800;
    color: var(--neutral-900);
  }

  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
  }

  .about-text {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .about-text p {
    font-size: 1.1rem;
    color: var(--neutral-700);
    line-height: 1.8;
  }

  .skills-section {
    background: white;
    padding: 2.5rem;
    border-radius: var(--radius-xl);
    border: 1px solid var(--neutral-200);
  }

  .skills-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--neutral-900);
    margin-bottom: 2rem;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .skill-category {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .category-title {
    font-weight: 700;
    color: var(--primary);
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .skill-items {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .skill-item {
    background: linear-gradient(135deg, rgba(0, 102, 255, 0.1), rgba(0, 217, 255, 0.1));
    color: var(--primary);
    padding: 0.6rem 1.2rem;
    border-radius: var(--radius-md);
    font-size: 0.95rem;
    font-weight: 500;
    border: 1px solid rgba(0, 102, 255, 0.2);
    transition: all var(--transition-fast);
  }

  .skill-item:hover {
    background: linear-gradient(135deg, #0066ff, #00d9ff);
    color: white;
    border-color: transparent;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    .about {
      padding: 3rem 1.5rem;
    }

    .about-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .skills-section {
      padding: 2rem;
    }
  }
</style>
