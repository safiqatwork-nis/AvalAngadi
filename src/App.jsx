import { BrowserRouter } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
