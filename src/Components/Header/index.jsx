import LogoSite from "./../../assets/logo.png";
import ButtonInput from "./../../assets/button.png";
import { useContext, useState } from "react";
import { FilterByType } from "../FilterByType";
import { FilterByCity } from "../FilterByCity";
import styled from "./style.module.scss";
import { GuideContext } from "../Providers/GuideContext";

export const HeaderGuide = () => {
    const [value, setValue] = useState("");
    const { filtered, filteredCity, setTypes, setSearch, clearFilters, setCities } = useContext(GuideContext);

    const submit = (e) => {
        e.preventDefault();
        setSearch(value);
        setValue("");
    }

    return (
        <div className={styled.FilterContainer}>
            <header>
                <img className={styled.Logo} src={LogoSite} />
                <form onSubmit={submit}>
                    <input onChange={(e) => setValue(e.target.value)}
                        type="text" placeholder="Qual seu destino?" value={value} />
                    <button type="submit"><img src={ButtonInput} /></button>
                </form>
            </header>
            <div className={styled.Filters}>
                <FilterByType setTypes={setTypes} filtered={filtered} clearFilters={clearFilters} />
                <FilterByCity setCities={setCities} clearFilters={clearFilters} filteredCity={filteredCity} />
            </div>
        </div>
    )
}