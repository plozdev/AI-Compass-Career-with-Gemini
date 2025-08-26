export default function Footer() {
  return (
    <footer className="footer">
      <div className="container max-w-6xl mx-auto px-5">
        <p><strong>GDGoC FPTU HCMC</strong> - Empowering students through technology</p>
        <p>Join our community of developers, designers, and innovators!</p>
        <div className="social-links">
          <a href="#" aria-label="Facebook" data-testid="link-facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" aria-label="Instagram" data-testid="link-instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="LinkedIn" data-testid="link-linkedin">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" aria-label="GitHub" data-testid="link-github">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <p style={{ marginTop: '20px', opacity: '0.8' }}>
          © 2024 GDGoC FPTU HCMC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
