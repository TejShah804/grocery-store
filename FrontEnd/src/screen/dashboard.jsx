import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../component/header/Header";

function DashboardScreen() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await axios.get("http://localhost:5000/api/orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.success) {
        const loadedOrders = res.data.orders;

        const formattedOrders = loadedOrders.map((order, index) => ({
          ...order,
          formatted_id: String(loadedOrders.length - index).padStart(2, "0"),
        }));

        setOrders(formattedOrders);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const showOrderDetails = (order) => {
    setSelectedOrder(order);
  };

  return (
    <>
      <Header />

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">

            <h2 className="text-center mb-5">Order Dashboard</h2>

            <div className="card shadow-sm">
              <div className="card-body">

                <h4 className="mb-4">Recent Order History</h4>

                <div className="table-responsive">
                  <table className="table table-bordered align-middle">

                    <thead className="table-light">
                      <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>

                      {orders.length === 0 ? (
                        <tr>
                          <td colSpan="5" className="text-center py-4">
                            No orders found.
                          </td>
                        </tr>
                      ) : (
                        orders.map((order, index) => {
                          const cart = order.cart || [];

                          const total = cart
                            .reduce(
                              (sum, item) =>
                                sum + item.price * (item.quantity || 1),
                              0
                            )
                            .toFixed(2);

                          const productCount = cart.reduce(
                            (sum, item) => sum + (item.quantity || 1),
                            0
                          );

                          return (
                            <tr key={index}>
                              <td>#{order.formatted_id}</td>

                              <td>
                                {new Date(
                                  order.created_at
                                ).toLocaleDateString()}
                              </td>

                              <td>
                                ₹{total} ({productCount} Product
                                {productCount > 1 ? "s" : ""})
                              </td>

                              <td>
                                <span className="badge bg-success">
                                  {order.status || "Processing"}
                                </span>
                              </td>

                              <td>
                                <button
                                  className="btn btn-primary btn-sm"
                                  data-bs-toggle="modal"
                                  data-bs-target="#orderModal"
                                  onClick={() =>
                                    showOrderDetails(order)
                                  }
                                >
                                  View Details
                                </button>
                              </td>
                            </tr>
                          );
                        })
                      )}

                    </tbody>

                  </table>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Modal */}

      <div
        className="modal fade"
        id="orderModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">
                Order Details
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">

              {selectedOrder && (
                <>
                  <div className="mb-3">

                    <h6>
                      Order ID :
                      <strong>
                        {" "}
                        #{selectedOrder.formatted_id}
                      </strong>
                    </h6>

                    <h6>
                      Date :
                      <strong>
                        {" "}
                        {new Date(
                          selectedOrder.created_at
                        ).toLocaleString()}
                      </strong>
                    </h6>

                    <h6>
                      Status :
                      <span className="badge bg-success ms-2">
                        {selectedOrder.status || "Processing"}
                      </span>
                    </h6>

                  </div>

                  <table className="table table-bordered">

                    <thead className="table-light">
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                      </tr>
                    </thead>

                    <tbody>

                      {selectedOrder.cart &&
                        selectedOrder.cart.map((item, index) => (
                          <tr key={index}>
                            <td>{item.name}</td>

                            <td>₹{item.price}</td>

                            <td>{item.quantity || 1}</td>

                            <td>
                              ₹
                              {(
                                item.price *
                                (item.quantity || 1)
                              ).toFixed(2)}
                            </td>
                          </tr>
                        ))}

                    </tbody>

                  </table>

                  <div className="text-end">

                    <h4>
                      Grand Total : ₹
                      {selectedOrder.cart
                        ?.reduce(
                          (sum, item) =>
                            sum +
                            item.price *
                              (item.quantity || 1),
                          0
                        )
                        .toFixed(2)}
                    </h4>

                  </div>
                </>
              )}

            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardScreen;