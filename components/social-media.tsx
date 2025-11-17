'use client';

import { socialLinks, socialMediaConfig } from '@/lib/social-config';
import { Facebook, Youtube, Instagram, Music } from 'lucide-react';

export default function SocialMedia() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Follow Our Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of flavor enthusiasts! Watch cooking tutorials, recipe tips, and seasoning hacks on our social channels.
          </p>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {/* YouTube */}
          {socialMediaConfig.enableYoutube && (
            <a
              href={socialLinks.youtube.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary transition-all duration-300 flex flex-col items-center text-center group"
            >
              <Youtube className="w-12 h-12 text-red-600 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg text-foreground mb-2">YouTube</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                Cooking tutorials and recipe guides
              </p>
              <button className="text-primary font-semibold text-sm hover:underline">
                Subscribe
              </button>
            </a>
          )}

          {/* Facebook */}
          {socialMediaConfig.enableFacebook && (
            <a
              href={socialLinks.facebook.pageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary transition-all duration-300 flex flex-col items-center text-center group"
            >
              <Facebook className="w-12 h-12 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg text-foreground mb-2">Facebook</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                Daily deals and community posts
              </p>
              <button className="text-primary font-semibold text-sm hover:underline">
                Follow Us
              </button>
            </a>
          )}

          {/* Instagram */}
          {socialMediaConfig.enableInstagram && (
            <a
              href={socialLinks.instagram.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary transition-all duration-300 flex flex-col items-center text-center group"
            >
              <Instagram className="w-12 h-12 text-pink-600 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg text-foreground mb-2">Instagram</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                Food photography and lifestyle
              </p>
              <button className="text-primary font-semibold text-sm hover:underline">
                Follow
              </button>
            </a>
          )}

          {/* TikTok */}
          {socialMediaConfig.enableTiktok && (
            <a
              href={socialLinks.tiktok.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary transition-all duration-300 flex flex-col items-center text-center group"
            >
              <Music className="w-12 h-12 text-black dark:text-white mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg text-foreground mb-2">TikTok</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                Quick recipe hacks and fun videos
              </p>
              <button className="text-primary font-semibold text-sm hover:underline">
                Follow
              </button>
            </a>
          )}
        </div>

        {/* YouTube Videos Showcase */}
        {socialMediaConfig.enableYoutube && (
          <div className="mb-16">
            <h3 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
              Latest Videos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialLinks.youtube.videos.map((videoId, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden bg-black aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={`Jazzyjeatz Video ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="group-hover:scale-105 transition-transform duration-300"
                    ></iframe>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">
                      Video {index + 1} - Recipe Tutorial & Cooking Tips
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Facebook Feed Section */}
        {socialMediaConfig.enableFacebook && (
          <div className="mb-8">
            <h3 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
              Facebook Community
            </h3>
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <div
                style={{
                  height: `${socialMediaConfig.facebookFeedHeight}px`,
                  overflow: 'hidden',
                }}
                className="flex items-center justify-center bg-muted/20 rounded"
              >
                {/* Facebook SDK would be loaded here for dynamic feed */}
                <div className="text-center">
                  <Facebook className="w-16 h-16 text-blue-600 mx-auto mb-4 opacity-50" />
                  <p className="text-muted-foreground mb-4">
                    Facebook Posts & Community Updates
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    To enable the live Facebook feed, update the Facebook Page ID in lib/social-config.ts
                  </p>
                  <a
                    href={socialLinks.facebook.pageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition"
                  >
                    Visit Facebook Page
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
