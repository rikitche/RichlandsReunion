import Page from "@/components/page";
import Footer from "@/components/custom-footer";
import { Picture } from "@/hooks/types";

export default function NowPage() {
  return (
    <Page>
      <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 text-center pt-5 pb-5 font-bold leading-tight bg-rich-blue text-balance">
        Richlands Then vs. Now
      </h2>
      <Footer />
    </Page>
  );
}
