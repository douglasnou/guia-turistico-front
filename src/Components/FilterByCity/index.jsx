import styled from "./style.module.scss";

export const FilterByCity = ({ filteredCity, setCities, clearFilters }) => {
    return (
        <div className={styled.Container}>
            <h3 className="filter-sub">Onde:</h3>
            <ul className="filter-item">
                {
                    filteredCity.map((e) => (
                        <li key={e._id}>
                            <p onClick={() => setCities(e.cidade)}>{e.cidade}</p>
                        </li>
                    ))
                }
                <p onClick={() => clearFilters()}>Limpar filtros</p>
            </ul>
        </div>
    )
}