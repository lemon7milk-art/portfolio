<div class="hero">
  <div class="hero-content">
    <div class="hero-text">
      <h1 class="hero-title">
        Hi, I'm <span class="gradient-text">Creative Developer</span>
      </h1>
      <p class="hero-subtitle">
        Building beautiful and functional digital experiences with modern technologies
      </p>
      <div class="hero-buttons">
        <a href="#projects" class="btn btn-primary">View My Work</a>
        <a href="#contact" class="btn btn-secondary">Get In Touch</a>
      </div>
    </div>
    <div class="hero-image">
      <div class="gradient-blob"></div>
      <div class="gradient-blob-secondary"></div>
    </div>
  </div>
</div>

<style>
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 4rem 1.5rem;
    background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
  }

  .hero-content {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .hero-text {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .hero-title {
    font-size: clamp(2.5rem, 8vw, 4rem);
    font-weight: 800;
    line-height: 1.2;
    color: var(--neutral-900);
  }

  .gradient-text {
    background: linear-gradient(135deg, #0066ff 0%, #00d9ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-subtitle {
    font-size: 1.25rem;
    color: var(--neutral-600);
    line-height: 1.6;
    max-width: 500px;
  }

  .hero-buttons {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .btn {
    padding: 1rem 2rem;
    border-radius: var(--radius-lg);
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: all var(--transition-base);
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .btn-primary {
    background: linear-gradient(135deg, #0066ff 0%, #00d9ff 100%);
    color: white;
    box-shadow: var(--shadow-md);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }

  .btn-secondary {
    background: transparent;
    color: var(--primary);
    border: 2px solid var(--primary);
  }

  .btn-secondary:hover {
    background: var(--primary);
    color: white;
    transform: translateY(-2px);
  }

  .hero-image {
    position: relative;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .gradient-blob {
    position: absolute;
    width: 300px;
    height: 300px;
    background: linear-gradient(135deg, #0066ff 0%, #00d9ff 100%);
    border-radius: 38% 62% 58% 42% / 58% 38% 62% 42%;
    opacity: 0.1;
    animation: blobAnimation 8s infinite;
  }

  .gradient-blob-secondary {
    position: absolute;
    width: 200px;
    height: 200px;
    background: linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%);
    border-radius: 71% 29% 66% 34% / 41% 58% 42% 59%;
    opacity: 0.08;
    animation: blobAnimation 6s infinite reverse;
  }

  @keyframes blobAnimation {
    0% {
      transform: translate(0, 0) scale(1);
    }
    50% {
      transform: translate(30px, -50px) scale(1.1);
    }
    100% {
      transform: translate(0, 0) scale(1);
    }
  }

  @media (max-width: 768px) {
    .hero-content {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .hero {
      min-height: auto;
      padding: 2rem 1.5rem;
    }

    .hero-image {
      height: 250px;
    }

    .gradient-blob {
      width: 200px;
      height: 200px;
    }

    .gradient-blob-secondary {
      width: 150px;
      height: 150px;
    }

    .hero-buttons {
      flex-direction: column;
    }

    .btn {
      width: 100%;
    }
  }
</style>
