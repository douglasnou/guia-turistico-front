import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";

export const GuideContext = createContext({});

export const GuideProvider = ({children})=>{
    const [placesList, setPlaces] = useState([]);
    const [search, setSearch] = useState("");
    const [types, setTypes] = useState("");
    const [filtered, setFiltered] = useState([]);
    const [filteredCity, setFilteredCity] = useState([]);
    const [cities, setCities] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const newPlaceLocal = localStorage.getItem("@PLACE");
    const [cart, setCart] = useState(
        newPlaceLocal ? JSON.parse(newPlaceLocal) : []);

    useEffect(() => {
        const getPlaces = async () => {
            try {
                const { data } = await api.get("/atrativos");
                setPlaces(data);

            } catch (error) {
                console.log(error)
            }
        }
        getPlaces();
    }, []);

    useEffect(() => {
        const showTypes = async () => {
            try {
                const { data } = await api.get("/tipos");
                setFiltered(data);

            } catch (error) {
                console.log(error)
            }
        }
        showTypes();
    }, []);

    useEffect(() => {
        const showCities = async () => {
            try {
                const { data } = await api.get("/destinos");
                setFilteredCity(data)
            } catch (error) {
                console.log(error)
            }
        }
        showCities()
    }, [])

    const searchResult = placesList.filter((element) => {

        const searchItems = search === "" ?
            true : element.nome.toLowerCase().includes(search.toLowerCase());

        const byType = types === "" ? true : element.tipo === types;

        const byCity = cities === "" ? true : element.cidade.cidade === cities;

        return searchItems && byType && byCity;
    });

    const showPlace = (place)=>{
        const newPlace = [...cart, place];
        localStorage.setItem("@PLACE", JSON.stringify(newPlace));
        setCart(newPlace)        
    }
    const removePlace = ()=>{
        localStorage.clear()
        setCart("");
    }
    const clearFilters = () => {
        setTypes("");
        setCities("");
    }
    
    return(
        <GuideContext.Provider value={{ filtered, setTypes, placesList, setSearch, searchResult, clearFilters, setCities, filteredCity, cart, setIsOpen, removePlace, isOpen, showPlace }}>
            {children}
        </GuideContext.Provider>
    )
}