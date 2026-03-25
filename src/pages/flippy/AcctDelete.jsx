import React from "react";
import { Link } from "react-router-dom";
import "./AcctDelete.css";

function Section({ title, children }) {
  return (
    <section className="acct-delete-section">
      <h2 className="acct-delete-section-title">{title}</h2>
      {children}
    </section>
  );
}

const AcctDelete = () => {
  return (
    <main className="acct-delete-container">
      <div className="acct-delete-inner">
        <Link to="/" className="back-link">← Back to Products</Link>
        <header className="acct-delete-header">
          <h1 className="acct-delete-title">Delete Your Account</h1>
        </header>
        <div className="acct-delete-body">
          <Section title="How to Delete Your Account">
            <p>
              To delete your account, please follow these steps:
            </p>
            <ol>
              <li>
                Send an email to <a href="mailto:media@pozzisoft.com">media@pozzisoft.com</a>.
              </li>
              <li>
                Use the subject line: <strong>Delete my account</strong>.
              </li>
              <li>
                In the body of the email, confirm that you want to delete your account.
              </li>
              <li>
                Make sure to send the email from the address associated with the account you wish to delete.
              </li>
            </ol>
            <p>
              Once we receive your request, we will process the deletion and notify you by email.
            </p>
          </Section>
        </div>
      </div>
    </main>
  );
};

export default AcctDelete;
