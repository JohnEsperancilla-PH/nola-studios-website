import { Metadata } from "next";
import { Meta } from "@/once-ui/modules";
import { baseURL } from "@/app/resources";

export async function generateMetadata(): Promise<Metadata> {
  return Meta.generate({
    title: "Contact Us - NOLA Studios",
    description: "Get in touch with NOLA Studios. Let's discuss your next project and bring your vision to life.",
    baseURL: baseURL,
    path: "/contact",
    image: `${baseURL}/api/og?title=${encodeURIComponent("Contact Us - NOLA Studios")}&type=contact`,
  });
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 