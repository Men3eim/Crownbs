import AdminOTAs from "../components/AdminOTAs";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your website content and settings</p>
        </div>
      </div>

      {/* Content */}
      <div className="py-8">
        <AdminOTAs />
      </div>
    </div>
  );
}
