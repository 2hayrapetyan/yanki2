import Cards from "./Cards";
import './catalog.css'
import CatalogMenu from "./CatalogMenu";
import { Section } from './../../../Repeat';
import Filter from "./Filter";
export default function Catalog() {
    return (
      <>
      <Section>
        <Filter />
        <div className="catalogp">
      <CatalogMenu />
        <Cards />
        </div>
        </Section>
      </>
    );
  }