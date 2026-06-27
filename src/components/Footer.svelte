<script>
  const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="footer-container">
    <div class="footer-content">
      <p>&copy; {currentYear} My Portfolio. All rights reserved.</p>
    </div>
  </div>
</footer>

<style>
  .footer {
    background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
    color: white;
    padding: 2rem 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer-content {
    text-align: center;
    color: var(--neutral-400);
  }
</style>
