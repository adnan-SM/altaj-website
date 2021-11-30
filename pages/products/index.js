import ProductList from "../../components/ProductList";
import { client } from "../../libs/commerce";

export async function getStaticProps() {
    const { data: products } = await client.products.list();
    return {
        props: {
            products,
        },
    };
}

export default function ProductListPage({ merchant, categories, products }) {
    return (
        <>
            <ProductList products={products} />
        </>
    );
}
