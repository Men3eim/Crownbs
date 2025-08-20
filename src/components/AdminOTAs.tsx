import { useState, useRef } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { toast } from "sonner";

export default function AdminOTAs() {
  const [formData, setFormData] = useState({
    name: "",
    website: "",
    description: "",
    featured: false,
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const otas = useQuery(api.otas.list, {}) || [];
  const createOTA = useMutation(api.otas.create);
  const updateOTA = useMutation(api.otas.update);
  const removeOTA = useMutation(api.otas.remove);
  const generateUploadUrl = useMutation(api.otas.generateUploadUrl);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const uploadLogo = async (file: File) => {
    const uploadUrl = await generateUploadUrl();
    const result = await fetch(uploadUrl, {
      method: "POST",
      headers: { "Content-Type": file.type },
      body: file,
    });
    const json = await result.json();
    if (!result.ok) {
      throw new Error(`Upload failed: ${JSON.stringify(json)}`);
    }
    return json.storageId;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      toast.error("Please select a logo file");
      return;
    }

    setIsSubmitting(true);

    try {
      const logoId = await uploadLogo(selectedFile);
      
      await createOTA({
        ...formData,
        logoId,
      });

      toast.success("OTA added successfully!");
      
      // Reset form
      setFormData({
        name: "",
        website: "",
        description: "",
        featured: false,
      });
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      toast.error("Failed to add OTA. Please try again.");
      console.error("Error adding OTA:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFeatured = async (id: string, currentFeatured: boolean) => {
    try {
      await updateOTA({
        id: id as any,
        featured: !currentFeatured,
      });
      toast.success("OTA updated successfully!");
    } catch (error) {
      toast.error("Failed to update OTA");
      console.error("Error updating OTA:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this OTA?")) {
      try {
        await removeOTA({ id: id as any });
        toast.success("OTA deleted successfully!");
      } catch (error) {
        toast.error("Failed to delete OTA");
        console.error("Error deleting OTA:", error);
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">OTA Logo Management</h1>
      
      {/* Add New OTA Form */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Add New OTA</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                OTA Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="e.g., Booking.com"
              />
            </div>

            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                Website
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="https://www.booking.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={2}
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              placeholder="Brief description of the OTA partnership"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Logo *
            </label>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            />
            {selectedFile && (
              <p className="text-sm text-gray-600 mt-1">Selected: {selectedFile.name}</p>
            )}
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="featured"
              name="featured"
              checked={formData.featured}
              onChange={handleInputChange}
              className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
            />
            <label htmlFor="featured" className="ml-2 block text-sm text-gray-700">
              Featured on homepage
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2 rounded-md font-medium hover:from-amber-600 hover:to-amber-700 transition-all duration-200 disabled:opacity-50"
          >
            {isSubmitting ? "Adding..." : "Add OTA"}
          </button>
        </form>
      </div>

      {/* OTA List */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Current OTAs ({otas.length})</h2>
        
        {otas.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No OTAs added yet. Add your first OTA above.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otas.map((ota) => (
              <div key={ota._id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">{ota.name}</h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => toggleFeatured(ota._id, ota.featured)}
                      className={`px-2 py-1 text-xs rounded ${
                        ota.featured
                          ? "bg-amber-100 text-amber-800"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {ota.featured ? "Featured" : "Not Featured"}
                    </button>
                    <button
                      onClick={() => handleDelete(ota._id)}
                      className="text-red-600 hover:text-red-800 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                
                {ota.logoUrl && (
                  <div className="mb-3">
                    <img
                      src={ota.logoUrl}
                      alt={ota.name}
                      className="h-12 w-auto object-contain bg-gray-50 rounded p-2"
                    />
                  </div>
                )}
                
                {ota.description && (
                  <p className="text-sm text-gray-600 mb-2">{ota.description}</p>
                )}
                
                {ota.website && (
                  <a
                    href={ota.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-amber-600 hover:text-amber-700"
                  >
                    Visit Website →
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
