import Dictionary from "./components/Dictionary";
import DictionaryThemeProvider from "./components/DictionaryThemeContext";
export default function App() {
  return (
    <DictionaryThemeProvider>
      <Dictionary />
    </DictionaryThemeProvider>
  );
}
