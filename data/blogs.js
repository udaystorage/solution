import { blogContents } from "./blogContents";
export const blogs = [
  {
    id: 1,
    slug: "smarter-compliance-automation",
    title: "Smarter Compliance Automation",
    image: "/blog1.webp",
    date: "July 15, 2026",
    readTime: "5 min read",
    description:
      "How modern automation tools help teams eliminate manual work while improving accuracy and visibility.",

    content:
      "Compliance automation is transforming how organizations manage regulatory requirements. By replacing repetitive manual processes with intelligent workflows, businesses reduce operational risk, improve accuracy, and free teams to focus on strategic initiatives. In this article, we explore practical ways to introduce automation without disrupting existing operations.",
  },

  {
    id: 2,
    slug: "scaling-with-confidence",
    title: "Scaling With Confidence",
    image: "/blog2.webp",
    date: "July 10, 2026",
    readTime: "7 min read",
    description:
      "A practical guide to growing your business while maintaining strong operational standards.",

    content:
      "Growth brings opportunity, but it also introduces new operational challenges. Successful businesses scale by creating repeatable systems, documenting workflows, and investing in technology that supports long-term efficiency. Learn the key strategies for sustainable expansion.",
  },

  {
    id: 3,
    slug: "modern-onboarding-strategies",
    title: "Modern Onboarding Strategies",
    image: "/blog3.webp",
    date: "July 4, 2026",
    readTime: "6 min read",
    description:
      "Design onboarding experiences that balance speed, compliance, and customer satisfaction.",

    content:
      "First impressions matter. A streamlined onboarding experience improves customer trust while reducing friction during account creation. Discover techniques that combine user-friendly design with robust compliance practices.",
  },

  {
    id: 4,
    slug: "future-of-business-intelligence",
    title: "The Future of Business Intelligence",
    image: "/blog4.webp",
    date: "June 28, 2026",
    readTime: "8 min read",
    description:
      "Understand how data-driven insights are shaping smarter business decisions.",

    content:
      "Business intelligence is evolving beyond dashboards into predictive decision-making. Organizations that effectively leverage data gain a competitive advantage by identifying opportunities, optimizing operations, and responding faster to market changes.",
  },

  {
    id: 5,
    slug: "building-customer-trust-through-data",
    title: "Building Customer Trust Through Data",
    image: "/blog5.webp",
    date: "June 20, 2026",
    readTime: "4 min read",
    description:
      "Why transparency and responsible data practices are essential for modern businesses.",

    content:
      "Consumers increasingly expect organizations to protect their information and communicate clearly about how it is used. Establishing transparent data policies strengthens customer relationships and reinforces long-term brand credibility.",
  },

  {
    id: 6,
    slug: "marketing-trends-to-watch-in-2026",
    title: "Marketing Trends to Watch in 2026",
    image: "/blog6.webp",
    date: "June 12, 2026",
    readTime: "6 min read",
    description:
      "Explore the emerging marketing strategies that will define the next generation of growth.",

    content:
      "From AI-assisted personalization to privacy-first analytics, the marketing landscape continues to evolve. Businesses that adapt early will be better positioned to build stronger customer relationships and drive sustainable growth.",
  },
].map((blog, index) => ({
  ...blog,
  content: blogContents[index],
}));

export default blogs;