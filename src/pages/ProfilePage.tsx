'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

interface Project {
  id: string;
  name: string;
  description: string;
  project_url?: string;
  github_url?: string;
  tech_stack?: string[];
  image_url?: string;
  status: string;
}

const ProfilePage: React.FC = () => {
  const [userProjects, setUserProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserProjects = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          setError('User not logged in.');
          setLoading(false);
          return;
        }

        const { data, error: fetchError } = await supabase
          .from('vibeCoding_projects')
          .select('id, name, description, project_url, github_url, tech_stack, image_url, status')
          .eq('user_id', user.id);

        if (fetchError) {
          throw fetchError;
        }
        setUserProjects(data || []);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch your projects.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserProjects();
  }, []);

  const handleDelete = async (projectId: string) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        const { error: deleteError } = await supabase
          .from('vibeCoding_projects')
          .delete()
          .eq('id', projectId);

        if (deleteError) {
          throw deleteError;
        }
        setUserProjects(userProjects.filter(project => project.id !== projectId));
        alert('Project deleted successfully!');
      } catch (err: any) {
        alert(`Error deleting project: ${err.message}`);
      }
    }
  };

  const handleEdit = (projectId: string) => {
    // Navigate to an edit page, possibly reusing SubmitProject or a dedicated EditProject page
    // For now, we'll just log it or navigate to a placeholder
    console.log('Edit project:', projectId);
    // navigate(`/edit-project/${projectId}`); // Future implementation
    alert('Edit functionality not yet implemented.');
  };

  if (loading) {
    return <div className="text-center py-8">Loading your projects...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Submitted Projects</h1>
      {userProjects.length === 0 ? (
        <p className="text-center text-gray-600">You haven't submitted any projects yet. <a href="/submit-project" className="text-blue-500 hover:underline">Submit one now!</a></p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {userProjects.map((project) => (
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
                <p className={`text-sm font-semibold ${project.status === 'approved' ? 'text-green-600' : project.status === 'pending' ? 'text-yellow-600' : 'text-red-600'}`}>Status: {project.status}</p>
                <div className="mt-4 flex justify-end space-x-2">
                  <button
                    onClick={() => handleEdit(project.id)}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
