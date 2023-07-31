"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Bitcoiner",
    avatar: "B",
    title: "Software Engineer",
    description: "I was a nocoiner for many years, but Mr. Nakamoto's vision for Bitcoin changed my mind. I am now a strong believer in the future of Bitcoin and I am excited to see what the future holds."
  },
  {
    name: "Nocoiner",
    avatar: "N",
    title: "Bank Teller",
    description: "I was a skeptic of Bitcoin for a long time, but Mr. Nakamoto's work on the Bitcoin protocol convinced me that Bitcoin is a real and viable alternative to traditional currencies. I am now a strong believer in Bitcoin and I am excited to see what the future holds."
  },
  {
    name: "Shitcoiner",
    avatar: "S",
    title: "Twitter Spaces Host",
    description: "I was a shitcoiner for a long time, but Mr. Nakamoto's work on the Bitcoin protocol convinced me that Bitcoin is the only true cryptocurrency. I am now a strong believer in Bitcoin and I am excited to see what the future holds."
  },
  {
    name: "Anyone willing to learn",
    avatar: "A",
    title: "Papa",
    description: "I was not a Bitcoiner, but I was willing to learn about it. After reading Mr. Nakamoto's white paper, I was convinced that Bitcoin is a revolutionary technology with the potential to change the world. I am now a strong believer in Bitcoin and I am excited to see what the future holds."
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}