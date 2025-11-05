"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, BookOpen, Coffee, Globe, HelpCircle, Leaf, MapPin, TrendingUp, Users } from "lucide-react";

const assetMap = [
  {
    id: "hero-coffee-shop",
    url: "https://images.pexels.com/photos/2067431/pexels-photo-2067431.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Modern coffee shop interior showcasing artisan brewing"
  },
  {
    id: "artisan-espresso",
    url: "https://images.pexels.com/photos/1835900/pexels-photo-1835900.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Professional espresso brewing"
  },
  {
    id: "latte-art",
    url: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Latte art creation"
  },
  {
    id: "cold-brew",
    url: "https://images.pexels.com/photos/7282737/pexels-photo-7282737.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Cold brew coffee served"
  },
  {
    id: "ethiopian-beans",
    url: "https://images.pexels.com/photos/14745651/pexels-photo-14745651.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Ethiopian Arabica coffee beans"
  },
  {
    id: "colombian-beans",
    url: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Colombian Robusta coffee beans"
  },
  {
    id: "house-blend-beans",
    url: "https://images.pexels.com/photos/942733/pexels-photo-942733.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "House blend coffee beans"
  },
  {
    id: "head-barista",
    url: "https://images.pexels.com/photos/15444413/pexels-photo-15444413.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Maria Santos, Head Barista"
  },
  {
    id: "coffee-roaster",
    url: "https://images.pexels.com/photos/6930545/pexels-photo-6930545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "James Rodriguez, Coffee Roaster"
  },
  {
    id: "brewing-guide",
    url: "https://images.pexels.com/photos/2067431/pexels-photo-2067431.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Coffee brewing equipment guide"
  },
  {
    id: "coffee-plantation",
    url: "https://images.pexels.com/photos/7125592/pexels-photo-7125592.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Coffee plantation and farming"
  },
  {
    id: "latte-tutorial",
    url: "https://images.pexels.com/photos/2251756/pexels-photo-2251756.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Latte art tutorial and techniques"
  },
  {
    id: "coffee-shop-interior",
    url: "https://images.pexels.com/photos/26492562/pexels-photo-26492562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Cozy coffee shop interior"
  }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Menu", id: "product" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Brew & Bean"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Craft Coffee Excellence"
          description="Experience premium coffee crafted with passion, sourced ethically, and brewed to perfection in our welcoming neighborhood coffee shop"
          tag="Artisan Coffee"
          tagIcon={Coffee}
          buttons={[
            { text: "Explore Menu", href: "product" },
            { text: "Visit Us", href: "contact" }
          ]}
          imageSrc={assetMap.find(asset => asset.id === "hero-coffee-shop")?.url || "https://images.pexels.com/photos/2067431/pexels-photo-2067431.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}
          imageAlt={assetMap.find(asset => asset.id === "hero-coffee-shop")?.alt || "Modern coffee shop interior showcasing artisan brewing"}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="We believe every cup tells a story - from farm to your hands, we craft experiences that awaken the senses and bring communities together"
          buttons={[
            { text: "Our Story", href: "about" },
            { text: "Meet the Team", href: "team" }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Our Coffee Specialties"
          description="Discover our signature drinks and brewing methods that make each cup extraordinary"
          tag="Specialties"
          tagIcon={Award}
          features={[
            {
              title: "Artisan Espresso",
              description: "Hand-pulled espresso shots using our premium blend, extracted with precision timing and temperature control",
              imageSrc: assetMap.find(asset => asset.id === "artisan-espresso")?.url || "https://images.pexels.com/photos/1835900/pexels-photo-1835900.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: assetMap.find(asset => asset.id === "artisan-espresso")?.alt || "Professional espresso brewing"
            },
            {
              title: "Signature Latte Art",
              description: "Beautiful latte art created by our skilled baristas, combining perfectly steamed milk with artistic flair",
              imageSrc: assetMap.find(asset => asset.id === "latte-art")?.url || "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: assetMap.find(asset => asset.id === "latte-art")?.alt || "Latte art creation"
            },
            {
              title: "Cold Brew Perfection",
              description: "24-hour cold extraction process creating smooth, less acidic coffee with naturally sweet flavors",
              imageSrc: assetMap.find(asset => asset.id === "cold-brew")?.url || "https://images.pexels.com/photos/7282737/pexels-photo-7282737.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: assetMap.find(asset => asset.id === "cold-brew")?.alt || "Cold brew coffee served"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Premium Coffee Selection"
          description="Carefully curated coffee beans from sustainable farms around the world"
          tag="Fresh Roasted"
          tagIcon={Leaf}
          products={[
            {
              id: "1",
              name: "Ethiopian Arabica",
              price: "$18.99",
              imageSrc: assetMap.find(asset => asset.id === "ethiopian-beans")?.url || "https://images.pexels.com/photos/14745651/pexels-photo-14745651.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: assetMap.find(asset => asset.id === "ethiopian-beans")?.alt || "Ethiopian Arabica coffee beans"
            },
            {
              id: "2",
              name: "Colombian Robusta",
              price: "$16.99",
              imageSrc: assetMap.find(asset => asset.id === "colombian-beans")?.url || "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: assetMap.find(asset => asset.id === "colombian-beans")?.alt || "Colombian Robusta coffee beans"
            },
            {
              id: "3",
              name: "House Blend",
              price: "$14.99",
              imageSrc: assetMap.find(asset => asset.id === "house-blend-beans")?.url || "https://images.pexels.com/photos/942733/pexels-photo-942733.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: assetMap.find(asset => asset.id === "house-blend-beans")?.alt || "House blend coffee beans"
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Our Coffee Impact"
          description="Numbers that showcase our commitment to quality coffee and community"
          tag="Achievement"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "50K+",
              title: "cups served",
              description: "Premium coffee cups served to satisfied customers",
              icon: Coffee
            },
            {
              id: "2",
              value: "25+",
              title: "coffee origins",
              description: "Different coffee regions we source from globally",
              icon: Globe
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Coffee Experts"
          description="The passionate team behind every perfect cup"
          tag="Our Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Maria Santos",
              role: "Head Barista",
              description: "Former coffee competition champion with 8 years of experience in specialty coffee brewing and latte art mastery.",
              imageSrc: assetMap.find(asset => asset.id === "head-barista")?.url || "https://images.pexels.com/photos/15444413/pexels-photo-15444413.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: assetMap.find(asset => asset.id === "head-barista")?.alt || "Maria Santos, Head Barista"
            },
            {
              id: "2",
              name: "James Rodriguez",
              role: "Coffee Roaster",
              description: "Master roaster specializing in single-origin beans with expertise in bringing out unique flavor profiles from different regions.",
              imageSrc: assetMap.find(asset => asset.id === "coffee-roaster")?.url || "https://images.pexels.com/photos/6930545/pexels-photo-6930545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: assetMap.find(asset => asset.id === "coffee-roaster")?.alt || "James Rodriguez, Coffee Roaster"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Coffee Questions Answered"
          description="Everything you need to know about our coffee, brewing methods, and shop policies"
          tag="FAQ"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What makes your coffee special?",
              content: "We source only premium beans from sustainable farms, roast in small batches weekly, and our baristas are trained in specialty brewing techniques to ensure every cup meets our high standards."
            },
            {
              id: "2",
              title: "Do you offer dairy-free alternatives?",
              content: "Yes! We offer oat milk, almond milk, soy milk, and coconut milk alternatives for all our drinks at no extra charge."
            },
            {
              id: "3",
              title: "Can I buy beans to take home?",
              content: "Absolutely! All our coffee varieties are available for purchase. We grind them fresh or you can take whole beans home. We also offer subscription services for regular deliveries."
            },
            {
              id: "4",
              title: "What are your opening hours?",
              content: "We're open Monday to Friday 7AM-8PM, Saturday 8AM-9PM, and Sunday 8AM-6PM. Extended hours during peak seasons and holidays."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Coffee Stories & Tips"
          description="Insights, brewing guides, and stories from the world of specialty coffee"
          tag="Blog"
          tagIcon={BookOpen}
          blogs={[
            {
              id: "1",
              category: "Brewing Guide",
              title: "Perfect Home Brewing Techniques",
              excerpt: "Master the art of brewing exceptional coffee at home with our step-by-step guide to different brewing methods",
              imageSrc: assetMap.find(asset => asset.id === "brewing-guide")?.url || "https://images.pexels.com/photos/2067431/pexels-photo-2067431.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: assetMap.find(asset => asset.id === "brewing-guide")?.alt || "Coffee brewing equipment guide",
              authorName: "Maria Santos",
              authorAvatar: assetMap.find(asset => asset.id === "head-barista")?.url || "https://images.pexels.com/photos/15444413/pexels-photo-15444413.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Origin Story",
              title: "From Farm to Cup: Ethiopian Origins",
              excerpt: "Journey with us to the birthplace of coffee and discover how Ethiopian farmers cultivate the beans in your morning cup",
              imageSrc: assetMap.find(asset => asset.id === "coffee-plantation")?.url || "https://images.pexels.com/photos/7125592/pexels-photo-7125592.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: assetMap.find(asset => asset.id === "coffee-plantation")?.alt || "Coffee plantation and farming",
              authorName: "James Rodriguez",
              authorAvatar: assetMap.find(asset => asset.id === "coffee-roaster")?.url || "https://images.pexels.com/photos/6930545/pexels-photo-6930545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "12 Jan 2025"
            },
            {
              id: "3",
              category: "Technique",
              title: "Mastering Latte Art Basics",
              excerpt: "Learn the foundational techniques for creating beautiful latte art, from milk steaming to pouring patterns",
              imageSrc: assetMap.find(asset => asset.id === "latte-tutorial")?.url || "https://images.pexels.com/photos/2251756/pexels-photo-2251756.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: assetMap.find(asset => asset.id === "latte-tutorial")?.alt || "Latte art tutorial and techniques",
              authorName: "Maria Santos",
              authorAvatar: assetMap.find(asset => asset.id === "head-barista")?.url || "https://images.pexels.com/photos/15444413/pexels-photo-15444413.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "8 Jan 2025"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Visit Us"
          title="Come Experience Our Coffee"
          description="Visit our welcoming coffee shop for freshly brewed coffee, friendly service, and a warm community atmosphere. Subscribe to our newsletter for updates on new blends and special events."
          tagIcon={MapPin}
          imageSrc={assetMap.find(asset => asset.id === "coffee-shop-interior")?.url || "https://images.pexels.com/photos/26492562/pexels-photo-26492562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}
          imageAlt={assetMap.find(asset => asset.id === "coffee-shop-interior")?.alt || "Cozy coffee shop interior"}
          inputPlaceholder="Your email address"
          buttonText="Stay Updated"
          termsText="By subscribing, you'll receive updates about new coffee arrivals, brewing tips, and special events. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Brew & Bean"
          columns={[
            {
              title: "Menu",
              items: [
                { label: "Coffee Drinks", href: "product" },
                { label: "Specialty Blends", href: "feature" },
                { label: "Take Home Beans", href: "product" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Story", href: "about" },
                { label: "Meet the Team", href: "team" },
                { label: "Coffee Blog", href: "blog" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Visit Us", href: "contact" },
                { label: "FAQ", href: "faq" },
                { label: "Newsletter", href: "contact" }
              ]
            }
          ]}
          copyrightText="© 2025 | Brew & Bean Coffee Shop"
        />
      </div>
    </ThemeProvider>
  );
}