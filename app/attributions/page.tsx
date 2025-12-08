import Page from "@/components/page";
import Attribution from "./components/attribution";
import Footer from "@/components/custom-footer";

export default function AttributionsPage() {
  return (
    <Page>
      <div className="items-center">
        <h1 className="text-center mt-5 mb-10 text-2xl font-semibold font-serif">
          Attributions
        </h1>
        <Attribution
          title="Bruno Mars performing in Houston, Texas on November 24, 2010"
          author="Brothers Le"
          source="https://commons.wikimedia.org/w/index.php?search=bruno+mars&title=Special%3AMediaSearch&type=image&haslicense=attribution"
          license="https://creativecommons.org/licenses/by/2.0"
        />
        <Attribution
          title="Authentic show props at the Breaking Bad store in Old Town Albuquerque"
          author="Kenneth C. Zirkel"
          source="https://commons.wikimedia.org/w/index.php?search=breaking+bad&title=Special%3AMediaSearch&type=image&haslicense=attribution"
          license="https://creativecommons.org/licenses/by/4.0"
        />
        <Attribution
          title="Microsoft Xbox Wireless Controller"
          author="MiNe from Taipei, Taiwan"
          source="https://commons.wikimedia.org/w/index.php?search=xbox+one&title=Special%3AMediaSearch&type=image&haslicense=attribution"
          license="https://creativecommons.org/licenses/by/2.0"
        />
        <Attribution
          title="By Amanda Rhoades"
          author="San Francisco Foghorn"
          source="https://commons.wikimedia.org/w/index.php?search=macklemore&title=Special%3AMediaSearch&type=image&haslicense=attribution"
          license="https://creativecommons.org/licenses/by/2.0"
        />
        <Attribution
          title="Elsa, Anna, and Olaf on a parade float during the 2016 CHOC Walk."
          author="HarshLight from San Jose, CA, USA"
          source="https://commons.wikimedia.org/w/index.php?search=olaf+frozen&title=Special%3AMediaSearch&type=image&haslicense=attribution"
          license="https://creativecommons.org/licenses/by/2.0"
        />
        <Attribution
          title="Leonardo DiCaprio at the premiere of the film 'Shutter Island' at the 60th Berlin International Film Festival"
          author="Siebbi"
          source="https://commons.wikimedia.org/w/index.php?search=Leonardo+DiCaprio&title=Special%3AMediaSearch&type=image&haslicense=attribution"
          license="https://creativecommons.org/licenses/by/3.0"
        />
        <Attribution
          title="Contact - Wildcat Logo"
          author="CLIPARTMAX.COM"
          source="https://www.clipartmax.com/middle/m2i8m2i8G6d3H7Z5_contact-wildcat-logo/"
          license="Personal Use"
        />
        <Attribution title="" author="" source="" license="" />
      </div>
      <Footer />
    </Page>
  );
}
