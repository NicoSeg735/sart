export default function LoginForm() {
  return (
    <div className="flex w-1/2 items-center justify-center">
      <form className="w-fullbg-white p-6 rounded-lg shadow-md border border-2">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Iniciar sesión</h2>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 font-medium mb-1">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Ingresa tu correo"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-600 font-medium mb-1">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 px-4 rounded-md  transition"
        >
          Ingresar
        </button>
      </form>
    </div>
  );
}
