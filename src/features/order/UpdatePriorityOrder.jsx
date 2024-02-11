import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';
import { formatCurrency } from '../../utils/helpers';

function UpdatePriorityOrder({order}) {
  const fetcher = useFetcher();
  const additionalCost = Math.round(order.orderPrice * 0.2)
  return (
    <fetcher.Form method="patch" className="text-right">
      <Button type="primary">Make priority + {formatCurrency(additionalCost)}</Button>
    </fetcher.Form>
  );
}

export default UpdatePriorityOrder;

export async function action({ request, params }) {
 
    const data = { priority: true };
    await updateOrder(params.orderId, data);
    return null
}
