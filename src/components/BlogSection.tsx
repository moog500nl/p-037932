
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

// Sample blog data - this would typically come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "The Future of Home Robotics",
    excerpt: "Exploring how robots like Pulse will transform everyday life in the next decade.",
    date: "May 5, 2025",
    author: "Alex Johnson",
    readTime: "5 min read",
    slug: "future-of-home-robotics",
    category: "Technology",
    image: "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png"
  },
  {
    id: 2,
    title: "How AI is Making Robots Smarter",
    excerpt: "A deep dive into the latest AI technologies powering the next generation of robots.",
    date: "April 28, 2025",
    author: "Sarah Chen",
    readTime: "8 min read",
    slug: "ai-making-robots-smarter",
    category: "Artificial Intelligence",
    image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png"
  },
  {
    id: 3,
    title: "Designing Robots for Human Interaction",
    excerpt: "How our team approaches the psychology and design of robot-human interfaces.",
    date: "April 15, 2025",
    author: "Michael Rivera",
    readTime: "6 min read",
    slug: "designing-robots-human-interaction",
    category: "Design",
    image: "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png"
  },
  {
    id: 4,
    title: "Sustainable Materials in Robotics",
    excerpt: "Our commitment to using eco-friendly materials in the Pulse Robot production.",
    date: "April 3, 2025",
    author: "Emma Williams",
    readTime: "4 min read",
    slug: "sustainable-materials-robotics",
    category: "Sustainability",
    image: "/lovable-uploads/dc13e94f-beeb-4671-8a22-0968498cdb4c.png"
  }
];

const BlogSection = () => {
  return (
    <section className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {blogPosts.map((post) => (
          <Link to={`/blog/${post.slug}`} key={post.id} className="transition-transform hover:translate-y-[-5px] duration-300">
            <Card className="h-full overflow-hidden hover:shadow-elegant-hover">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className="pulse-chip bg-white/80">{post.category}</span>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="line-clamp-2 hover:text-pulse-600 transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">By {post.author}</p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center text-pulse-600 text-sm font-medium">
                  <BookOpen size={16} className="mr-2" />
                  Read article
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
