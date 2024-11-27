import ProductItem from "./ProductItem";
export default function ProductCategory ({category, products}) {
    // or const ProductCategory = ({category}) => {}
    // or const ProductCategory = props => {}
        // then props.category.name, props.category.products
    return (
        <table className='ProductCategory'>
            <th>
                <td>{category}</td>
            </th>
            {products.map((product, index) => (
                <ProductItem product={product} key={index} />
            ))}
        </table>
    );
}