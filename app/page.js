"use client";

import Link from "next/link";

export default function Page() {
  const year = new Date().getFullYear();

  return (
    <div className="page">
      <header>
        <div className="logo-wrap">
          {/* Place your transparent logo file as /public/bazaario-logo.png */}
          <img src="/bazaario-logo.png" alt="Bazaario logo" />
          <div className="logo-text">
            <span>BAZAARIO</span>
            <span>SEE IT LIVE. GET IT NOW</span>
          </div>
        </div>

        <div className="title-block">
          <span className="pill">Privacy Policy</span>
          <h1>Privacy Policy for Bazaario</h1>
          <p className="muted">
            <strong>Last updated:</strong> February 2026
          </p>
          <Link href="/terms" className="btn">
            Terms and Conditions
          </Link>
        </div>
      </header>

      <main>
        <section className="section">
          <p>
            Bazaario (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;)
            respects your privacy and is committed to protecting the personal
            data of all users, including buyers and sellers, who use our mobile
            application and related services (collectively, the &quot;Platform&quot;).
            This Privacy Policy explains how we collect, use, store, share, and
            protect your information when you use Bazaario.
          </p>
          <p>
            By accessing or using Bazaario, you agree to the practices described
            in this Privacy Policy.
          </p>
        </section>

        <section className="section">
          <h2>1. Information We Collect</h2>

          <h3>1.1 Information You Provide Directly</h3>
          <p>
            <strong>For Buyers:</strong>
          </p>
          <ul>
            <li>Name</li>
            <li>
              Phone number (used for account creation, login, and communication)
            </li>
            <li>Optional profile details</li>
            <li>Camera access (optional and user-controlled during video calls)</li>
          </ul>

          <p>
            <strong>For Sellers:</strong>
          </p>
          <ul>
            <li>Name and business details</li>
            <li>Phone number and email address</li>
            <li>
              GST number or other government-issued business identifiers (for
              verification and compliance)
            </li>
            <li>
              Bank account or payment-related details (required to process payouts)
            </li>
            <li>Business address and shop details</li>
          </ul>

          <h3>1.2 Information Collected Through Device Permissions</h3>
          <ul>
            <li>
              <strong>Camera access:</strong>
              <ul>
                <li>
                  Seller camera access is required to enable live video calls for
                  product showcasing.
                </li>
                <li>
                  Buyer camera access is optional and is turned off by default
                  unless explicitly enabled by the buyer.
                </li>
              </ul>
            </li>
            <li>
              <strong>Microphone access:</strong> Required during video calls for
              communication.
            </li>
          </ul>
          <p>
            Bazaario does <strong>not</strong> record or store video or audio
            calls unless explicitly stated and permitted by law.
          </p>

          <h3>1.3 Automatically Collected Information</h3>
          <ul>
            <li>Device information (device type, operating system)</li>
            <li>App usage data (features accessed, session duration)</li>
            <li>Log data and error reports</li>
          </ul>
        </section>

        <section className="section">
          <h2>2. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul>
            <li>Create and manage user accounts</li>
            <li>Enable buyer–seller communication via chat and video calls</li>
            <li>Verify seller identity and business legitimacy</li>
            <li>Process payments and settlements securely</li>
            <li>Contact users regarding transactions, support, or service updates</li>
            <li>Improve platform performance, security, and user experience</li>
            <li>Comply with legal and regulatory obligations</li>
          </ul>
        </section>

        <section className="section">
          <h2>3. Video Call &amp; Camera Usage Policy</h2>
          <ul>
            <li>
              Seller camera access is mandatory to facilitate live commerce and
              product demonstrations.
            </li>
            <li>Buyer camera access is optional and disabled by default.</li>
            <li>
              Bazaario does <strong>not</strong> access your camera or microphone
              without your explicit permission.
            </li>
            <li>
              Video calls are peer-to-peer and are not monitored, recorded, or
              stored by Bazaario.
            </li>
          </ul>
        </section>

        <section className="section">
          <h2>4. Payments and Financial Information</h2>
          <ul>
            <li>Seller payment details are collected solely for payout processing.</li>
            <li>All payment-related data is handled using secure, encrypted channels.</li>
            <li>
              Bazaario does not store full card or sensitive banking credentials
              where avoidable.
            </li>
            <li>
              Trusted third-party payment gateways may be used, subject to their own
              privacy policies.
            </li>
          </ul>
        </section>

        <section className="section">
          <h2>5. Data Sharing and Disclosure</h2>
          <p>
            We do <strong>not</strong> sell your personal data. We may share
            information only in the following cases:
          </p>
          <ul>
            <li>With payment partners to process transactions</li>
            <li>With verification services for seller onboarding and compliance</li>
            <li>
              With service providers who support app functionality (under strict
              confidentiality obligations)
            </li>
            <li>When required by law, court order, or government authority</li>
          </ul>
        </section>

        <section className="section">
          <h2>6. Data Retention</h2>
          <ul>
            <li>
              Personal data is retained only as long as necessary to fulfill business,
              legal, or regulatory purposes.
            </li>
            <li>
              Seller verification and financial records may be retained as required by
              applicable laws.
            </li>
            <li>
              Users may request account deletion, subject to legal retention
              requirements.
            </li>
          </ul>
        </section>

        <section className="section">
          <h2>7. Data Security</h2>
          <p>
            Bazaario implements reasonable technical and organizational measures to
            protect your data, including:
          </p>
          <ul>
            <li>Encryption of sensitive data</li>
            <li>Secure authentication mechanisms</li>
            <li>Restricted access to personal information</li>
          </ul>
          <p>However, no digital platform can guarantee absolute security.</p>
        </section>

        <section className="section">
          <h2>8. User Rights</h2>
          <p>Depending on applicable laws, users may have the right to:</p>
          <ul>
            <li>Access their personal data</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of their data</li>
            <li>Withdraw consent for optional permissions</li>
          </ul>
          <p>Requests can be made by contacting us using the details below.</p>
        </section>

        <section className="section">
          <h2>9. Children’s Privacy</h2>
          <p>
            Bazaario is not intended for users under the age of 18. We do not knowingly
            collect personal data from minors.
          </p>
        </section>

        <section className="section">
          <h2>10. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be
            reflected on this page with an updated date.
          </p>
        </section>

        <section className="section">
          <h2>11. Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy or your data,
            please contact us at:
          </p>
          <p>
            <strong>Email:</strong> ananyamangal05@gmail.com
            <br />
            <strong>Company Name:</strong> Bazaario
          </p>
        </section>

        <section className="section">
          <p className="muted">
            This Privacy Policy is drafted for startup-level compliance and should be
            reviewed by a legal professional before production use.
          </p>
        </section>
      </main>

      <footer>
        <nav className="footer-nav">
          <Link href="/terms">Terms and Conditions</Link>
          <span className="footer-sep">·</span>
          <span>&copy; {year} Bazaario. All rights reserved.</span>
        </nav>
      </footer>
    </div>
  );
}

