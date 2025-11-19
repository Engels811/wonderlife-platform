"use client";

export default function UsersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-purple-400">Users</h1>
      <p className="opacity-70 mt-2 mb-10">Manage all user accounts and roles</p>

      {/* TABLE */}
      <div className="bg-[#13081f] border border-purple-900/40 rounded-xl shadow-lg shadow-purple-900/20 p-6">

        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-purple-300 border-b border-purple-900/30">
              <th className="py-3">User</th>
              <th>Role</th>
              <th>Joined</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-purple-900/20">
            <UserRow user="Engels811" role="OWNER" joined="2022" />
            <UserRow user="Rebecca" role="ADMIN" joined="2023" />
            <UserRow user="Celine" role="SUPPORT" joined="2023" />
          </tbody>
        </table>

      </div>
    </div>
  );
}

function UserRow({ user, role, joined }) {
  return (
    <tr className="hover:bg-purple-900/10 transition">
      <td className="py-3">{user}</td>
      <td className="text-purple-300">{role}</td>
      <td>{joined}</td>
      <td>
        <button className="px-3 py-1 text-xs rounded-lg bg-purple-800/40 hover:bg-purple-800/60 transition">
          Edit Role
        </button>
      </td>
    </tr>
  );
}
