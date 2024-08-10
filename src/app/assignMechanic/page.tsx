import FormContainer from '@/app/assignMechanic/components/FormContainer'

export default async function AssignMechanic() {
  return (
    <main className="flex w-full flex-grow flex-col items-center gap-8">
      <article className="flex w-full max-w-2xl flex-grow flex-col px-4 py-8">
        <h1 className="mb-6 text-2xl font-bold">Asignar mecánico a vehículo</h1>
        <FormContainer />
      </article>
    </main>
  )
}
