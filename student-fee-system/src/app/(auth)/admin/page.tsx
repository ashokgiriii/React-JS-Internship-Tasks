import ProtectedRoute from "@/src/components/ui/auth/ProtectedRoute";
import AdminForm from "@/src/features/admin/components/AdminForm";

export default function AdminPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto">
          <div className="bg-white shadow rounded-lg  p-8 text-center  ">
            <div className="flex flex-col  border-gray-200 border-b">
              <h1 className="text-3xl font-bold mb-2"> Welcome to Admin Dashboard </h1>
              <p className="text-gray-600 mb-8">Manage student records and information</p>
            </div>
            <AdminForm />
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
