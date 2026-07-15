import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { ThemeProvider } from './contexts/ThemeContext'
import ScrollProgress from './components/ecraft/ScrollProgress'
import CustomCursor from './components/ecraft/CustomCursor'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollProgress />
        <CustomCursor />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
