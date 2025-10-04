import Hero from '@/components/home/Hero';
import MissionVision from '@/components/home/MissionVision';
import MediaServices from '@/components/home/MediaServices';
import ImageShowcase from '@/components/home/ImageShowcase';
import NewsletterForm from '@/components/home/NewsletterForm';
import ContactForm from '@/components/home/ContactForm';

export default function Home() {
  return (
    <main>
      <Hero />
      <MissionVision />
      <MediaServices />
      <ImageShowcase />
      <NewsletterForm />
      <ContactForm />
    </main>
  );
}
