import Image from 'next/image';
import { Section, Button, Card } from '@/components/ui';
import { getClubInfo, getCharities, getActivities, getMembership } from '@/lib/content';
import { formatCurrency } from '@/lib/utils';

export default function Home() {
  const club = getClubInfo();
  const charities = getCharities();
  const activities = getActivities();
  const membership = getMembership();

  const mainCharity = charities.find(c => c.type === 'Main Charity');

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/content/images/misc/home-hero.jpg"
            alt="Corvettes of Durham club gathering"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {club.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              {club.tagline} in {club.location}. Proudly serving the community since {club.established}.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/executive" size="lg">
                Meet Our Team
              </Button>
              <Button href={`mailto:${club.email}`} variant="outline" size="lg" external>
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section title="Welcome to the Club" background="white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We are a dedicated group of Corvette enthusiasts who share a passion for America&apos;s Sports Car. 
              Whether you own a classic C1 or the latest C8, you&apos;ll find a welcoming community here.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our club meets monthly for general meetings and regularly organizes cruises, 
              car shows, and charity events throughout the Durham Region and beyond.
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Monthly Meetings</h3>
              <p className="text-gray-600">
                {club.meetings.day} at {club.meetings.time}
                <br />
                <span className="text-sm">{club.meetings.venue}</span>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/content/images/logo/club-logo-full.png"
              alt="Corvettes of Durham club logo"
              width={400}
              height={200}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </Section>

      {/* Charity Section */}
      <Section 
        title="Giving Back to Our Community" 
        subtitle="Supporting local causes that matter"
        background="gray"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {charities.map((charity) => (
            <Card key={charity.name} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-corvette-red/10 rounded-full flex items-center justify-center">
                <span className="text-3xl">
                  {charity.name.includes('Cancer') ? '🎗️' : '🐾'}
                </span>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                {charity.name}
              </h3>
              <p className="text-corvette-red font-medium text-sm mb-2">
                {charity.type}
              </p>
              {charity.totalDonated && (
                <p className="text-2xl font-bold text-gray-900">
                  {formatCurrency(charity.totalDonated)}+
                </p>
              )}
              {charity.status && (
                <p className="text-gray-500 text-sm">{charity.status}</p>
              )}
            </Card>
          ))}
          <Card className="text-center bg-corvette-red text-white">
            <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-3xl">❤️</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">
              Total Contributions
            </h3>
            <p className="text-3xl font-bold">
              {mainCharity?.totalDonated ? formatCurrency(mainCharity.totalDonated) : '$52,600'}+
            </p>
            <p className="text-sm text-white/80 mt-2">
              Donated to local charities
            </p>
          </Card>
        </div>
      </Section>

      {/* Activities Section */}
      <Section title="Club Activities" background="white">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <Card key={index} className="flex items-center gap-4">
              <div className="w-12 h-12 bg-corvette-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-corvette-red font-bold">{index + 1}</span>
              </div>
              <span className="text-gray-700 font-medium">{activity}</span>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="dark">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Whether you&apos;re a longtime Corvette owner or just getting started, 
            we&apos;d love to welcome you to our club.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              href={`/content/pdfs/${membership.formFile}`} 
              size="lg"
              external
            >
              Download Membership Form
            </Button>
            <Button 
              href={`mailto:${membership.contact}`} 
              variant="outline" 
              size="lg"
              external
            >
              Email Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
