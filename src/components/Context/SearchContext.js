import { createContext ,useState} from "react"

export const SearchContext = createContext ();

const SearchProviderContext =({children})=>{
    
    const [search, setSearch] = useState('');
    const [isTrue , setIstrue]=useState(false)     
    return (
    <SearchContext.Provider value={{ search,setSearch,isTrue,setIstrue }}>
    {children}
    </SearchContext.Provider>)

}

export default SearchProviderContext;