import AuthShell from "@/app/components/auth/AuthSell";
import SignupForm from "@/app/components/auth/SignUpForm";

export const metadata = {
  title: "Create Account | Leadwala",
  description: "Create your Leadwala account.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SignupPage() {
  return (
    <AuthShell
      eyebrow="Get started"
      title="Your data advantage"
      gradientText="starts here."
      description="Create your account to discover targeted business data built for focused, high-intent outreach."
    >
      <SignupForm />
    </AuthShell>
  );
}