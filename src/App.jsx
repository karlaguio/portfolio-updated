function App() {
  return (
    <div className="font-sans p-6 bg-[#fdf6f0] text-gray-800 min-h-screen">
      <header className="bg-[#fcd5ce] p-6 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold mb-2">Hi, I'm Karla 👋</h1>
        <p className="text-lg">Aspiring Frontend Developer | Minerva University Student</p>
      </header>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="#" className="text-blue-600 hover:underline">Tic Tac Toe Game (Python)</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">AI for Waste Management</a></li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p>Email: karla@example.com</p>
      </section>
    </div>
  )
}

export default App;
