import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const EFFECTIVE_DATE = 'March 24, 2025';
const APP_NAME = 'Flippy';
const COMPANY = 'Pozzisoft';
const CONTACT_EMAIL = 'privacy@pozzisoft.com';

export default function PrivacyPolicy() {
  return (
    <main className="privacy">
      <div className="privacy-inner">
        <Link to="/" className="back-link">← Back to Products</Link>

        <header className="privacy-header">
          <p className="privacy-app">{APP_NAME}</p>
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-effective">Effective Date: {EFFECTIVE_DATE}</p>
        </header>

        <div className="privacy-body">
          <Section title="1. Introduction">
            <p>
              Welcome to <strong>{APP_NAME}</strong>, a product of <strong>{COMPANY}</strong>
              (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). This Privacy Policy describes
              how we collect, use, and handle your information when you use the {APP_NAME} mobile
              application (the &ldquo;App&rdquo;) on Android or iOS devices.
            </p>
            <p>
              By downloading or using the App you agree to the practices described in this Privacy
              Policy. If you do not agree, please do not use the App.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <h3>Camera Access &amp; Images</h3>
            <p>
              {APP_NAME} requests access to your device&rsquo;s camera to enable its core search
              feature. When you capture or upload a photo:
            </p>
            <ul>
              <li>The image is used <strong>temporarily and solely</strong> to perform the search you requested.</li>
              <li>Images are <strong>never stored</strong> on our servers beyond the time required to complete the search.</li>
              <li>Images are <strong>never saved</strong> to your device by the App.</li>
              <li>Images are <strong>not shared</strong> with third parties except as strictly necessary to process the search query.</li>
            </ul>
            <p>
              You may deny or revoke camera permission at any time through your device settings.
              Doing so will prevent the core camera-search feature from working.
            </p>

            <h3>Usage Data</h3>
            <p>
              We may automatically collect certain anonymous usage data, such as:
            </p>
            <ul>
              <li>App version and device type (e.g., Android, iOS)</li>
              <li>Crash reports and diagnostic information</li>
              <li>Feature interaction events (e.g., which features are used)</li>
            </ul>
            <p>
              This data does not identify you personally and is used only to improve the App.
            </p>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and operate the core features of the App.</li>
              <li>Analyze usage trends to improve user experience.</li>
              <li>Diagnose and fix technical issues.</li>
              <li>Comply with legal obligations.</li>
            </ul>
            <p>
              We do <strong>not</strong> sell, rent, or trade your personal information to any
              third party for marketing purposes.
            </p>
          </Section>

          <Section title="4. Data Sharing">
            <p>
              We may share information with third parties only in the following limited circumstances:
            </p>
            <ul>
              <li>
                <strong>Service providers:</strong> We may use third-party services (e.g., search
                APIs, analytics providers) to help operate the App. These providers are contractually
                obligated to use your information only to provide services to us.
              </li>
              <li>
                <strong>Legal requirements:</strong> We may disclose information if required by law
                or in response to valid legal processes.
              </li>
              <li>
                <strong>Business transfers:</strong> In the event of a merger, acquisition, or sale
                of all or substantially all of our assets, your information may be transferred as
                part of that transaction.
              </li>
            </ul>
          </Section>

          <Section title="5. Data Retention">
            <p>
              Camera images are processed in memory and are not retained after the search request
              completes. Anonymous usage data may be retained for up to <strong>12 months</strong>{' '}
              for analysis purposes before being deleted or anonymized.
            </p>
          </Section>

          <Section title="6. Children's Privacy">
            <p>
              The App is not directed to children under the age of 13. We do not knowingly collect
              personal information from children under 13. If you believe a child has provided us
              with personal information, please contact us so we can delete it.
            </p>
          </Section>

          <Section title="7. Security">
            <p>
              We take reasonable technical and organizational measures to protect information
              transmitted to and from the App. However, no method of transmission over the
              internet or method of electronic storage is 100% secure.
            </p>
          </Section>

          <Section title="8. Your Rights">
            <p>
              Depending on your location, you may have the following rights regarding your personal
              information:
            </p>
            <ul>
              <li>The right to know what personal data we hold about you.</li>
              <li>The right to request deletion of your personal data.</li>
              <li>The right to opt out of certain data practices.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="inline-link">{CONTACT_EMAIL}</a>.
            </p>
          </Section>

          <Section title="9. Third-Party Links">
            <p>
              The App may contain links to third-party websites or services. We are not responsible
              for the privacy practices of those third parties and encourage you to read their
              privacy policies.
            </p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. When we do, we will revise the
              &ldquo;Effective Date&rdquo; at the top of this page. We encourage you to review this
              policy periodically.
            </p>
          </Section>

          <Section title="11. Contact Us">
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <address className="contact-block">
              <strong>{COMPANY}</strong><br />
              Email:{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="inline-link">{CONTACT_EMAIL}</a>
            </address>
          </Section>
        </div>
      </div>
    </main>
  );
}

function Section({ title, children }) {
  return (
    <section className="privacy-section">
      <h2 className="privacy-section-title">{title}</h2>
      {children}
    </section>
  );
}
