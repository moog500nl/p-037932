
import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, Clock, User, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

// This would typically come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "The Future of Home Robotics",
    excerpt: "Exploring how robots like Pulse will transform everyday life in the next decade.",
    content: `
      <p class="mb-4">The integration of robots into our homes is no longer a distant sci-fi fantasy but an emerging reality that's reshaping how we think about domestic life. As we look toward the next decade, robots like Pulse are positioned to become integral parts of our households, assisting with everything from routine chores to companionship and security.</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">The Evolution of Home Robotics</h2>
      
      <p class="mb-4">The journey of home robotics began with simple automated vacuum cleaners and has rapidly evolved into sophisticated machines capable of complex interactions and tasks. Today's robots are equipped with advanced sensors, AI capabilities, and increasingly human-like interfaces that make them more intuitive and helpful than ever before.</p>
      
      <p class="mb-4">The Pulse Robot represents the next generation of this evolution, combining mobility, adaptability, and intelligent interaction in ways that previous robots couldn't achieve. With its ability to learn from its environment and its users, Pulse is designed to become more helpful over time, adapting to the specific needs and preferences of each household.</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">Transforming Everyday Tasks</h2>
      
      <p class="mb-4">One of the most immediate impacts of home robots will be the transformation of routine household tasks. From organizing and cleaning to cooking assistance and home maintenance, robots like Pulse will help free up valuable time for the activities that matter most to people.</p>
      
      <p class="mb-4">Imagine coming home to a house that's not only clean but optimally organized, with your favorite meal being prepared and your preferences for lighting and temperature already anticipated and adjusted. This level of assistance goes beyond convenience—it fundamentally changes our relationship with our living spaces.</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">The Social Dimension</h2>
      
      <p class="mb-4">Perhaps the most intriguing aspect of the future of home robotics is the social dimension. As robots become more sophisticated in their ability to understand and respond to human emotions and needs, they will increasingly serve as companions, particularly for those who live alone or have limited social interaction.</p>
      
      <p class="mb-4">The Pulse Robot's advanced conversational abilities and emotional intelligence features are designed to create meaningful interactions that go beyond simple command-response patterns. While never replacing human connection, these robots can supplement it in valuable ways, providing cognitive stimulation, reminders, and even a form of companionship that contributes to emotional well-being.</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">Looking Ahead</h2>
      
      <p class="mb-4">As we look to the future, the integration of robots into our homes will likely accelerate, with more specialized and capable machines becoming accessible to average consumers. The key to this future isn't just technological advancement but thoughtful design that centers human needs and values.</p>
      
      <p class="mb-4">At Pulse Robotics, this human-centered approach is at the core of everything we do. We believe that the most successful home robots won't be those with the most features or processing power, but those that most seamlessly and helpfully integrate into the complex ecosystem of human lives and homes.</p>
      
      <p class="mb-4">The next decade promises to be an exciting time in the evolution of home robotics, and we're thrilled to be at the forefront of this transformation with the Pulse Robot. Stay tuned for more updates on our journey to bring the future of robotics into today's homes.</p>
    `,
    date: "May 5, 2025",
    author: "Alex Johnson",
    authorRole: "Chief Technology Officer",
    readTime: "5 min read",
    slug: "future-of-home-robotics",
    category: "Technology",
    image: "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png"
  },
  {
    id: 2,
    title: "How AI is Making Robots Smarter",
    excerpt: "A deep dive into the latest AI technologies powering the next generation of robots.",
    content: `<p>This is a placeholder for the full article content about AI in robotics.</p>`,
    date: "April 28, 2025",
    author: "Sarah Chen",
    authorRole: "AI Research Lead",
    readTime: "8 min read",
    slug: "ai-making-robots-smarter",
    category: "Artificial Intelligence",
    image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png"
  },
  {
    id: 3,
    title: "Designing Robots for Human Interaction",
    excerpt: "How our team approaches the psychology and design of robot-human interfaces.",
    content: `<p>This is a placeholder for the full article content about robot design.</p>`,
    date: "April 15, 2025",
    author: "Michael Rivera",
    authorRole: "Head of Design",
    readTime: "6 min read",
    slug: "designing-robots-human-interaction",
    category: "Design",
    image: "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png"
  },
  {
    id: 4,
    title: "Sustainable Materials in Robotics",
    excerpt: "Our commitment to using eco-friendly materials in the Pulse Robot production.",
    content: `<p>This is a placeholder for the full article content about sustainability.</p>`,
    date: "April 3, 2025",
    author: "Emma Williams",
    authorRole: "Sustainability Director",
    readTime: "4 min read",
    slug: "sustainable-materials-robotics",
    category: "Sustainability",
    image: "/lovable-uploads/dc13e94f-beeb-4671-8a22-0968498cdb4c.png"
  }
];

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);
  
  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
            <p className="mb-8">The blog post you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/blog">
                <ArrowLeft className="mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Article Header */}
        <div className="container mx-auto px-4 py-8 md:py-12">
          <Button variant="outline" asChild className="mb-8">
            <Link to="/blog">
              <ArrowLeft className="mr-2" />
              Back to Blog
            </Link>
          </Button>
          
          <div className="mb-8">
            <span className="pulse-chip mb-4">{post.category}</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-gray-500 gap-4 mb-8">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center">
                <BookOpen size={18} className="mr-2" />
                <span>{post.category}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured Image */}
        <div className="w-full max-w-5xl mx-auto mb-12">
          <div className="relative aspect-[2/1] overflow-hidden rounded-xl">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Article Content */}
        <div className="container max-w-3xl mx-auto px-4 py-8">
          <article 
            className="prose prose-lg max-w-none" 
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
          
          {/* Author Bio */}
          <div className="mt-12 p-6 border rounded-xl bg-gray-50 flex items-center">
            <div className="w-16 h-16 rounded-full bg-pulse-200 flex items-center justify-center mr-6">
              <User size={32} className="text-pulse-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">{post.author}</h3>
              <p className="text-gray-500">{post.authorRole}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
