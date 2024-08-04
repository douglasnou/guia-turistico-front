import styled from "./style.module.scss";

export const BannerSection = () => {
    return (
        <section className={styled.BannerSection}>
            <div>
                <h1 className="title-main">Descubra a Terra de Encantos e Belezas Naturais!</h1>
                <p className="title-down">
                    O Nordeste do Brasil é uma região vibrante, repleta de paisagens deslumbrantes, rica herança cultural e uma hospitalidade inigualável. Este paraíso tropical é o destino perfeito para quem busca aventuras inesquecíveis, praias paradisíacas, e uma imersão na autêntica cultura brasileira.
                </p>
            </div>
        </section>
    )
}