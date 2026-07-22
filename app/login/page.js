import AuthShell from "@/app/components/auth/AuthSell";
import LoginForm from "@/app/components/auth/LoginForm";

export const metadata = {
  title: "Login | Leadwala",
  description: "Sign in to your Leadwala account.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginPage() {
  return (
    <AuthShell
      eyebrow="Welcome back"
      title="Access your"
      gradientText="Leadwala account."
      description="Sign in to manage your account, access purchased data, and continue building targeted outreach with confidence."
    >
      <LoginForm />
    </AuthShell>
  );
}