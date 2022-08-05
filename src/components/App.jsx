import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import '../styles/App.css';
import Characters from './Characters';


const App = () => {
  const queryClient = new QueryClient()
  return (
    <div className="App">
    <QueryClientProvider client={queryClient}>
      <Characters/>
      </QueryClientProvider>      
   </div>

  );
}

export default App;
