import styled from "./style.module.scss"


export const FilterByType = ({ filtered, setTypes, clearFilters }) => {
    
    return (
        <div className={styled.Container}>
            <h3 className="filter-sub">Você procura por:</h3>
            <ul className="filter-item">
                {
                    filtered.map((filtered)=>(
                        <li key={filtered._id}>
                            <p onClick={()=> setTypes(filtered.tipo)}>{filtered.tipo}</p>
                        </li>
                    ))
                }
                <p onClick={()=> clearFilters()}>Limpar filtros</p>
            </ul>
        </div>
    )
}