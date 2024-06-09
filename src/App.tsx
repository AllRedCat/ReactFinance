// Imports
import { Button } from "@/components/ui/button"
import { Home } from "./pages/Home"
import { Accounts } from "./pages/Accounts"
import { Categories } from "./pages/Categories"
import { Transictions } from "./pages/Transictions"
import { Table } from "./pages/Table"
import { useState } from "react"
import "./App.css"

// Pega os componentes das paginas
function HomePage() {
  return (<Home />)
}

function AccountsPage() {
  return (<Accounts />)
}

function CategoriesPage() {
  return (<Categories />)
}

function TransictionsPage() {
  return (<Transictions />)
}

function TablePage() {
  return (<Table />)
}

// Renderiza a página principal
function App() {
  // Variáveis para controlar a exibição das páginas
  const [ShowHome, setHomePage] = useState(true);
  const [ShowAccounts, setAccountsPage] = useState(false);
  const [ShowCategories, setCategoriesPage] = useState(false);
  const [ShowTransictions, setTransictionsPage] = useState(false);
  const [ShowTable, setTablePage] = useState(false);

  // Funções para mostrar as páginas
  function HomeShow() {
    setHomePage(true);
    setAccountsPage(false);
    setCategoriesPage(false);
    setTransictionsPage(false);
    setTablePage(false);
  }

  function AccountsShow() {
    setHomePage(false);
    setAccountsPage(true);
    setCategoriesPage(false);
    setTransictionsPage(false);
    setTablePage(false);
  }

  function CategoriesShow() {
    setHomePage(false);
    setAccountsPage(false);
    setCategoriesPage(true);
    setTransictionsPage(false);
    setTablePage(false);
  }

  function TransictionsShow() {
    setHomePage(false);
    setAccountsPage(false);
    setCategoriesPage(false);
    setTransictionsPage(true);
    setTablePage(false);
  }

  function TableShow() {
    setAccountsPage(false);
    setCategoriesPage(false);
    setTransictionsPage(false);
    setTablePage(true);
  }

  // Renderiza a página principal 
  return (
    <>
      <nav>
        <Button variant="outline" onClick={HomeShow}>Home</Button>
        <div>
          <Button variant="outline" onClick={AccountsShow}>Accounts</Button>
          <Button variant="outline" onClick={CategoriesShow}>Categories</Button>
          <Button variant="outline" onClick={TransictionsShow}>Transictions</Button>
          <Button variant="outline" onClick={TableShow}>Table</Button>
        </div>
      </nav>
      <main>
        {ShowHome && <HomePage />}
        {ShowAccounts && <AccountsPage />}
        {ShowCategories && <CategoriesPage />}
        {ShowTransictions && <TransictionsPage />}
        {ShowTable && <TablePage />}
      </main>
    </>
  )
}

export default App
