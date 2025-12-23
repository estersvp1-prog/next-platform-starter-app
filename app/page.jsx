import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center bg-white">
      <h1 className="mb-4 text-3xl font-bold sm:text-4xl text-gray-900">
        Bases Facial I.A.
      </h1>

      <p className="mb-6 max-w-xl text-lg text-gray-700">
        Descubra a base ideal para a sua pele com a nossa tecnologia de análise inteligente de imagem combinada com perguntas sobre seu tipo de pele e comportamento ao sol.
      </p>

      <p className="mb-8 max-w-xl text-base text-gray-500">
        Nossa IA corrige erros causados pela iluminação da foto, evitando diagnósticos incorretos e garantindo mais precisão do que métodos tradicionais.
      </p>

      <Link
        href="#"
        className="rounded-xl bg-pink-600 px-8 py-4 text-white font-semibold transition hover:bg-pink-500"
      >
        Em breve – Teste sua base
      </Link>

      <span className="mt-6 text-sm text-gray-400">
        Tecnologia em desenvolvimento • Uso educacional
      </span>
    </div>
  );
}
