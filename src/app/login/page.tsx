export default function LoginForm() {
  return (
    <div className="flex w-1/2 items-center justify-center">
      <form className="w-full rounded-lg border bg-white p-6 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-700">
          Iniciar sesión
        </h2>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-1 block font-medium text-gray-600"
          >
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Ingresa tu correo"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="mb-1 block font-medium text-gray-600"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-black px-4 py-2 text-white transition"
        >
          Ingresar
        </button>
      </form>
    </div>
  )
}
