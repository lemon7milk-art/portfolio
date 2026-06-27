<script>
  let isOpen = $state(false);

  const toggleMenu = () => {
    isOpen = !isOpen;
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];
</script>

<nav class="navbar">
  <div class="nav-container">
    <div class="logo">
      <span class="logo-text">PORTFOLIO</span>
    </div>

    <div class="nav-menu" class:active={isOpen}>
      {#each navItems as item}
        <a href={item.href} class="nav-link" onclick={() => (isOpen = false)}>
          {item.label}
        </a>
      {/each}
    </div>

    <button class="nav-toggle" onclick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</nav>

<style>
  .navbar {
    position: sticky;
    top: 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow-sm);
    z-index: 1000;
  }

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
  }

  .logo {
    font-weight: 700;
    font-size: 1.5rem;
    background: linear-gradient(135deg, #0066ff, #00d9ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .logo-text {
    letter-spacing: 2px;
  }

  .nav-menu {
    display: flex;
    gap: 3rem;
    align-items: center;
  }

  .nav-link {
    color: var(--neutral-700);
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    position: relative;
    transition: color var(--transition-fast);
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #0066ff, #00d9ff);
    transition: width var(--transition-fast);
  }

  .nav-link:hover {
    color: var(--primary);
  }

  .nav-link:hover::after {
    width: 100%;
  }

  .nav-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
  }

  .nav-toggle span {
    width: 25px;
    height: 3px;
    background: var(--neutral-700);
    border-radius: 2px;
    transition: all var(--transition-fast);
  }

  @media (max-width: 768px) {
    .nav-toggle {
      display: flex;
    }

    .nav-menu {
      position: absolute;
      top: 70px;
      left: 0;
      right: 0;
      flex-direction: column;
      background: white;
      gap: 0;
      transform: translateX(-100%);
      transition: transform var(--transition-base);
      border-bottom: 1px solid var(--neutral-200);
    }

    .nav-menu.active {
      transform: translateX(0);
    }

    .nav-link {
      display: block;
      padding: 1rem 1.5rem;
      border-bottom: 1px solid var(--neutral-100);
      width: 100%;
    }

    .nav-link::after {
      display: none;
    }
  }
</style>
