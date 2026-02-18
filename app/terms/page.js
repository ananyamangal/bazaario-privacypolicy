"use client";

import Link from "next/link";

export default function TermsPage() {
  const year = new Date().getFullYear();

  return (
    <div className="page">
      <header>
        <div className="logo-wrap">
          <img src="/bazaario-logo.png" alt="Bazaario logo" />
          <div className="logo-text">
            <span>BAZAARIO</span>
            <span>SEE IT LIVE. GET IT NOW</span>
          </div>
        </div>

        <div className="title-block">
          <span className="pill">Terms and Conditions</span>
          <h1>Terms and Conditions for Bazaario</h1>
          <p className="muted">
            <strong>Last Updated:</strong> February 2026
          </p>
          <Link href="/" className="btn">
            Privacy Policy
          </Link>
        </div>
      </header>

      <main>
        <section className="section">
          <p>
            These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the Bazaario mobile application, website, and related services (collectively, the &quot;Platform&quot;). By accessing or using Bazaario, you agree to be bound by these Terms.
          </p>
          <p>
            If you do not agree, please do not use the Platform.
          </p>
        </section>

        <section className="section">
          <h2>1. About Bazaario</h2>
          <p>
            Bazaario is a live commerce marketplace that enables sellers to showcase products through video calls and allows buyers to purchase products in real time.
          </p>
          <p>
            Bazaario acts as an intermediary platform between buyers and sellers and does not manufacture, own, or directly sell listed products unless explicitly stated.
          </p>
        </section>

        <section className="section">
          <h2>2. Eligibility</h2>
          <ul>
            <li>Users must be at least 18 years old.</li>
            <li>By registering, you confirm that the information provided is accurate and complete.</li>
            <li>Sellers must provide valid GST and business details for verification.</li>
          </ul>
        </section>

        <section className="section">
          <h2>3. Account Registration</h2>

          <h3>3.1 Buyers</h3>
          <ul>
            <li>Must provide a valid phone number.</li>
            <li>Are responsible for maintaining confidentiality of login credentials.</li>
          </ul>

          <h3>3.2 Sellers</h3>
          <ul>
            <li>Must provide accurate business details, GST number, and payout information.</li>
            <li>Are responsible for maintaining updated and accurate product listings.</li>
            <li>Are solely responsible for compliance with applicable tax and business laws.</li>
          </ul>
          <p>
            Bazaario reserves the right to suspend or terminate accounts for false information or policy violations.
          </p>
        </section>

        <section className="section">
          <h2>4. Live Video Commerce</h2>
          <ul>
            <li>Sellers are required to enable camera access during live selling sessions.</li>
            <li>Buyers may optionally enable camera access.</li>
            <li>Bazaario does not record or store video calls.</li>
            <li>Users must not engage in abusive, illegal, or inappropriate conduct during video calls.</li>
          </ul>
          <p>Violation may result in account suspension.</p>
        </section>

        <section className="section">
          <h2>5. Orders and Payments</h2>
          <ul>
            <li>All orders placed through Bazaario are binding once confirmed.</li>
            <li>Payments are processed via third-party payment gateways.</li>
            <li>Sellers receive payouts after successful order completion, subject to settlement timelines.</li>
            <li>Bazaario may deduct platform fees, commissions, or applicable charges.</li>
          </ul>
          <p>
            Bazaario is not responsible for payment failures caused by external payment providers.
          </p>
        </section>

        <section className="section">
          <h2>6. Delivery Policy</h2>
          <ul>
            <li>Sellers are responsible for packaging and dispatching products within the promised timeline.</li>
            <li>Delivery timelines are estimates and may vary based on logistics partners.</li>
            <li>Bazaario is not liable for delays caused by courier services, natural events, or force majeure.</li>
            <li>Risk of loss transfers to the buyer upon successful delivery.</li>
          </ul>
        </section>

        <section className="section">
          <h2>7. Return and Refund Policy</h2>

          <h3>7.1 Eligibility for Returns</h3>
          <p>Returns may be accepted in the following cases:</p>
          <ul>
            <li>Product received is damaged or defective</li>
            <li>Wrong product delivered</li>
            <li>Product significantly different from description</li>
          </ul>

          <h3>7.2 Non-Returnable Items</h3>
          <ul>
            <li>Perishable goods</li>
            <li>Customized or made-to-order products</li>
            <li>Personal care items (if opened)</li>
            <li>Items marked as non-returnable by the seller</li>
          </ul>

          <h3>7.3 Return Process</h3>
          <ul>
            <li>Buyers must initiate a return request within 48 hours of delivery.</li>
            <li>Proof (photos/videos) may be required.</li>
            <li>Seller approval may be required based on category.</li>
          </ul>

          <h3>7.4 Refunds</h3>
          <ul>
            <li>Refunds are processed after successful return verification.</li>
            <li>Refund timelines depend on payment method and gateway processing times.</li>
          </ul>
          <p>
            Bazaario reserves the right to reject fraudulent or abusive return requests.
          </p>
        </section>

        <section className="section">
          <h2>8. Seller Responsibilities</h2>
          <p>Sellers agree to:</p>
          <ul>
            <li>Sell only lawful products</li>
            <li>Provide accurate descriptions and pricing</li>
            <li>Fulfill orders promptly</li>
            <li>Honor approved return/refund requests</li>
            <li>Comply with applicable tax and consumer protection laws</li>
          </ul>
          <p>
            Bazaario may suspend sellers for repeated complaints or policy violations.
          </p>
        </section>

        <section className="section">
          <h2>9. Prohibited Activities</h2>
          <p>Users shall not:</p>
          <ul>
            <li>Post illegal, counterfeit, or restricted goods</li>
            <li>Use the platform for fraudulent purposes</li>
            <li>Harass, threaten, or abuse other users</li>
            <li>Attempt to bypass platform fees</li>
            <li>Misuse video or communication features</li>
          </ul>
        </section>

        <section className="section">
          <h2>10. Intellectual Property</h2>
          <p>
            All platform content, branding, logos, and technology are owned by Bazaario. Users may not copy, reproduce, or exploit platform materials without written permission.
          </p>
        </section>

        <section className="section">
          <h2>11. Limitation of Liability</h2>
          <p>
            Bazaario provides the Platform &quot;as is.&quot; To the maximum extent permitted by law:
          </p>
          <ul>
            <li>Bazaario is not liable for product quality or seller misconduct.</li>
            <li>Bazaario is not responsible for indirect, incidental, or consequential damages.</li>
            <li>Total liability shall not exceed the amount of platform fees paid in the relevant transaction.</li>
          </ul>
        </section>

        <section className="section">
          <h2>12. Indemnification</h2>
          <p>
            Users agree to indemnify and hold Bazaario harmless from claims arising out of misuse of the Platform, violation of these Terms, or breach of applicable laws.
          </p>
        </section>

        <section className="section">
          <h2>13. Account Suspension and Termination</h2>
          <p>Bazaario may suspend or terminate accounts for:</p>
          <ul>
            <li>Fraudulent activity</li>
            <li>Repeated complaints</li>
            <li>Policy violations</li>
            <li>Legal or regulatory requirements</li>
          </ul>
        </section>

        <section className="section">
          <h2>14. Governing Law and Jurisdiction</h2>
          <p>
            These Terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts located in Delhi, India.
          </p>
        </section>

        <section className="section">
          <h2>15. Changes to Terms</h2>
          <p>
            Bazaario reserves the right to modify these Terms at any time. Continued use of the Platform constitutes acceptance of updated Terms.
          </p>
        </section>

        <section className="section">
          <h2>16. Contact Information</h2>
          <p>For any queries regarding these Terms:</p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:support@bazaario.app">support@bazaario.app</a>
            <br />
            <strong>Company Name:</strong> Bazaario
          </p>
        </section>
      </main>

      <footer>
        <nav className="footer-nav">
          <Link href="/">Privacy Policy</Link>
          <span className="footer-sep">·</span>
          <span>&copy; {year} Bazaario. All rights reserved.</span>
        </nav>
      </footer>
    </div>
  );
}
