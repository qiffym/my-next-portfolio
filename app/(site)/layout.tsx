import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24">{children}</main>
      <Footer />
    </>
  );
}
