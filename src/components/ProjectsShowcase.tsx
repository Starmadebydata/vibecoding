'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

interface Project {
  id: string;
  name: string;
  description: string;
  project_url?: string;
  github_url?: string;
  tech_stack?: string[];
  image_url?: string;
}

const ProjectsShowcase: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from('vibeCoding_projects')
          .select('id, name, description, project_url, github_url, tech_stack, image_url')
          .eq('status', 'approved');

        if (error) {
          throw error;
        }
        setProjects(data || []);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch projects.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading projects...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Community Projects</h2>
        {projects.length === 0 ? (
          <p className="text-center text-gray-600">No approved projects yet. Be the first to submit one!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                {project.image_url && (
                  <img src={project.image_url} alt={project.name} className="w-full h-48 object-cover" />
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  {project.tech_stack && project.tech_stack.length > 0 && (
                    <div className="mb-4">
                      {project.tech_stack.map((tech, index) => (
                        <span key={index} className="inline-block bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    {project.project_url && (
                      <a href={project.project_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Live Demo
                      </a>
                    )}
                    {project.github_url && (
                      <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:underline">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsShowcase;
