import { createContext ,useState} from "react"

export const SearchContext = createContext ();

const SearchProviderContext =({children})=>{
    const [search, setSearch] = useState(true);
    const [isTrue , setIstrue]=useState(false)     
    const toggleTheme = () => {
        setSearch((prevTheme) => (prevTheme ? false : true));
            window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        
      };
    
    
    return (
    <SearchContext.Provider value={{ search,setSearch,isTrue,setIstrue ,toggleTheme}}>
    {children}
    </SearchContext.Provider>)

}

export default SearchProviderContext;