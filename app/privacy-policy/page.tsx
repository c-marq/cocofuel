import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://fenago.com
// - Name: FeNAgO
// - Description: A Next.js agentic SaaS boilerplate to help entrepreneurs build AI-powered applications more efficiently
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: support@fenago.com

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
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
          Privacy Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: August 15, 2025

Thank you for visiting Cocofuel ("we," "us," or "our"). This Privacy Policy outlines how we collect, use, and protect your personal and non-personal information when you use our website and purchase our natural hydration products.

By accessing or using our website, purchasing our products, or using our services, you agree to the terms of this Privacy Policy. If you do not agree with the practices described in this policy, please do not use our services.

1. Information We Collect

1.1 Personal Information

We collect the following personal information from you:

Name: We collect your name to personalize your experience, process orders, and communicate with you effectively about your purchases and account.

Email Address: We collect your email address to send you order confirmations, shipping updates, customer support communications, and optional marketing communications (with your consent).

Shipping Address: We collect your shipping address to deliver your Cocofuel products to the correct location.

Payment Information: We collect payment details to process your orders securely. However, we do not store your complete payment information on our servers. Payments are processed by trusted third-party payment processors including Stripe and PayPal.

Phone Number (Optional): We may collect your phone number for order-related communications and delivery coordination.

Health and Dietary Preferences (Optional): If you provide this information, we use it to better recommend suitable products and improve our formulations.

1.2 Non-Personal Information

We use web cookies and similar technologies to collect non-personal information including:
- IP address and location data
- Browser type and version
- Device information and operating system
- Browsing patterns and pages visited
- Referral sources and search terms
- Purchase history and product preferences

This information helps us enhance your browsing experience, analyze website performance, improve our products, and provide personalized recommendations.

2. How We Use Your Information

We use your personal information for the following purposes:

2.1 Order Processing and Fulfillment
- Processing your orders and payments
- Arranging shipping and delivery
- Providing customer support and handling returns
- Sending order confirmations and shipping notifications

2.2 Account Management
- Creating and maintaining your customer account
- Tracking your order history and preferences
- Providing personalized product recommendations

2.3 Communication
- Responding to your inquiries and customer support requests
- Sending important updates about your orders or account
- Sending marketing communications (only with your explicit consent)
- Conducting customer satisfaction surveys

2.4 Business Operations
- Improving our products and services
- Analyzing trends and customer preferences
- Preventing fraud and ensuring website security
- Complying with legal obligations

3. Information Sharing and Disclosure

We do not sell, trade, or rent your personal information to third parties. We only share your information in the following circumstances:

3.1 Service Providers
We may share your information with trusted third-party service providers who assist us in:
- Payment processing (Stripe, PayPal)
- Shipping and logistics (FedEx, UPS, USPS)
- Email communications (our email service providers)
- Website hosting and analytics
- Customer support services

These providers are contractually required to protect your information and use it only for the specific services they provide to us.

3.2 Legal Requirements
We may disclose your information if required by law, court order, or government regulation, or to protect our rights, property, or safety, or that of our customers or others.

3.3 Business Transfers
In the event of a merger, acquisition, or sale of our business, your information may be transferred to the new owner, subject to the same privacy protections.

4. Data Security

We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:

- SSL encryption for data transmission
- Secure servers and databases
- Regular security audits and updates
- Limited access to personal information on a need-to-know basis
- Employee training on data privacy and security

However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.

5. Your Rights and Choices

You have the following rights regarding your personal information:

5.1 Access and Correction
You may request access to your personal information and request corrections to any inaccuracies.

5.2 Data Deletion
You may request deletion of your personal information, subject to certain legal and business requirements.

5.3 Marketing Communications
You can opt out of marketing emails by clicking the unsubscribe link in any marketing email or contacting us directly.

5.4 Cookies
You can control cookie settings through your browser preferences, though this may affect website functionality.

6. Children's Privacy

Cocofuel products are intended for adults and children over 12 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately so we can delete such information.

7. International Users

Our services are primarily intended for users in the United States. If you are accessing our website from outside the US, please be aware that your information may be transferred to, stored, and processed in the United States, where our servers are located and our business operates.

8. Cookies and Tracking Technologies

We use cookies and similar technologies to:
- Remember your preferences and login information
- Analyze website traffic and user behavior
- Provide personalized content and advertisements
- Improve website performance and functionality

You can manage your cookie preferences through your browser settings. For more detailed information about our use of cookies, please see our Cookie Policy.

9. Third-Party Links

Our website may contain links to third-party websites. This Privacy Policy does not apply to those websites, and we are not responsible for their privacy practices. We encourage you to read the privacy policies of any third-party websites you visit.

10. Updates to This Privacy Policy

We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. We will notify you of significant changes by:
- Posting the updated policy on our website
- Sending email notifications to registered users
- Displaying prominent notices on our website

Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy.

11. Contact Information

If you have any questions, concerns, or requests related to this Privacy Policy or our privacy practices, please contact us at:

Email: support@cocofuel.net
Website: Use our Contact Us form on the website

For data protection requests (access, correction, deletion), please include "Privacy Request" in your email subject line and provide specific details about your request.

Response Time: We will respond to your privacy-related inquiries within 30 days of receipt.

By using Cocofuel's website and services, you acknowledge that you have read, understood, and consent to the practices described in this Privacy Policy.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
