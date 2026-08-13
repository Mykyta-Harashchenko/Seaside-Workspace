import { Header } from './components/Header'
import { PrimaryServices } from './components/PrimaryServices'
import { AdminSection } from './components/AdminSection'
import { QuickGuide } from './components/QuickGuide'
import { UsefulLinks } from './components/UsefulLinks'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-6 sm:gap-12 sm:px-6 sm:py-10 lg:px-8">
        <Header />
        <PrimaryServices />
        <AdminSection />
        <QuickGuide />
        <UsefulLinks />
        <Footer />
      </main>
    </div>
  )
}

export default App
