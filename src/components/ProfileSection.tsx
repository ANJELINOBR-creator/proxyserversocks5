import { Youtube, Instagram, MessageCircle, Link } from "lucide-react";
import catProfileImage from "@/assets/cat-profile.png";

const ProfileSection = () => {
  const socialLinks = [
    {
      name: "YouTube",
      url: "https://www.youtube.com/@B4DLUCKY",
      icon: Youtube,
      color: "hover:text-red-500",
    },
    {
      name: "Discord",
      url: "https://discord.com/invite/MxxG8dSFVU",
      icon: MessageCircle,
      color: "hover:text-indigo-400",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/lucasmartinsbll/",
      icon: Instagram,
      color: "hover:text-pink-500",
    },
    {
      name: "Linktree",
      url: "https://linktr.ee/B4DLUCKY",
      icon: Link,
      color: "hover:text-green-400",
    },
  ];

  return (
    <div className="relative -mt-20 md:-mt-24 z-10 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-end gap-6">
        <div className="relative">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full profile-border overflow-hidden">
            <img
              src={catProfileImage}
              alt="B4DLUCKY"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-outlined mb-2">
            B4DLUCKY
          </h1>
          <p className="text-muted-foreground text-lg">
            Streamer & Content Creator
          </p>
        </div>

        <div className="flex gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 bg-card rounded-full border border-border transition-all duration-300 ${link.color} hover:scale-110 hover:border-primary`}
              aria-label={link.name}
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
