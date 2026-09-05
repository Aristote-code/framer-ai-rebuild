// content for the "FAQ" section — extracted by extract-site.
// Edit values here to re-skin the "FAQ" section (copy, photos, links) without touching
// its layout, styles, or motion.

export default {
  inner: "Frequently asked questions",
  faqItem: "Is SSL free?",
  faqItem_2: "Yes, on every plan. SSL encrypts traffic between your site and its visitors. We automatically provision and renew certificates using providers like Let’s Encrypt and ZeroSSL.",
  faqItem_3: "Why is there no free trial for Advanced Hosting?",
  faqItem_4: "Since Advanced hosting requires provisioning specialized edge routing logic that consumes significant resources, we cannot offer a free trial. You can, however, test all standard hosting features on the free plan indefinitely.",
  faqItem_5: "When do I need the “Advanced hosting” add-on?",
  faqItem_6: "You need this add-on if you want to use Framer as a “reverse proxy”. This allows you to host your main site on Framer while serving specific subdirectories (like /app) from an external server (e.g. Vercel) under a single domain.",
  faqItem_7: "What counts as an “Origin”?",
  faqItem_8: "An “Origin” is any destination where your content lives. This can be another Framer project, an external server (like an AWS bucket), or a third party service. The Advanced hosting add-on lets you route traffic to multiple different Origins.",
  faqItem_9: "Does Framer include anti-spam?",
  faqItem_10: "Yes. We protect forms with built-in filtering that blocks automated submissions. This stops spam instantly without impacting the user experience for real humans.",
  faqItem_11: "How do I claim my free domain?",
  faqItem_12: "When you upgrade your site to any yearly plan, you can select a free custom domain (via our partner Hover) directly in your project settings. We handle the DNS setup for you.",
};
