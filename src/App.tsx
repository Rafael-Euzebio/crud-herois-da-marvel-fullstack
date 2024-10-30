import HeroForm from "./components/HeroForm"
import HeroList from "./components/HeroList"

function App() {
  return (
    <div className="bg-marvel-bg flex">
      <main className="w-full p-5 flex flex-wrap">
        <HeroForm />
        <HeroList />
      </main>
    </div>
  )
}

export default App
