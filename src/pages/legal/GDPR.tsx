import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const GDPR = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              GDPR Compliance
            </h1>
            <p className="text-muted-foreground">
              Your rights under the General Data Protection Regulation
            </p>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">Your Rights Under GDPR</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you are in the European Union, you have the following rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Right to be informed:</strong> You have the right to know how we collect and use your data</li>
                <li><strong>Right of access:</strong> You can request a copy of the personal data we hold about you</li>
                <li><strong>Right to rectification:</strong> You can ask us to correct inaccurate personal data</li>
                <li><strong>Right to erasure:</strong> You can request that we delete your personal data</li>
                <li><strong>Right to restrict processing:</strong> You can limit how we use your data</li>
                <li><strong>Right to data portability:</strong> You can request your data in a portable format</li>
                <li><strong>Right to object:</strong> You can object to certain types of processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">Legal Basis for Processing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We process your personal data under the following legal bases:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Consent:</strong> When you explicitly agree to data processing</li>
                <li><strong>Contract:</strong> When processing is necessary to fulfill our contract with you</li>
                <li><strong>Legal obligation:</strong> When we must process data to comply with legal requirements</li>
                <li><strong>Legitimate interests:</strong> When processing serves our legitimate business interests</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">Data Protection Officer</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about data protection or to exercise your rights, you can contact our 
                Data Protection Officer at dpo@con-struct.bond.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal data only for as long as necessary to fulfill the purposes 
                for which it was collected, unless a longer retention period is required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">International Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                If we transfer your data outside the EU, we ensure appropriate safeguards are in place 
                to protect your data, including adequacy decisions or standard contractual clauses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">Automated Decision Making</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not use automated decision-making or profiling that would significantly affect you 
                without human intervention.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">Supervisory Authority</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to lodge a complaint with your local data protection supervisory 
                authority if you believe we have not handled your data appropriately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">How to Exercise Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                To exercise any of your GDPR rights, please contact us at hello@con-struct.bond or 
                dpo@con-struct.bond. We will respond to your request within 30 days and may ask for 
                identification to verify your identity.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GDPR;