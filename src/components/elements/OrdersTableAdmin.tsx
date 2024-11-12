import StatusButton from "./StatusButton";


export const OrdersTableAdmin = () => {
  const data = [
    { id: 1, description: 'Description 1', status: 'Status 1', date: 'Date 1', customer: 'Customer 1', phone: '+375333333333', sum: 'Sum 1', },
    { id: 1, description: 'Description 1', status: 'Status 1', date: 'Date 1', customer: 'Customer 1', phone: 'Phone 1', sum: 'Sum 1', },
  ];
  

  return (
    <div className="table_container">
      <table className="table_orders">
        <thead>
          <tr>
            <th>ID</th>
            <th>Содержание заказа</th>
            <th>Статус</th>
            <th>Дата</th>
            <th>Покупатель</th>
            <th>Телефон</th>
            <th>Сумма</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.description}</td>
              <td> <StatusButton /></td>
              <td>{row.date}</td>
              <td>{row.customer}</td>
              <td>{row.phone}</td>
              <td>{row.sum}</td>
              <td><button className="delete_button"><img src="/src/image/delete_button.svg" alt="delete" /></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTableAdmin;
