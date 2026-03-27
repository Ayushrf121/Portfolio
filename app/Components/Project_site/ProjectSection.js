import React from "react";
import project_data from "../Our_JSON_Data/project_data.json";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function ProjectSection() {
  
  return (
    <section id="projects">
      <div className="min-h-screen bg-black text-white pt-32 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-orange-500">Projects</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              A collection of projects built while learning and growing
            </p>
          </div>

          {/* Project Cards */}
          <div className="space-y-8">
            {project_data.map((data, i) => (
              <div
                key={i}
                data-aos="zoom-in" data-aos-duration="2000"
                className="bg-gray-900 rounded-2xl border-2 border-gray-800 hover:border-orange-500 transition-all duration-300 overflow-hidden group">
                <div className="grid md:grid-cols-[300px_1fr] gap-6 p-6">

                  {/* Left Side */}
                  <div className="space-y-4">
                    {/* Image */}
                    <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-gray-700 hover:border-orange-500 transition-all duration-300">
                      <Image
                        src={data.image}
                        alt={data.title}
                        fill
                        className="object-cover"/>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-white group-hover:text-orange-500 transition-colors duration-300">
                      {data.title}
                    </h2>
                  </div>

                  {/* right side shift div */}
                  <div className="flex flex-col justify-between">
                    {/* Description */}
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                      {data.description}
                    </p>

                    <div>
                        {/* visit button link */}
                      <a
                        href={data.webLink}
                        target="_blank"
                        className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
                        <span>Visit Project</span>
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
