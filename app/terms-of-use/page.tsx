import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Terms of Use | ${config.appName}`,
  canonicalUrlRelative: "/terms-of-use",
});

const TermsOfUse = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms of Use for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: August 15, 2025

Welcome to Cocofuel ("we," "us," or "our"). These Terms of Use ("Terms") govern your use of our website and services related to our natural coconut water hydration products.

By accessing or using our website, purchasing our products, or using our services, you agree to be bound by these Terms. If you do not agree with these Terms, please do not use our services.

1. Product Information and Use

1.1 Natural Hydration Products
Cocofuel offers natural coconut water-based hydration and energy products. Our products are made with natural ingredients and are designed to provide sustained energy and optimal hydration.

1.2 Health and Dietary Considerations
- Our products are not intended to diagnose, treat, cure, or prevent any disease
- Consult your healthcare provider before use if you are pregnant, nursing, or have any medical conditions
- Individual results may vary based on personal health, diet, and fitness levels
- Products contain natural coconut water and may not be suitable for those with coconut allergies

1.3 Intended Use
Products are intended for healthy adults as part of a balanced diet and active lifestyle. Not recommended for children under 12 without parental supervision.

2. Orders and Payment

2.1 Order Acceptance
All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order at our discretion.

2.2 Pricing and Payment
- Prices are subject to change without notice
- Payment is required at time of order
- We accept major credit cards and digital payment methods
- All payments are processed securely through third-party processors

2.3 Shipping and Delivery
- Shipping times are estimates and not guaranteed
- Risk of loss passes to you upon delivery
- Free shipping on orders over $50 (US only)

3. User Accounts and Responsibilities

3.1 Account Creation
You may create an account to track orders and access personalized features. You are responsible for maintaining the confidentiality of your account credentials.

3.2 Prohibited Uses
You may not:
- Use our services for any unlawful purpose
- Attempt to interfere with our website's functionality
- Copy, modify, or distribute our content without permission
- Make false or misleading statements about our products

4. Intellectual Property

4.1 Our Content
All content on our website, including text, graphics, logos, and product formulations, is protected by copyright and trademark laws. The Cocofuel name and logo are our trademarks.

4.2 Your Content
If you submit reviews, comments, or other content, you grant us a non-exclusive right to use such content for marketing and promotional purposes.

5. Health Disclaimers and Limitations

5.1 No Medical Claims
Our products are dietary supplements and food products. They have not been evaluated by the FDA and are not intended to replace professional medical advice.

5.2 Limitation of Liability
To the fullest extent permitted by law:
- We are not liable for indirect, incidental, or consequential damages
- Our total liability is limited to the amount you paid for products
- We make no warranties beyond those required by law

5.3 Assumption of Risk
You acknowledge that physical activity and dietary changes involve inherent risks. Consult healthcare professionals before making significant changes to your diet or exercise routine.

6. Returns and Refunds

6.1 Satisfaction Guarantee
We offer a 30-day satisfaction guarantee on unopened products. Contact our support team to initiate a return.

6.2 Return Conditions
- Products must be unopened and in original packaging
- Shipping costs for returns are customer's responsibility unless product is defective
- Refunds processed within 5-10 business days

7. Privacy and Data Protection

Your privacy is important to us. Please review our Privacy Policy, which governs how we collect and use your personal information.

8. Modifications and Termination

8.1 Changes to Terms
We may update these Terms at any time. Continued use of our services constitutes acceptance of modified Terms.

8.2 Service Availability
We reserve the right to suspend or discontinue services without notice, though we will make reasonable efforts to provide advance notice when possible.

9. Dispute Resolution

9.1 Governing Law
These Terms are governed by the laws of the United States and the state where our business is registered.

9.2 Contact for Disputes
Before pursuing legal action, please contact us at support@cocofuel.net to resolve any issues.

10. Contact Information

For questions about these Terms of Use, please contact us at:

Email: support@cocofuel.net
Website: Contact Us page

By using Cocofuel products and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.`}
        </pre>
      </div>
    </main>
  );
};

export default TermsOfUse;
