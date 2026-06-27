<script>
  const skills = [
    { category: '자격증', items: ['빅데이터 분석기사', '산업 안전기사', '정보처리 기사'] },
    { category: '학력', items: ['교육데이터 컨설팅 분석 석사', '데이터 분석'] },
    { category: '관심사', items: ['클라이밍', '수영', '데이터 시각화', '머신러닝'] },
  ];
</script>

<section id="about" class="about">
  <div class="about-container">
    <div class="about-content">
      <div class="section-header">
        <h2 class="section-title">소개</h2>
      </div>

      <div class="about-grid">
        <div class="about-text">
          <p>
            저는 데이터 기반의 문제 해결을 좋아하는 데이터 분석가 해니입니다. 빅데이터 분석 기술을 활용하여 복잡한 데이터에서 의미 있는 인사이트를 도출하고, 이를 통해 조직의 의사결정을 지원합니다.
          </p>
          <p>
            산업 안전과 데이터 분석 분야에서의 전문성을 바탕으로, 더 나은 일터를 만드는 데 기여하고 싶습니다. 또한 꾸준한 자기계발을 통해 최신 데이터 기술을 습득하고 있습니다.
          </p>
        </div>

        <div class="skills-section">
          <h3 class="skills-title">자격증 & 학력 & 취미</h3>
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
