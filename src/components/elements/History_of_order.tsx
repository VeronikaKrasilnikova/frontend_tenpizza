
export const AssortmentTableAdmin = () => {
    const data = [
        {orderData: '15.06.2024 18:47', orderItems: 'Четыре сезона',  count: 'Count 1', },
        {orderData: '15.06.2024 18:47',  orderItems: 'Четыре сезона', count: 'Count 2', },
    ];

    return (
        <div className="table_order_container">
        <table className="table_orders" id="table_order">
            <tbody>
                {data.map((row) => (
                    <tr key={row.orderData}>
                        <td>{row.orderData}</td>
                        <td>{row.orderItems}</td>
                        <td>{row.count}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
};

export default AssortmentTableAdmin;
