// Imports
import { Button } from "@/components/ui/button"
import { Accounts } from "./Accounts"
import { Categories } from "./Categories"
import { Transictions } from "./Transictions"
import { useState } from "react"

// Pega os componentes das paginas
function AccountsPage() {
  return (<Accounts />)
}

function CategoriesPage() {
  return (<Categories />)
}

function TransictionsPage() {
  return (<Transictions />)
}

// Renderiza a página principal
function App() {
  // Variáveis para controlar a exibição das páginas
  const [ShowAccounts, setAccountsPage] = useState(false);
  const [ShowCategories, setCategoriesPage] = useState(false);
  const [ShowTransictions, setTransictionsPage] = useState(false);

  // Funções para mostrar as páginas
  function AccountsShow() {
    setAccountsPage(true);
    setCategoriesPage(false);
    setTransictionsPage(false);
  }

  function CategoriesShow() {
    setAccountsPage(false);
    setCategoriesPage(true);
    setTransictionsPage(false);
  }

  function TransictionsShow() {
    setAccountsPage(false);
    setCategoriesPage(false);
    setTransictionsPage(true);
  }

  // Renderiza a página principal 
  return (
    <>
      <nav>
        <Button variant="outline">Home</Button>
        <>
          <Button variant="outline" onClick={AccountsShow}>Accounts</Button>
          <Button variant="outline" onClick={CategoriesShow}>Categories</Button>
          <Button variant="outline" onClick={TransictionsShow}>Transictions</Button>
        </>
      </nav>
      <main>
        {ShowAccounts && <AccountsPage />}
        {ShowCategories && <CategoriesPage />}
        {ShowTransictions && <TransictionsPage />}
      </main>
    </>
  )
}

export default App
