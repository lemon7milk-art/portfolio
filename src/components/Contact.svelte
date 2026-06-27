<script>
  let formData = $state({
    name: '',
    email: '',
    message: '',
  });
  let submitted = $state(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    submitted = true;
    setTimeout(() => {
      submitted = false;
      formData = { name: '', email: '', message: '' };
    }, 3000);
  };

  const socialLinks = [
    { icon: '𝓰', label: 'GitHub', href: 'https://github.com/lemon7milk-art' },
    { icon: '𝓵', label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: '𝓽', label: 'Twitter', href: 'https://twitter.com' },
  ];
</script>

<section id="contact" class="contact">
  <div class="contact-container">
    <div class="section-header">
      <h2 class="section-title">연락하기</h2>
      <p class="section-subtitle">함께 멋진 프로젝트를 만들어봐요</p>
    </div>

    <div class="contact-content">
      <form onsubmit={handleSubmit} class="contact-form">
        <div class="form-group">
          <label for="name">이름</label>
          <input
            type="text"
            id="name"
            name="name"
            bind:value={formData.name}
            placeholder="홍길동"
            required
          />
        </div>

        <div class="form-group">
          <label for="email">이메일</label>
          <input
            type="email"
            id="email"
            name="email"
            bind:value={formData.email}
            placeholder="your@example.com"
            required
          />
        </div>

        <div class="form-group">
          <label for="message">메시지</label>
          <textarea
            id="message"
            name="message"
            bind:value={formData.message}
            placeholder="프로젝트에 대해 말씀해주세요..."
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" class="submit-btn">메시지 보내기</button>
        {#if submitted}
          <div class="success-message">✓ 메시지가 성공적으로 전송되었습니다!</div>
        {/if}
      </form>

      <div class="contact-info">
        <div class="social-links">
          <h3>함께 연결하기</h3>
          <div class="social-icons">
            {#each socialLinks as social}
              <a href={social.href} class="social-link" title={social.label}>
                {social.icon}
              </a>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .contact {
    padding: 6rem 1.5rem;
    background: white;
    border-top: 1px solid var(--neutral-200);
  }

  .contact-container {
    max-width: 900px;
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

  .contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form-group label {
    font-weight: 600;
    color: var(--neutral-900);
  }

  .form-group input,
  .form-group textarea {
    padding: 1rem;
    border: 1px solid var(--neutral-300);
    border-radius: var(--radius-md);
    font-family: inherit;
    font-size: 1rem;
    transition: all var(--transition-fast);
    color: var(--neutral-900);
  }

  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);
  }

  .submit-btn {
    background: linear-gradient(135deg, #0066ff 0%, #00d9ff 100%);
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: var(--radius-md);
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all var(--transition-base);
    box-shadow: var(--shadow-md);
  }

  .submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }

  .success-message {
    background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.05));
    color: var(--success);
    padding: 1rem;
    border-radius: var(--radius-md);
    border: 1px solid rgba(34, 197, 94, 0.3);
    text-align: center;
    font-weight: 500;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
  }

  .social-links h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--neutral-900);
    margin-bottom: 1.5rem;
  }

  .social-icons {
    display: flex;
    gap: 1rem;
  }

  .social-link {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #0066ff 0%, #00d9ff 100%);
    border-radius: var(--radius-md);
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    transition: all var(--transition-base);
  }

  .social-link:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }

  @media (max-width: 768px) {
    .contact {
      padding: 3rem 1.5rem;
    }

    .contact-content {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .contact-info {
      justify-content: flex-start;
    }
  }
</style>
