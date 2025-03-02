import { create } from "zustand";
import { persist } from 'zustand/middleware'


//
interface LanguageState {

    language: string;
  
    setLanguage: (language: string) => void;
  
  }

const useLanguageStore = create(
  persist<LanguageState>(
    (set) => ({
      language: 'en',
      setLanguage: (newLanguage: string) => set({ language: newLanguage }),
    }),
    {
      name: 'language-storage',
    }
  )
)

export default useLanguageStore